import { runSql } from './client';
import { DB_TABLES } from './tables';

type LastInsertIdRow = { id: number };

export type CreateWatchlistInput = {
  title: string;
};

export type WatchlistItem = {
  id: number;
  title: string;
  createdAt: string;
};

export const createWatchlist = (input: CreateWatchlistInput): number => {
  runSql(
    `
      INSERT INTO ${DB_TABLES.WATCHLIST_ITEMS} (title, createdAt)
      VALUES (?, ?);
    `,
    [input.title, new Date().toISOString()]
  );

  const result = runSql<LastInsertIdRow>('SELECT last_insert_rowid() AS id;');
  const row = result.rows.item(0);

  if (!row) {
    throw new Error('Failed to create watchlist.');
  }

  return row.id;
};

export const getAllWatchlists = (): WatchlistItem[] => {
  const result = runSql<WatchlistItem>(
    `
      SELECT id, title, createdAt
      FROM ${DB_TABLES.WATCHLIST_ITEMS}
      ORDER BY createdAt DESC;
    `
  );
  return result.rows._array;
};

export const deleteWatchlist = (id: number): void => {
  runSql(`DELETE FROM ${DB_TABLES.WATCHLIST_ITEMS} WHERE id = ?;`, [id]);
};
