import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'
import { View, ViewProps, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { useTheme } from '~hooks'
import { generateStyledSystem, StyledProps } from '~utils'

export type BoxProps = StyledProps & ViewProps
export type TouchableProps = StyledProps & TouchableOpacityProps
export type GradientProps = StyledProps & LinearGradientProps

export const Box = (props: BoxProps) => {
  const { colors } = useTheme()

  const style = generateStyledSystem(props, colors)

  return <View {...props} style={[style, props.style]} />
}

export const Touchable = (props: TouchableProps) => {
  const { colors } = useTheme()

  const style = generateStyledSystem(props, colors)

  return <TouchableOpacity {...props} style={[style, props.style]} />
}

export const Gradient = (props: GradientProps) => {
  const { colors } = useTheme()
  const style = generateStyledSystem(props, colors)

  return <LinearGradient {...props} style={[style, props.style]} />
}

export type CenterProps = Omit<BoxProps, 'alignItems' | 'justifyContent'>
export const Center = (props: CenterProps) => (
  <Box {...props} alignItems="center" justifyContent="center" />
)

type RowProps = Omit<BoxProps, 'flexDirection'>
export const Row = (props: RowProps) => <Box {...props} flexDirection="row" />

type ColumnProps = Omit<BoxProps, 'flexDirection'>
export const Column = (props: ColumnProps) => <Box {...props} flexDirection="column" />

type AbsoluteProps = Omit<BoxProps, 'position'>
export const Absolute = (props: AbsoluteProps) => <Box {...props} position="absolute" />
