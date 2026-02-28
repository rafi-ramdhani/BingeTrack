import type { NavigatorScreenParams } from '@react-navigation/native';
import type { HomeStackParamList } from './HomeStack/type';
import type { WatchlistStackParamList } from './WatchlistStack/type';

export type MainTabsParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  WatchlistStack: NavigatorScreenParams<WatchlistStackParamList>;
};
