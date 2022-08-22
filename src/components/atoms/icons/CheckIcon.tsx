import { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

import { IconProps } from './types'

export const CheckIcon: FC<IconProps> = ({ width = 54, height = 54, color }) => (
  <Svg width={width} height={height} fill="none">
    <Path
      d="M54 27c0 14.912-12.088 27-27 27S0 41.912 0 27 12.088 0 27 0s27 12.088 27 27Z"
      fill={color}
    />
    <Path d="M41 17 23.514 34 17 27.667" stroke="#000" strokeWidth={5} />
  </Svg>
)
