import { ReactNode } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

interface AppHeaderWrapperProps extends ViewProps {
  children: ReactNode;
}

export const AppHeaderWrapper = ({
  children,
  style,
}: AppHeaderWrapperProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
