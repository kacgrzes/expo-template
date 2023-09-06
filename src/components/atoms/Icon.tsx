import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import iconJson from 'assets/icomoon/selection.json'
import { StyleProp, ViewStyle } from 'react-native'

// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove `useTheme` hook when issue is resolved
import { useTheme } from '~hooks'
import { IconNames } from '~types/icon'
import { ColorNames } from '~types/native-base'
import { getColorValue } from '~utils'

export type IconProps = {
  style?: StyleProp<ViewStyle>
  color?: ColorNames
  name: IconNames
  size: number
}

const IconFont = createIconSetFromIcoMoon(iconJson, 'IcoMoon', 'icomoon.ttf')

export const Icon = ({ color, name, size, style }: IconProps) => {
  const { colors } = useTheme()

  // Using provided color is prevention if user will pass color that is not included in ColorNames
  return <IconFont name={name} size={size} color={getColorValue({ color, colors })} style={style} />
}
