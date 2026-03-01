import { queryFirst, runSqlAsync } from '../core/client';
import { DB_TABLES } from '../core/tables';

const SCHEMA_VERSION = 1;

type SchemaVersionRow = { version: number };

const createMetaTable = async () => {
  await runSqlAsync(`
    CREATE TABLE IF NOT EXISTS ${DB_TABLES.SCHEMA_MIGRATIONS} (
      id INTEGER PRIMARY KEY CHECK (id = 1),
      version INTEGER NOT NULL
    );
  `);
};

const getCurrentVersion = async (): Promise<number> => {
  const row = await queryFirst<SchemaVersionRow>(
    `SELECT version FROM ${DB_TABLES.SCHEMA_MIGRATIONS} WHERE id = 1;`
  );

  return row?.version ?? 0;
};

const setVersion = async (version: number) => {
  await runSqlAsync(
    `
      INSERT OR REPLACE INTO ${DB_TABLES.SCHEMA_MIGRATIONS} (id, version)
      VALUES (1, ?);
    `,
    [version]
  );
};

const migrateToV1 = async () => {
  await runSqlAsync('PRAGMA foreign_keys = ON;');

  await runSqlAsync(`
    CREATE TABLE IF NOT EXISTS ${DB_TABLES.WATCHLIST_ITEMS} (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      rating REAL,
      review TEXT,
      createdAt TEXT NOT NULL
    );
  `);
  await runSqlAsync(`
    CREATE TABLE IF NOT EXISTS ${DB_TABLES.GENRES} (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      createdAt TEXT NOT NULL
    );
  `);

  await runSqlAsync(`
    CREATE TABLE IF NOT EXISTS ${DB_TABLES.CASTS} (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      createdAt TEXT NOT NULL
    );
  `);

  await runSqlAsync(`
    CREATE TABLE IF NOT EXISTS ${DB_TABLES.WATCHLIST_ITEM_GENRES} (
      watchlistItemId INTEGER NOT NULL,
      genreId INTEGER NOT NULL,
      PRIMARY KEY (watchlistItemId, genreId),
      FOREIGN KEY (watchlistItemId) REFERENCES ${DB_TABLES.WATCHLIST_ITEMS}(id) ON DELETE CASCADE,
      FOREIGN KEY (genreId) REFERENCES ${DB_TABLES.GENRES}(id) ON DELETE CASCADE
    );
  `);

  await runSqlAsync(`
    CREATE TABLE IF NOT EXISTS ${DB_TABLES.WATCHLIST_ITEM_CASTS} (
      watchlistItemId INTEGER NOT NULL,
      castId INTEGER NOT NULL,
      PRIMARY KEY (watchlistItemId, castId),
      FOREIGN KEY (watchlistItemId) REFERENCES ${DB_TABLES.WATCHLIST_ITEMS}(id) ON DELETE CASCADE,
      FOREIGN KEY (castId) REFERENCES ${DB_TABLES.CASTS}(id) ON DELETE CASCADE
    );
  `);

  await runSqlAsync(
    `CREATE INDEX IF NOT EXISTS idx_watchlist_item_genres_watchlist ON ${DB_TABLES.WATCHLIST_ITEM_GENRES}(watchlistItemId);`
  );

  await runSqlAsync(
    `CREATE INDEX IF NOT EXISTS idx_watchlist_item_genres_genre ON ${DB_TABLES.WATCHLIST_ITEM_GENRES}(genreId);`
  );

  await runSqlAsync(
    `CREATE INDEX IF NOT EXISTS idx_watchlist_item_casts_watchlist ON ${DB_TABLES.WATCHLIST_ITEM_CASTS}(watchlistItemId);`
  );

  await runSqlAsync(
    `CREATE INDEX IF NOT EXISTS idx_watchlist_item_casts_cast ON ${DB_TABLES.WATCHLIST_ITEM_CASTS}(castId);`
  );
};

export const initDatabase = async () => {
  await createMetaTable();

  const version = await getCurrentVersion();

  if (version < 1) {
    await migrateToV1();
    await setVersion(1);
  }

  if (version > SCHEMA_VERSION) {
    throw new Error(
      `Database schema (${version}) is newer than app schema (${SCHEMA_VERSION}).`
    );
  }
};
