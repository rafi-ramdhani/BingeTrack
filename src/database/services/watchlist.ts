import { runSql } from '../core/client';
import { DB_TABLES } from '../core/tables';

type LastInsertIdRow = { id: number };

export type CreateWatchlistInput = {
  title: string;
  rating?: number | null;
  review?: string | null;
};

export type WatchlistItem = {
  id: number;
  title: string;
  rating: number | null;
  review: string | null;
  createdAt: string;
};

export const createWatchlist = (input: CreateWatchlistInput): number => {
  runSql(
    `
      INSERT INTO ${DB_TABLES.WATCHLIST_ITEMS} (title, rating, review, createdAt)
      VALUES (?, ?, ?, ?);
    `,
    [
      input.title,
      input.rating ?? null,
      input.review ?? null,
      new Date().toISOString(),
    ]
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
      SELECT id, title, rating, review, createdAt
      FROM ${DB_TABLES.WATCHLIST_ITEMS}
      ORDER BY createdAt DESC;
    `
  );
  return result.rows._array;
};

export const deleteWatchlist = (id: number): void => {
  runSql(`DELETE FROM ${DB_TABLES.WATCHLIST_ITEMS} WHERE id = ?;`, [id]);
};
