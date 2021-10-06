import React, { FC } from 'react'
import { Pressable, Text, PressableProps } from 'react-native'
import { useTheme } from '~hooks'

type ButtonProps = PressableProps & {
  title: string
}

export const Button: FC<ButtonProps> = ({ children, title, ...props }) => {
  const { s } = useTheme()
  return (
    <Pressable
      style={[
        s.itemsCenter,
        s.alignCenter,
        s.justifyCenter,
        s.minW48,
        s.p4,
        s.bgBlack,
        s.roundedSm,
      ]}
      {...props}
    >
      <Text style={[s.textWhite]}>{title}</Text>
    </Pressable>
  )
}
