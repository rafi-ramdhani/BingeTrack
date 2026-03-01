import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { SettingStackParamList } from './types';

export type SettingStackNavigationProp =
  NativeStackNavigationProp<SettingStackParamList>;

export const useSettingStackNavigation = () =>
  useNavigation<SettingStackNavigationProp>();

export const useSettingStackRoute = <
  TRouteName extends keyof SettingStackParamList,
>() => useRoute<RouteProp<SettingStackParamList, TRouteName>>();
