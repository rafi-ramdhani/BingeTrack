export const colors = {
  background: '#0B0F14',
  surface: '#111826',
  card: '#1A2333',
  border: '#2A3445',
  textPrimary: '#F5F7FA',
  textSecondary: '#A9B4C4',
  textMuted: '#7B8799',
  primary: '#4F8CFF',
  primaryPressed: '#3D74D6',
  success: '#2DB57C',
  warning: '#F2B84B',
  danger: '#E35D6A',
  overlay: 'rgba(0, 0, 0, 0.45)',
} as const;

export type Color = keyof typeof colors;
