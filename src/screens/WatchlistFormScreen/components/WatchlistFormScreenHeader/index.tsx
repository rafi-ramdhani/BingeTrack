import { AppText } from '@/components/AppText';
import { useRootNavigation, useRootRoute } from '@/navigations';
import { Pressable, StyleSheet, View } from 'react-native';
import DeleteIcon from '@/assets/trash-icon.svg';
import ArrowLeftIcon from '@/assets/arrow-left-icon.svg';
import { colors, spacing } from '@/themes';
import { deleteWatchlist } from '@/database';
import { AppHeaderWrapper } from '@/components/AppHeaderWrapper';

export const WatchlistFormScreenHeader = () => {
  const route = useRootRoute<'WatchlistForm'>();
  const { params } = route;
  const { watchlistId } = params ?? {};

  const { goBack } = useRootNavigation();

  const handleDeleteWatchlist = () => {
    if (!watchlistId) return;
    deleteWatchlist(watchlistId);
    goBack();
  };

  return (
    <AppHeaderWrapper style={styles.container}>
      <View style={styles.content}>
        <Pressable
          style={({ pressed }) => [pressed && styles.pressed]}
          onPress={goBack}
        >
          <ArrowLeftIcon width={24} height={24} color={colors.textPrimary} />
        </Pressable>
        <AppText variant="screenTitle">
          {watchlistId ? 'Edit Watchlist' : 'Add Watchlist'}
        </AppText>
      </View>

      <View style={styles.content}>
        {!!watchlistId && (
          <Pressable
            style={({ pressed }) => [pressed && styles.pressed]}
            onPress={handleDeleteWatchlist}
          >
            <DeleteIcon width={24} height={24} color={colors.danger} />
          </Pressable>
        )}
      </View>
    </AppHeaderWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  pressed: {
    opacity: 0.2,
  },
});
