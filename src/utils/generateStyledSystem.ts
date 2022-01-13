import { StyleProp, ViewStyle } from 'react-native'
import { ThemeProps } from 'react-native-whirlwind'

import { Colors, spacing } from '~constants'

type Spacing = Exclude<ThemeProps['spacing'], 'px'>
type SpacingUnit = keyof Spacing

export type SpacingValue = SpacingUnit | `${number}%` | `${number}px`

type SpacingKeys =
  | 'm'
  | 'mt'
  | 'ml'
  | 'mr'
  | 'mb'
  | 'mx'
  | 'my'
  | 'p'
  | 'pr'
  | 'pt'
  | 'pl'
  | 'pb'
  | 'px'
  | 'py'

type SpacingProps = { [key in SpacingKeys]?: SpacingValue }

type FlexProps = {
  flex?: ViewStyle['flex']
  flexGrow?: ViewStyle['flexGrow']
  justifyContent?: ViewStyle['justifyContent']
  alignItems?: ViewStyle['alignItems']
  alignSelf?: ViewStyle['alignSelf']
  flexDirection?: ViewStyle['flexDirection']
  flexWrap?: ViewStyle['flexWrap']
}

type BackgroundProps = {
  bg?: keyof Colors
}

type Sizing = 'width' | 'minWidth' | 'maxWidth' | 'height' | 'minHeight' | 'maxHeight'

/**
 * **Exmaples of spacing usage:**, 'width' | 'minWidth' | 'maxWidth' | 'height' | 'minHeight' | 'maxHeight'
 *
 * - `<Box width={4} />` - Box will have width of 4 units
 * - `<Box width="100%" />` - Box will have 100% width
 * -
 */

export type SizingValue = `${number}%` | number | undefined
type SizingProps = {
  [key in Sizing]?: SizingValue
}

type EffectsProps = {
  /**
   * **Float value**, from 0 to 1
   */
  opacity?: ViewStyle['opacity']
}

type BordersProps = {
  borderColor?: keyof Colors
  /**
   * **Number value in pixels**
   */
  borderRadius?: ViewStyle['borderRadius']
  /**
   * **Number value in pixels**
   */
  borderWidth?: ViewStyle['borderWidth']
  /**
   * **Number value in pixels**
   */
  borderStyle?: ViewStyle['borderStyle']
  /**
   * **Number value in pixels**
   */
  borderBottomEndRadius?: ViewStyle['borderBottomEndRadius']
  /**
   * **Number value in pixels**
   */
  borderBottomLeftRadius?: ViewStyle['borderBottomLeftRadius']
  /**
   * **Number value in pixels**
   */
  borderTopEndRadius?: ViewStyle['borderTopEndRadius']
  /**
   * **Number value in pixels**
   */
  borderTopLeftRadius?: ViewStyle['borderTopLeftRadius']
}

type LayoutsProps = {
  position?: ViewStyle['position']
  zIndex?: ViewStyle['zIndex']
  top?: ViewStyle['top']
  bottom?: ViewStyle['bottom']
  right?: ViewStyle['right']
  left?: ViewStyle['left']
}

export type StyledProps = SizingProps &
  BackgroundProps &
  SpacingProps &
  FlexProps &
  EffectsProps &
  BordersProps &
  LayoutsProps

const isSpacing = (styleAttr: number | string): styleAttr is SpacingUnit => {
  return typeof styleAttr === 'number' || styleAttr === 'px'
}

const endsWithPx = (styleAttr: string): styleAttr is `${number}px` => {
  return styleAttr.endsWith('px')
}

const generateSpace = (value?: SpacingValue, key?: keyof ViewStyle): ViewStyle | false => {
  if (!value || !key) return false

  if (isSpacing(value)) {
    return { [key]: spacing[value] }
  }

  if (endsWithPx(value)) {
    return { [key]: parseInt(value, 10) }
  }

  return {
    [key]: value,
  }
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
    generateSpace(p, 'padding'),
    generateSpace(px, 'paddingHorizontal'),
    generateSpace(py, 'paddingVertical'),
    generateSpace(pb, 'paddingBottom'),
    generateSpace(pt, 'paddingTop'),
    generateSpace(pl, 'paddingLeft'),
    generateSpace(pr, 'paddingRight'),
    generateSpace(m, 'margin'),
    generateSpace(mx, 'marginHorizontal'),
    generateSpace(my, 'marginVertical'),
    generateSpace(mb, 'marginBottom'),
    generateSpace(mt, 'marginTop'),
    generateSpace(ml, 'marginLeft'),
    generateSpace(mr, 'marginRight'),
  ]

  return style.filter(Boolean)
}

const generateFlexStyle = ({
  flex,
  justifyContent,
  alignItems,
  alignSelf,
  flexDirection,
  flexGrow,
  flexWrap,
}: FlexProps): StyleProp<ViewStyle> => {
  const style: StyleProp<ViewStyle> = [
    !!flex && { flex },
    !!justifyContent && { justifyContent },
    !!alignItems && { alignItems },
    !!alignSelf && { alignSelf },
    !!flexDirection && { flexDirection },
    !!flexGrow && { flexGrow },
    !!flexWrap && { flexWrap },
  ]
  return style.filter(Boolean)
}

const generateBgStyle = ({ bg }: BackgroundProps, colors: Colors): StyleProp<ViewStyle> => {
  const style: StyleProp<ViewStyle> = [!!bg && { backgroundColor: colors[bg] }]
  return style.filter(Boolean)
}

const generateSizingStyle = ({
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
}: SizingProps): StyleProp<ViewStyle> => {
  const style: StyleProp<ViewStyle> = {
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
  }
  return style
}

const generateEffectsStyle = ({ opacity }: EffectsProps): StyleProp<ViewStyle> => {
  return {
    opacity,
  }
}

const generateBordersStyle = (
  { borderColor, borderRadius, borderStyle, borderWidth }: BordersProps,
  colors: Colors
): StyleProp<ViewStyle> => {
  return [
    !!borderColor && { borderColor: colors[borderColor] },
    {
      borderRadius,
      borderStyle,
      borderWidth,
    },
  ]
}

const generateLayouts = ({
  position,
  bottom,
  left,
  right,
  top,
  zIndex,
}: LayoutsProps): StyleProp<ViewStyle> => {
  return {
    position,
    bottom,
    left,
    right,
    top,
    zIndex,
  }
}

export const generateStyledSystem = (props: StyledProps, colors: Colors): StyleProp<ViewStyle> => {
  const flexStyle = generateFlexStyle(props)
  const spacingStyle = generateSpacingStyle(props)
  const bgStyle = generateBgStyle(props, colors)
  const sizingStyle = generateSizingStyle(props)
  const effects = generateEffectsStyle(props)
  const borders = generateBordersStyle(props, colors)
  const layouts = generateLayouts(props)

  return [flexStyle, spacingStyle, bgStyle, sizingStyle, effects, borders, layouts]
}
