import React, { useMemo } from 'react'
import { Text as RNText, TextStyle, TextProps } from 'react-native'

import { AppTheme, ColorNames, Colors } from '~constants'
import { useTheme } from '~hooks'

// In case adding or removing some variants check all places that specific variant is used
export type TextVariants =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'H6'
  | 'BodyRegular'
  | 'BodyBold'
  | 'CaptionRegular'
  | 'CaptionBold'
  | 'Button'

type VariantsStyle = {
  [key in TextVariants]: {
    fontFamily: TextStyle
    fontSize: TextStyle
    additionalStyles?: TextStyle
  }
}

const generateVariants = (s: AppTheme): VariantsStyle => ({
  H1: {
    fontFamily: s.fontLatoExtraBold,
    fontSize: s.text5xl,
    additionalStyles: {},
  },
  H2: {
    fontFamily: s.fontLatoExtraBold,
    fontSize: s.text4xl,
  },
  H3: {
    fontFamily: s.fontLatoExtraBold,
    fontSize: s.text3xl,
  },
  H4: {
    fontFamily: s.fontLatoBold,
    fontSize: s.textXl,
  },
  H5: {
    fontFamily: s.fontLatoBold,
    fontSize: s.textBase,
  },
  H6: {
    fontFamily: s.fontLato,
    fontSize: s.textBase,
  },
  BodyRegular: {
    fontFamily: s.fontLato,
    fontSize: s.textSm,
  },
  BodyBold: {
    fontFamily: s.fontLatoBold,
    fontSize: s.textSm,
  },
  CaptionRegular: {
    fontFamily: s.fontLato,
    fontSize: s.textXs,
  },
  CaptionBold: {
    fontFamily: s.fontLatoBold,
    fontSize: s.textXs,
  },
  Button: {
    fontFamily: s.fontLatoBold,
    fontSize: s.textBase,
  },
})

type Props = {
  children: React.ReactNode
  /**
   * **This variant will match figma designs**
   *
   * For example: `<Text variant="h1" />`
   * Text will have same font size and fontFamily as in the designs
   */
  variant?: TextVariants
  /**
   * **You can use THEME values here**, check this values in this file `~constants/theme.ts`
   *
   * For example: `<Text color="primary" />`
   * Color will have value the same as it is in theme.ts file
   */
  color?: keyof Colors
  /**
   * **Additional text styles**
   */
  style?: TextStyle
  /**
   * The center property specifies the horizontal alignment of text in an element.
   */
  center?: boolean
  /**
   * The left property specifies the horizontal alignment of text in an element.
   */
  left?: boolean
  /**
   * The right property specifies the horizontal alignment of text in an element.
   */
  right?: boolean
  /**
   * The justify property specifies the horizontal alignment of text in an element.
   */
  justify?: boolean
  /**
   * The uppercase property specifies the letter case of text in an element.
   */
  uppercase?: boolean
  /**
   * The lowercase property specifies the letter case of text in an element.
   */
  lowercase?: boolean
  /**
   * The capitalize property specifies the letter case of text in an element.
   */
  capitalize?: boolean
  /**
   * The underline property add underline to text element.
   */
  underline?: boolean
} & TextProps

/**
 * You can use Text component like this:
 * @example
 * <Text.Button color="white">Title</Text.Button>
 * <Text center>Title<Text>
 * <Text.H1 style={{ color: 'red' }}>Title</Text.H1>
 */
export const Text = ({
  children,
  center,
  left,
  right,
  justify,
  capitalize,
  lowercase,
  uppercase,
  underline,
  color = 'text',
  style = {},
  variant = 'BodyRegular',
  ...props
}: Props): JSX.Element => {
  const { s, colors } = useTheme()

  const variants = generateVariants(s)
  const { fontFamily, fontSize, additionalStyles = {} } = variants[variant]

  // Using provided color is prevention if user will pass color that is not included in theme colors
  const fontColor = (colors[color] || color) as ColorNames
  const fontColorStyle: TextStyle = useMemo(() => ({ color: fontColor }), [fontColor])
  const textAlignment: TextStyle = useMemo(
    () => ({
      textAlign: left ? 'left' : center ? 'center' : right ? 'right' : justify ? 'justify' : 'auto',
    }),
    [center, justify, left, right]
  )
  const textTransform: TextStyle = useMemo(
    () => ({
      textTransform: capitalize
        ? 'capitalize'
        : lowercase
        ? 'lowercase'
        : uppercase
        ? 'uppercase'
        : 'none',
    }),
    [capitalize, lowercase, uppercase]
  )

  const textDecoration: TextStyle = useMemo(
    () => ({
      textDecorationLine: underline ? 'underline' : 'none',
    }),
    [underline]
  )

  const textStyle = useMemo(
    () => [
      fontFamily,
      fontSize,
      additionalStyles,
      s.textMain,
      fontColorStyle,
      textAlignment,
      textTransform,
      textDecoration,
      style,
    ],
    [
      additionalStyles,
      fontColorStyle,
      fontFamily,
      fontSize,
      textDecoration,
      s.textMain,
      style,
      textAlignment,
      textTransform,
    ]
  )

  return (
    <RNText style={textStyle} {...props}>
      {children}
    </RNText>
  )
}

type TypographyProps = Omit<Props, 'variant'>
const generateTextVariant = (variant: TextVariants) => (props: TypographyProps) =>
  <Text {...props} variant={variant} />

Text.H1 = generateTextVariant('H1')
Text.H2 = generateTextVariant('H2')
Text.H3 = generateTextVariant('H3')
Text.H4 = generateTextVariant('H4')
Text.H5 = generateTextVariant('H5')
Text.H6 = generateTextVariant('H6')
Text.BodyRegular = generateTextVariant('BodyRegular')
Text.BodyBold = generateTextVariant('BodyBold')
Text.CaptionRegular = generateTextVariant('CaptionRegular')
Text.CaptionBold = generateTextVariant('CaptionBold')
Text.Button = generateTextVariant('Button')
