import type { NavigatorScreenParams } from '@react-navigation/native';
import type { WatchlistStackParamList } from './WatchlistStack/type';

export type MainTabsParamList = {
  WatchlistStack: NavigatorScreenParams<WatchlistStackParamList>;
};
