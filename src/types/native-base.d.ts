import { theme } from '~constants/theme'

type CustomThemeType = NonNullable<typeof theme>

declare module 'native-base' {
  type ICustomTheme = CustomThemeType
}
