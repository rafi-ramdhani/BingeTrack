import { AppButton } from '@/components/AppButton';
import { AppText } from '@/components/AppText';
import { useWatchlistStackNavigation } from '@/navigations/MainTabs/WatchlistStack';
import { colors } from '@/themes';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const WatchlistScreen = () => {
  const { navigate } = useWatchlistStackNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <AppText>Watchlist Screen</AppText>
      <AppButton onPress={() => navigate('MovieDetailScreen', { movieId: 2 })}>
        To Detail 2
      </AppButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
