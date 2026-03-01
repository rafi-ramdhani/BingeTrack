import { createWatchlist, updateWatchlist, WatchlistItem } from '@/database';
import { useRootNavigation } from '@/navigations';

export const useSubmitWatchlist = () => {
  const { goBack } = useRootNavigation();

  return (watchlist: WatchlistItem | null) => {
    try {
      if (!watchlist) return;

      if (watchlist.id) {
        updateWatchlist(watchlist);
      } else {
        createWatchlist(watchlist);
      }

      goBack();
    } catch (error) {
      console.error('Failed to save watchlist', error);
    }
  };
};
