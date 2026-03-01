import type { NavigatorScreenParams } from '@react-navigation/native';
import type { MainTabsParamList } from './MainTabs';

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabsParamList>;
  WatchlistForm: { watchlistId?: number } | undefined;
};
