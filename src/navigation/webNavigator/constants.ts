import { theme } from '~constants'

export const MOBILE_MIN_WIDTH = 320
export const WEB_NAV_BAR_ICON_SIZE = 24
export const WEB_SCREEN_STYLES = {
  alignSelf: 'center',
  backgroundColor: theme.colors.background,
  minWidth: MOBILE_MIN_WIDTH,
  width: '100%',
} as const
