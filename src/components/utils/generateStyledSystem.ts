import { ImageStyle, StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import {
  FlexProps,
  SpacingProps,
  StyledProps,
  LayoutsProps,
  BordersProps,
  SizingProps,
  EffectsProps,
  BackgroundProps,
} from '../atoms/types'
import { generateSize } from './generateSize'

import { hex2rgba, getColorValue, removeFalsyProperties } from '~utils'

const generateFlexStyle = ({
  flex,
  justifyContent,
  alignItems,
  alignContent,
  alignSelf,
  flexDirection,
  flexGrow,
  flexBasis,
  flexShrink,
  flexWrap,
}: FlexProps): StyleProp<ViewStyle> => {
  const style: StyleProp<ViewStyle> = [
    !!flex && { flex },
    !!justifyContent && { justifyContent },
    !!alignItems && { alignItems },
    !!alignContent && { alignContent },
    !!alignSelf && { alignSelf },
    !!flexDirection && { flexDirection },
    !!flexGrow && { flexGrow },
    !!flexBasis && { flexBasis },
    !!flexShrink && { flexShrink },
    !!flexWrap && { flexWrap },
  ]
  return style.filter(Boolean)
}

const generateSpacingStyle = ({
  m,
  mt,
  ml,
  mb,
  mr,
  mx,
  my,
  p,
  pr,
  pt,
  pl,
  pb,
  px,
  py,
}: SpacingProps): StyleProp<ViewStyle> => {
  const style: StyleProp<ViewStyle> = [
    generateSize(p, 'padding'),
    generateSize(px, 'paddingHorizontal'),
    generateSize(py, 'paddingVertical'),
    generateSize(pb, 'paddingBottom'),
    generateSize(pt, 'paddingTop'),
    generateSize(pl, 'paddingLeft'),
    generateSize(pr, 'paddingRight'),
    generateSize(m, 'margin'),
    generateSize(mx, 'marginHorizontal'),
    generateSize(my, 'marginVertical'),
    generateSize(mb, 'marginBottom'),
    generateSize(mt, 'marginTop'),
    generateSize(ml, 'marginLeft'),
    generateSize(mr, 'marginRight'),
  ]

  return style.filter(Boolean)
}

const generateBgStyle = (
  { bg, backgroundColor, backgroundOpacity = 1, bgOpacity = 1 }: BackgroundProps,
  colors: Colors
): StyleProp<ViewStyle> => {
  if (!bg && !backgroundColor) return undefined

  const color = getColorValue({ color: (bg || backgroundColor) as ColorNames, colors })
  if (color && (typeof bgOpacity === 'number' || typeof backgroundOpacity === 'number')) {
    return { backgroundColor: hex2rgba(color, (bgOpacity || backgroundOpacity) as number) }
  }
}

const generateSizingStyle = ({
  w,
  width,
  h,
  height,
  minW,
  minWidth,
  minH,
  minHeight,
  maxW,
  maxWidth,
  maxH,
  maxHeight,
}: SizingProps): StyleProp<ViewStyle> => {
  const style: StyleProp<ViewStyle> = [
    generateSize(w, 'width'),
    generateSize(width, 'width'),
    generateSize(h, 'height'),
    generateSize(height, 'height'),
    generateSize(minW, 'minWidth'),
    generateSize(minWidth, 'minWidth'),
    generateSize(minH, 'minHeight'),
    generateSize(minHeight, 'minHeight'),
    generateSize(maxW, 'maxWidth'),
    generateSize(maxWidth, 'maxWidth'),
    generateSize(maxH, 'maxHeight'),
    generateSize(maxHeight, 'maxHeight'),
  ]
  return style
}

const generateEffectsStyle = ({ opacity }: EffectsProps): StyleProp<ViewStyle> => {
  return {
    opacity,
  }
}

const generateBordersStyle = (
  {
    borderColor,
    borderRadius,
    borderStyle,
    borderWidth,
    borderBottomEndRadius,
    borderBottomLeftRadius,
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth,
    borderTopEndRadius,
    borderTopLeftRadius,
    borderTopWidth,
  }: BordersProps,
  colors: Colors
): StyleProp<ViewStyle> => {
  return [
    !!borderColor && { borderColor: getColorValue({ color: borderColor, colors }) },
    {
      borderBottomEndRadius,
      borderBottomLeftRadius,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth,
      borderTopEndRadius,
      borderTopLeftRadius,
      borderTopWidth,
      borderRadius,
      borderStyle,
      borderWidth,
    },
  ]
}

const generateLayoutsStyle = ({
  position,
  bottom,
  left,
  right,
  top,
  zIndex,
  overflow,
}: LayoutsProps): StyleProp<ViewStyle> => {
  return {
    position,
    bottom,
    left,
    right,
    top,
    zIndex,
    overflow,
  }
}

export const generateStyleSheet = <T extends ViewStyle | TextStyle | ImageStyle>(
  styles: StyleProp<T>[]
) => {
  const flattenStyles = StyleSheet.flatten(styles)
  const filteredFlattenStyles = removeFalsyProperties(flattenStyles)

  return filteredFlattenStyles
}

/**
 * Generates a style sheet based on the provided props and colors.
 * @param props - The styled props to generate styles for.
 * @param colors - The color palette to use for generating background and border styles.
 * @returns A style sheet object containing the generated styles.
 */
export const generateStyledSystem = (props: StyledProps, colors: Colors) => {
  const flexStyle = generateFlexStyle(props)
  const spacingStyle = generateSpacingStyle(props)
  const bgStyle = generateBgStyle(props, colors)
  const sizingStyle = generateSizingStyle(props)
  const effectsStyle = generateEffectsStyle(props)
  const bordersStyle = generateBordersStyle(props, colors)
  const layoutsStyle = generateLayoutsStyle(props)

  return generateStyleSheet([
    flexStyle,
    spacingStyle,
    bgStyle,
    sizingStyle,
    effectsStyle,
    bordersStyle,
    layoutsStyle,
  ])
}
