type GetColorValueProps = {
  color: ColorNames | string
  colors: Colors
}

export const getColorValue = ({ color, colors }: GetColorValueProps): string => {
  if (typeof color === 'string' && (color.startsWith('rgb') || color.startsWith('#'))) {
    return color
  }

  if (!color || typeof color === 'object') return 'transparent'

  const [main, number] = (color as string).split('.') as unknown as [string, string]

  // @ts-expect-error: native base color literal
  const colorToReturn = number ? colors[main][number] : colors[main]

  return colorToReturn || color
}
