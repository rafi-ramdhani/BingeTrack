import { getWatchlistById, WatchlistItem } from '@/database';
import { useRootRoute } from '@/navigations';
import { useEffect, useState } from 'react';

export const useWatchlist = () => {
  const route = useRootRoute<'WatchlistForm'>();
  const watchlistId = route.params?.watchlistId;

  const [watchlist, setWatchlist] = useState<WatchlistItem | null>(null);

  const editWatchlist = <TKey extends keyof WatchlistItem>({
    key,
    value,
  }: {
    key: keyof WatchlistItem;
    value: WatchlistItem[TKey];
  }) => {
    if (watchlist) {
      setWatchlist(prev => (prev ? { ...prev, [key]: value } : prev));
      return;
    }

    setWatchlist({ [key]: value } as unknown as WatchlistItem);
  };

  useEffect(() => {
    if (!watchlistId) return;

    const foundWatchlist = getWatchlistById(watchlistId);
    if (!foundWatchlist) return;

    setWatchlist(foundWatchlist);
  }, [watchlistId]);

  return { watchlist, editWatchlist };
};
