import { removeFalsyProperties } from './removeFalsyProperties'

describe('removeFalsyProperties', () => {
  it('should remove falsy properties from an object', () => {
    const obj = {
      fontFamily: undefined,
      fontSize: 128,
      padding: 32,
      textAlign: undefined,
      color: undefined,
      textDecorationLine: undefined,
      letterSpacing: undefined,
      lineHeight: undefined,
      textTransform: 'none',
      fontWeight: undefined,
    }

    const result = removeFalsyProperties(obj)

    expect(result).toEqual({
      fontSize: 128,
      padding: 32,
      textTransform: 'none',
    })
  })

  it('should return an empty object if all properties are falsy', () => {
    const obj = {
      fontFamily: undefined,
      textAlign: '',
      letterSpacing: null,
    }

    const result = removeFalsyProperties(obj)

    expect(result).toEqual({})
  })

  it('should return an empty object if the input is an empty object', () => {
    const obj = {}

    const result = removeFalsyProperties(obj)

    expect(result).toEqual({})
  })
})
