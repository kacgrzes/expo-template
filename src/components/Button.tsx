import React, { FC } from 'react'
import { Pressable, Text, PressableProps, StyleSheet, ViewStyle } from 'react-native'

import { useTheme } from '~hooks'

type ButtonProps = PressableProps & {
  title: string
  style: ViewStyle
}

export const Button: FC<ButtonProps> = ({ children, style, title, ...props }) => {
  const { s } = useTheme()
  return (
    <Pressable
      style={StyleSheet.compose(
        [s.itemsCenter, s.alignCenter, s.justifyCenter, s.minW48, s.p4, s.bgBlack, s.roundedSm],
        style
      )}
      {...props}
    >
      <Text style={[s.textWhite]}>{title}</Text>
    </Pressable>
  )
}
