import { SettingScreen } from '@/screens/SettingScreen';
import { stackScreenOptions } from '@/navigations/options';
import { SettingStack } from './stacks';

export { SettingStack } from './stacks';
export { useSettingStackNavigation, useSettingStackRoute } from './hooks';
export type { SettingStackParamList } from './types';
export type { SettingStackNavigationProp } from './hooks';

export const SettingNavigator = () => {
  return (
    <SettingStack.Navigator screenOptions={stackScreenOptions}>
      <SettingStack.Screen name="SettingScreen" component={SettingScreen} />
    </SettingStack.Navigator>
  );
};
