import { colors } from '@/themes';
import { tabScreenOptions } from '../options';
import { WatchlistNavigator } from './WatchlistStack';
import { MainTabs } from './stack';
import WatchlistIcon from '@/assets/watchlist-icon.svg';

export { MainTabs } from './stack';
export { useMainTabsNavigation, useMainTabsRoute } from './hooks';
export type { MainTabsParamList } from './type';
export type { MainTabsNavigationProp } from './hooks';

export const MainTabsNavigator = () => {
  return (
    <MainTabs.Navigator screenOptions={tabScreenOptions}>
      <MainTabs.Screen
        name="WatchlistStack"
        component={WatchlistNavigator}
        options={{ tabBarIcon: WatchlistTabBarIcon }}
      />
    </MainTabs.Navigator>
  );
};

const WatchlistTabBarIcon = ({ focused }: { focused: boolean }) => {
  return (
    <WatchlistIcon
      width={20}
      height={20}
      color={focused ? colors.primary : colors.textPrimary}
    />
  );
};
