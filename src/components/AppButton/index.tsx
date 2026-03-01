import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  TextStyle,
} from 'react-native';
import { AppText } from '../AppText';
import { ReactNode } from 'react';
import { colors, radii, spacing } from '@/themes';

interface AppButtonProps extends PressableProps {
  variant?: 'primary' | 'outlined';
  children?: ReactNode;
  textStyle?: StyleProp<TextStyle>;
}

export const AppButton = ({
  children,
  variant = 'primary',
  textStyle,
  style,
  ...props
}: AppButtonProps) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        typeof style === 'function' ? style({ pressed }) : style,
        pressed && styles.pressed,
      ]}
    >
      <AppText style={textStyle}>{children}</AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.xs,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
  },
  primary: {
    height: 40,
  },
  outlined: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: 'transparent',
  },
  pressed: {
    opacity: 0.2,
  },
});
