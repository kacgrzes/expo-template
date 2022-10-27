import { ProjectColors, theme } from '~constants/theme'
import { IBoxProps } from 'native-base'

type CustomThemeType = typeof theme

declare module 'native-base' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ICustomTheme extends CustomThemeType {}
}

export type ColorNames = keyof typeof ProjectColors | IBoxProps['color']
