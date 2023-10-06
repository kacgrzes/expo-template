import { theme } from '~constants/theme'

declare global {
  // THEME
  type AppTheme = typeof theme.light

  // FONTS
  type FontSizes = keyof AppTheme['fontSizes']
  type LetterSpacings = keyof AppTheme['letterSpacings']
  type LineHeights = keyof AppTheme['lineHeights']
  type FontWeights = keyof AppTheme['fontWeights']
  type Fonts = keyof AppTheme['fonts']

  // COLORS
  type Colors = AppTheme['colors']
  type ColorNames = NestedKeys<Colors>

  type Sizes = AppTheme['sizes']
  type SizeKeys = keyof Sizes
}
