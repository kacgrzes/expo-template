import { ViewStyle, DimensionValue, Animated } from 'react-native'

import { SizingValue } from '~components'
import { size, scale } from '~constants'

const isDimensionValue = (value?: DimensionValue) => {
  // Dimension accepts only `percentage` strings that can be converted to numbers
  if (typeof value === 'string' && value.endsWith('%') && !isNaN(parseFloat(value.split('%')[0]))) {
    return true
  }

  if (typeof value === 'number') {
    return true
  }

  if (value instanceof Animated.Value || value instanceof Animated.ValueXY) {
    return true
  }
}

/**
 * Generates a ViewStyle object with a given spacing or dimension value and key.
 * @param value The sizing (based on theme) or dimension value to generate the ViewStyle object with.
 * @param key The key of the ViewStyle object to assign the generated value to.
 * @returns A ViewStyle object with the generated value assigned to the given key, or undefined if the value or key is not provided or the generated value is invalid.
 * @example
 *
 * valid values are:
 * - '0'
 * - '1'
 * - '2'
 * - '1/2'
 * - 'full'
 * - '256px'
 * - '50%'
 * - 'auto'
 * - 'Animated.Value(1)'
 * - 'Animated.ValueXY({ x: 1, y: 1 })'
 * - 2137
 * - 1337
 *
 * invalid values are:
 * -  {}
 * - '2137em'
 * - '2137rem'
 * - '2137vw'
 * - '2137vh'
 * - 'some string'
 */
export const generateSize = (value?: SizingValue, key?: keyof ViewStyle): ViewStyle | undefined => {
  if (!value || !key) return

  // @ts-expect-error: native base color literal
  const spaceValue = size[value]

  // strict check because 0 is falsy
  if (spaceValue !== undefined) {
    return { [key]: spaceValue }
  }

  // strict check because 0 is falsy
  if (typeof value === 'number' && spaceValue === undefined) {
    return { [key]: value }
  }

  if (typeof value === 'string' && value.endsWith('px')) {
    return { [key]: parseInt(value.split('px')[0], scale) }
  }

  if (isDimensionValue(value as DimensionValue)) {
    return { [key]: value }
  }

  if (value === 'auto') {
    return { [key]: 'auto' }
  }

  return undefined
}
