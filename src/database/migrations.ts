import { queryFirst, runSqlAsync } from './client';
import { DB_TABLES } from './tables';

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
  await runSqlAsync(`
    CREATE TABLE IF NOT EXISTS ${DB_TABLES.WATCHLIST_ITEMS} (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      createdAt TEXT NOT NULL
    );
  `);
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
