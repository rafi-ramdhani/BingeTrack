import { colors } from '@/themes';
import { StyleSheet, Text, TextProps } from 'react-native';

interface AppTextProps extends TextProps {}

export default function AppText({ children, ...props }: AppTextProps) {
  return (
    <Text {...props} style={[styles.base]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    color: colors.textPrimary,
  },
});
