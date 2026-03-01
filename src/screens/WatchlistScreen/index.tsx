import { AppText } from '@/components/AppText';
import {
  deleteWatchlist,
  getAllWatchlists,
  type WatchlistItem,
} from '@/database';
import { useRootNavigation } from '@/navigations';
import { colors, radii, spacing } from '@/themes';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const WatchlistScreen = () => {
  const rootNavigation = useRootNavigation();
  const [watchlists, setWatchlists] = useState<WatchlistItem[]>([]);
  const [message, setMessage] = useState('');

  const loadWatchlists = () => {
    try {
      const items = getAllWatchlists();
      setWatchlists(items);
    } catch (error) {
      console.error('Failed to load watchlists', error);
      setMessage('Failed to load watchlists.');
    }
  };

  useEffect(() => {
    const unsubscribe = rootNavigation.addListener('focus', loadWatchlists);
    loadWatchlists();

    return unsubscribe;
  }, [rootNavigation]);

  const handleDelete = (id: number) => {
    const previous = watchlists;
    setWatchlists(current => current.filter(item => item.id !== id));

    try {
      deleteWatchlist(id);
      setMessage(`Deleted watchlist id: ${id}`);
    } catch (error) {
      console.error('Failed to delete watchlist', error);
      setWatchlists(previous);
      setMessage('Failed to delete watchlist.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {message ? <AppText>{message}</AppText> : null}

      {watchlists.map(item => (
        <View key={item.id} style={styles.listItem}>
          <AppText>{item.title}</AppText>
          <AppText>{item.rating ?? '-'}</AppText>
          <AppText numberOfLines={2}>{item.review ?? '-'}</AppText>
          <View style={styles.actions}>
            <Pressable
              style={({ pressed }) => [
                styles.actionButton,
                pressed && styles.pressed,
              ]}
              onPress={() =>
                rootNavigation.navigate('WatchlistForm', {
                  watchlistId: item.id,
                })
              }
            >
              <AppText>Edit</AppText>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.actionButton,
                pressed && styles.pressed,
              ]}
              onPress={() => handleDelete(item.id)}
            >
              <AppText>Delete</AppText>
            </Pressable>
          </View>
        </View>
      ))}

      <Pressable
        onPress={() => rootNavigation.navigate('WatchlistForm')}
        style={({ pressed }) => [
          styles.fab,
          pressed && styles.pressed,
        ]}
      >
        <AppText style={styles.fabLabel}>+</AppText>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
    gap: spacing.md,
  },
  listItem: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.xs,
    padding: spacing.md,
    gap: spacing.xs,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  actionButton: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.xs,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  pressed: {
    opacity: 0.5,
  },
  fab: {
    position: 'absolute',
    right: spacing.lg,
    bottom: spacing.lg,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabLabel: {
    fontSize: 28,
    lineHeight: 28,
    fontWeight: '700',
  },
});
