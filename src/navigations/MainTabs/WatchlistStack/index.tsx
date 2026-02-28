import { WatchlistScreen } from '@/screens/WatchlistScreen';
import { MovieDetailScreen } from '@/screens/MovieDetailScreen';
import { WatchlistStack } from './stack';

export { useWatchlistStackNavigation, useWatchlistStackRoute } from './hooks';

export type { WatchlistStackParamList } from './type';

export const WatchlistNavigator = () => {
  return (
    <WatchlistStack.Navigator>
      <WatchlistStack.Screen
        name="WatchlistScreen"
        component={WatchlistScreen}
      />
      <WatchlistStack.Screen
        name="MovieDetailScreen"
        component={MovieDetailScreen}
      />
    </WatchlistStack.Navigator>
  );
};
