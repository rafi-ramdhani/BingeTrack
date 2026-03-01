export { DB_TABLES, getDatabase, queryAll, queryFirst, runSql, runSqlAsync, useDatabaseReady } from './core';
export { initDatabase } from './migrations';
export {
  createCast,
  createGenre,
  createWatchlist,
  deleteCast,
  deleteGenre,
  deleteWatchlist,
  getAllCasts,
  getAllGenres,
  getAllWatchlists,
} from './services';
export type {
  Cast,
  CreateCastInput,
  CreateGenreInput,
  CreateWatchlistInput,
  Genre,
  WatchlistItem,
} from './services';
