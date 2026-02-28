import { AppButton } from '@/components/AppButton';
import { AppText } from '@/components/AppText';
import { useWatchlistStackNavigation } from '@/navigations/MainTabs/WatchlistStack';
import { View } from 'react-native';

export const WatchlistScreen = () => {
  const { navigate } = useWatchlistStackNavigation();

  return (
    <View>
      <AppText>Watchlist Screen</AppText>
      <AppButton onPress={() => navigate('MovieDetailScreen', { movieId: 2 })}>
        To Detail 2
      </AppButton>
    </View>
  );
};
