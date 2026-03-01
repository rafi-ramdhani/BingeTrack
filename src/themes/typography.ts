import { TextStyle } from 'react-native';

export type TypographyKey =
  | 'screenTitle'
  | 'title'
  | 'body'
  | 'meta'
  | 'caption';

type TypographyStyle = Pick<TextStyle, 'fontSize' | 'lineHeight' | 'fontWeight'>;

export const typography: Record<TypographyKey, TypographyStyle> = {
  screenTitle: { fontSize: 24, lineHeight: 32, fontWeight: '700' },
  title: { fontSize: 16, lineHeight: 20, fontWeight: '700' },
  body: { fontSize: 14, lineHeight: 18, fontWeight: '500' },
  meta: { fontSize: 13, lineHeight: 16, fontWeight: '500' },
  caption: { fontSize: 12, lineHeight: 14, fontWeight: '500' },
};
