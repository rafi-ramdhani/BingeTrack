import type { NavigatorScreenParams } from '@react-navigation/native';
import type { SettingStackParamList } from './SettingStack/type';
import type { WatchlistStackParamList } from './WatchlistStack/type';

export type MainTabsParamList = {
  SettingStack: NavigatorScreenParams<SettingStackParamList>;
  WatchlistStack: NavigatorScreenParams<WatchlistStackParamList>;
};
