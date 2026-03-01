export { createCast, deleteCast, getAllCasts } from './casts';
export { createGenre, deleteGenre, getAllGenres } from './genres';
export {
  createWatchlist,
  deleteWatchlist,
  getAllWatchlists,
  getWatchlistById,
  updateWatchlist,
} from './watchlist';
export type { Cast, CreateCastInput } from './casts';
export type { CreateGenreInput, Genre } from './genres';
export type {
  CreateWatchlistInput,
  UpdateWatchlistInput,
  WatchlistItem,
} from './watchlist';
