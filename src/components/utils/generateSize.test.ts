import { Animated } from 'react-native'

import { generateSize } from './generateSize'

describe('generateSize', () => {
  it('should return undefined when some of the arguments are missing', () => {
    expect(generateSize()).toBe(undefined)
    expect(generateSize('0')).toBe(undefined)
    expect(generateSize(undefined, 'padding')).toBe(undefined)
  })

  it('should return 0 for padding and margin', () => {
    expect(generateSize('0', 'padding')).toEqual({ padding: 0 })
    expect(generateSize('0', 'margin')).toEqual({ margin: 0 })
  })

  it('should return correct values from some of the declared in theme space object', () => {
    expect(generateSize('1/2', 'padding')).toEqual({ padding: '50%' })
    expect(generateSize('1/3', 'margin')).toEqual({ margin: '33.333%' })
    expect(generateSize('full', 'width')).toEqual({ width: '100%' })
    expect(generateSize('px', 'height')).toEqual({ height: 1 })
  })

  it('should return value provided in argument, when is valid & does not exist in space object', () => {
    expect(generateSize(2137, 'padding')).toEqual({ padding: 2137 })
    expect(generateSize(1337, 'margin')).toEqual({ margin: 1337 })
  })

  it('should return an animated value', () => {
    const animatedValue = new Animated.Value(1)
    expect(generateSize(animatedValue, 'padding')).toEqual({ padding: animatedValue })
  })

  it('should return the value passed as percentage', () => {
    expect(generateSize('50%', 'padding')).toEqual({ padding: '50%' })
  })

  it('should return undefined when value is not valid', () => {
    // @ts-expect-error: invalid value
    expect(generateSize({}, 'padding')).toBe(undefined)
  })

  it('should return undefined when value is string even though it is not a NaN', () => {
    // @ts-expect-error: invalid value
    expect(generateSize('2137', 'padding')).toEqual(undefined)
  })

  it(`should have width 'auto'`, () => {
    expect(generateSize('auto', 'width')).toEqual({ width: 'auto' })
  })

  it('should allow px value on width', () => {
    expect(generateSize('256px', 'height')).toEqual({ height: 598 })
  })
})
