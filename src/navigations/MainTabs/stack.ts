import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { MainTabsParamList } from './type';

export const MainTabs = createBottomTabNavigator<MainTabsParamList>();
