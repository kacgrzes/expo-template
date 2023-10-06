import { TextStyle } from 'react-native'

import { _appTheme } from '~constants'

type FontWeights = NonNullable<keyof (typeof _appTheme)['fontWeights'] | TextStyle['fontWeight']>

const fontWeightsMap: { [key in FontWeights]: TextStyle['fontWeight'] } = {
  '100': '100',
  '200': '200',
  '300': '300',
  '400': '400',
  '500': '500',
  '600': '600',
  '700': '700',
  '800': '800',
  '900': '900',
  bold: 'bold',
  normal: 'normal',
  hairline: '100',
  thin: '100',
  light: '300',
  medium: '500',
  semibold: '600',
  extrabold: '800',
  black: '900',
}

export const getFontWeight = (fontWeight: FontWeights): TextStyle['fontWeight'] =>
  fontWeightsMap[fontWeight]
