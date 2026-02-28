import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { MainTabsParamList } from './type';

export type MainTabsNavigationProp = BottomTabNavigationProp<MainTabsParamList>;

export const useMainTabsNavigation = () =>
  useNavigation<MainTabsNavigationProp>();

export const useMainTabsRoute = <TRouteName extends keyof MainTabsParamList>() =>
  useRoute<RouteProp<MainTabsParamList, TRouteName>>();
