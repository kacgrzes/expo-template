import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'
import { View, ViewProps, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native'

import { useTheme } from '~hooks'
import { generateStyledSystem, SpacingValue, StyledProps } from '~utils'

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
export const AbsoluteFullFill = (props: AbsoluteProps) => (
  <Box flex={1} top={0} right={0} left={0} bottom={0} {...props} position="absolute" />
)
type SpacerProps = {
  x?: SpacingValue
  y?: SpacingValue
  flex?: ViewStyle['flex']
}
export const Spacer = ({ x = 0, y = 0, flex }: SpacerProps) => <Box mt={y} mr={x} flex={flex} />
