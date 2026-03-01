import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { MainTabsParamList } from './types';

export const MainTabs = createBottomTabNavigator<MainTabsParamList>();
