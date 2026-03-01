import { FlatList, Pressable, StyleSheet } from 'react-native';
import { useWatchlists } from '../../hooks/useWatchlists';
import { useRootNavigation } from '@/navigations';
import { colors, radii, spacing } from '@/themes';
import { AppText } from '@/components/AppText';

export const WatchlistList = () => {
  const { navigate } = useRootNavigation();

  const { watchlists } = useWatchlists();

  return (
    <FlatList
      data={watchlists}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Pressable
          style={({ pressed }) => [styles.listItem, pressed && styles.pressed]}
          onPress={() => navigate('WatchlistForm', { watchlistId: item.id })}
        >
          <AppText>{item.title}</AppText>
          <AppText>{item.rating ?? '-'}</AppText>
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    gap: spacing.md,
  },
  listItem: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.xs,
    padding: spacing.md,
    gap: spacing.xs,
  },
  pressed: {
    opacity: 0.2,
  },
});
