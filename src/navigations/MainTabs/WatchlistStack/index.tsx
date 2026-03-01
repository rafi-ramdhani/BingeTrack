import { WatchlistScreen } from '@/screens/WatchlistScreen';
import { stackScreenOptions } from '@/navigations/options';
import { WatchlistStack } from './stacks';

export { WatchlistStack } from './stacks';
export { useWatchlistStackNavigation, useWatchlistStackRoute } from './hooks';
export type { WatchlistStackParamList } from './types';
export type { WatchlistStackNavigationProp } from './hooks';

export const WatchlistNavigator = () => {
  return (
    <WatchlistStack.Navigator screenOptions={stackScreenOptions}>
      <WatchlistStack.Screen
        name="WatchlistScreen"
        component={WatchlistScreen}
      />
    </WatchlistStack.Navigator>
  );
};
