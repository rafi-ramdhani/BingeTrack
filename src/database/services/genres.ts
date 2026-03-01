import { runSql } from '../core/client';
import { DB_TABLES } from '../core/tables';

type LastInsertIdRow = { id: number };

export type Genre = {
  id: number;
  name: string;
  createdAt: string;
};

export type CreateGenreInput = {
  name: string;
};

export const createGenre = (input: CreateGenreInput): number => {
  runSql(
    `
      INSERT INTO ${DB_TABLES.GENRES} (name, createdAt)
      VALUES (?, ?);
    `,
    [input.name, new Date().toISOString()]
  );

  const result = runSql<LastInsertIdRow>('SELECT last_insert_rowid() AS id;');
  const row = result.rows.item(0);

  if (!row) {
    throw new Error('Failed to create genre.');
  }

  return row.id;
};

export const getAllGenres = (): Genre[] => {
  const result = runSql<Genre>(
    `
      SELECT id, name, createdAt
      FROM ${DB_TABLES.GENRES}
      ORDER BY createdAt DESC;
    `
  );

  return result.rows._array;
};

export const deleteGenre = (id: number): void => {
  runSql(`DELETE FROM ${DB_TABLES.GENRES} WHERE id = ?;`, [id]);
};
