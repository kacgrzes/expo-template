import { Status, statusColorPalette } from "./palette";

export const lightStatusColors: Record<Status, string> = {
  success: statusColorPalette.success[500],
  error: statusColorPalette.error[500],
  warning: statusColorPalette.warning[500],
  info: statusColorPalette.info[500],
  muted: statusColorPalette.muted[600],
} as const;

export const darkStatusColors: Record<Status, string> = {
  success: statusColorPalette.success[300],
  error: statusColorPalette.error[300],
  warning: statusColorPalette.warning[300],
  info: statusColorPalette.info[300],
  muted: statusColorPalette.muted[400],
} as const;
