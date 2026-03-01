import { Pressable, PressableProps, StyleSheet } from 'react-native';
import { AppText } from '../AppText';
import { ReactNode } from 'react';
import { colors, radii, spacing } from '@/themes';

interface AppButtonProps extends PressableProps {
  variant?: 'primary';
  children?: ReactNode;
}

export const AppButton = ({
  children,
  variant = 'primary',
  ...props
}: AppButtonProps) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
      ]}
    >
      {() => <AppText>{children}</AppText>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.xs,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
  },
  primary: {
    height: 56,
  },
  pressed: {
    opacity: 0.2,
  },
});
