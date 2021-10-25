import { FC } from 'react'
import { Pressable, Text, PressableProps, StyleSheet, ViewStyle } from 'react-native'

import { useTheme, useCallback } from '~hooks'

type ButtonProps = PressableProps & {
  title: string
  style?: ViewStyle
}

export const Button: FC<ButtonProps> = ({ children, style, title, ...props }) => {
  const { s } = useTheme()

  // TODO: Think about better solution for cases like this
  const styleFunction = useCallback(
    ({ pressed }) =>
      StyleSheet.compose(
        [
          pressed ? s.opacity60 : s.opacity100,
          s.itemsCenter,
          s.alignCenter,
          s.justifyCenter,
          s.minW48,
          s.p4,
          s.roundedSm,
          s.bgPrimary,
        ],
        style
      ),
    [s, style]
  )

  return (
    <Pressable style={styleFunction} {...props}>
      <Text style={s.textWhite}>{title}</Text>
    </Pressable>
  )
}
