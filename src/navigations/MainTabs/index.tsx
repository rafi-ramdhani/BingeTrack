import { colors } from '@/themes';
import { tabScreenOptions } from '../options';
import { SettingNavigator } from './SettingStack';
import { WatchlistNavigator } from './WatchlistStack';
import { MainTabs } from './stack';
import WatchlistIcon from '@/assets/watchlist-icon.svg';
import SettingIcon from '@/assets/setting-icon.svg';

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
        options={{ tabBarIcon: WatchlistTabBarIcon, tabBarLabel: 'Watchlist' }}
      />
      <MainTabs.Screen
        name="SettingStack"
        component={SettingNavigator}
        options={{ tabBarIcon: SettingTabBarIcon, tabBarLabel: 'Settings' }}
      />
    </MainTabs.Navigator>
  );
};

const SettingTabBarIcon = ({ focused }: { focused: boolean }) => {
  return (
    <SettingIcon
      width={30}
      height={30}
      color={focused ? colors.primary : colors.textPrimary}
    />
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
