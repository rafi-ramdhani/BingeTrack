import { colors, typography, type TypographyKey } from '@/themes';
import { StyleSheet, Text, TextProps } from 'react-native';

interface AppTextProps extends TextProps {
  variant?: TypographyKey;
}

export const AppText = ({
  children,
  variant = 'body',
  ...props
}: AppTextProps) => {
  return (
    <Text {...props} style={[styles.base, typography[variant], props.style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    color: colors.textPrimary,
  },
});
