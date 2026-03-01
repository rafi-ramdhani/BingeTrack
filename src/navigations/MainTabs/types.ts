import type { NavigatorScreenParams } from '@react-navigation/native';
import type { SettingStackParamList } from './SettingStack/types';
import type { WatchlistStackParamList } from './WatchlistStack/types';

export type MainTabsParamList = {
  SettingStack: NavigatorScreenParams<SettingStackParamList>;
  WatchlistStack: NavigatorScreenParams<WatchlistStackParamList>;
};
