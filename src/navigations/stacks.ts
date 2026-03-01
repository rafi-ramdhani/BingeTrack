import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from './types';

export const RootStack = createNativeStackNavigator<RootStackParamList>();
