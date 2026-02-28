import { TextStyle } from 'react-native';

export const typography: {
  [key: string]: Pick<TextStyle, 'fontSize' | 'lineHeight' | 'fontWeight'>;
} = {
  title: { fontSize: 16, lineHeight: 20, fontWeight: '700' },
  body: { fontSize: 14, lineHeight: 18, fontWeight: '500' },
  meta: { fontSize: 13, lineHeight: 16, fontWeight: '500' },
  caption: { fontSize: 12, lineHeight: 14, fontWeight: '500' },
} as const;
