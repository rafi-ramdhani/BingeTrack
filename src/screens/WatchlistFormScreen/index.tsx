import { AppButton } from '@/components/AppButton';
import { AppInput } from '@/components/AppInput';
import { useRootNavigation } from '@/navigations';
import { colors, spacing } from '@/themes';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WatchlistFormScreenHeader } from './components/WatchlistFormScreenHeader';
import { useWatchlist } from './hooks/useWatchlist';
import { useSubmitWatchlist } from './hooks/useSubmitWatchlist';

export const WatchlistFormScreen = () => {
  const { goBack } = useRootNavigation();

  const { watchlist, editWatchlist } = useWatchlist();

  const submitWatchlist = useSubmitWatchlist();

  return (
    <SafeAreaView style={styles.container}>
      <WatchlistFormScreenHeader />

      <AppInput
        value={watchlist?.title ?? ''}
        onChangeText={value => editWatchlist({ key: 'title', value })}
        placeholder="Title"
        placeholderTextColor={colors.textMuted}
        autoFocus={!watchlist}
      />

      <View style={styles.buttonsContainer}>
        <AppButton
          style={styles.buttonSave}
          onPress={() => submitWatchlist(watchlist)}
        >
          Save
        </AppButton>
        <AppButton variant="outlined" onPress={goBack}>
          Cancel
        </AppButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.xxl,
    gap: spacing.md,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  buttonSave: {
    flex: 1,
  },
});
