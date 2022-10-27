import { theme } from '~constants'
import { ColorNames } from '~types/native-base'

type GetColorValueProps = {
  color: ColorNames
  colors: typeof theme['colors']
}

export const getColorValue = ({ color, colors }: GetColorValueProps): string => {
  if (!color || typeof color === 'object') return 'transparent'

  const [main, number] = color.split('.') as unknown as [string, string]

  // @ts-expect-error: native base color literal
  return number ? colors[main][number] : colors[main]
}
