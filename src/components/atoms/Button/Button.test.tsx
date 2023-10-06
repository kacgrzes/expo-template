import { StyleSheet } from 'react-native'

import { Button } from '.'

import { _appTheme } from '~constants'
import { cleanup, render, fireEvent, act } from '~utils/testUtils'

afterEach(cleanup)
describe('Button', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Button title="Button" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('renders correctly Button.Primary', () => {
    const { getByTestId } = render(<Button.Primary title="Button" />)
    expect(getByTestId('baseButton').props.style).toStrictEqual({
      alignItems: 'center',
      backgroundColor: _appTheme.colors.primary,
      borderColor: 'transparent',
      borderRadius: 4,
      borderWidth: undefined,
      flexDirection: 'row',
      justifyContent: 'center',
      minWidth: 128,
      paddingHorizontal: 24,
      paddingVertical: 8,
    })
  })

  it('renders correctly Button.Secondary', () => {
    const { getByTestId } = render(<Button.Secondary title="Button" />)
    expect(getByTestId('baseButton').props.style).toStrictEqual({
      alignItems: 'center',
      backgroundColor: _appTheme.colors.secondary,
      borderColor: 'transparent',
      borderRadius: 4,
      borderWidth: undefined,
      flexDirection: 'row',
      justifyContent: 'center',
      minWidth: 128,
      paddingHorizontal: 24,
      paddingVertical: 8,
    })
  })

  it('renders correctly Button.Outline', () => {
    const { getByTestId } = render(<Button.Outline title="Button" />)
    expect(getByTestId('baseButton').props.style).toStrictEqual({
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderColor: _appTheme.colors.primary,
      borderRadius: 4,
      borderWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      justifyContent: 'center',
      minWidth: 128,
      paddingHorizontal: 24,
      paddingVertical: 8,
    })
  })

  it('renders correctly Button.Ghost', () => {
    const { getByTestId } = render(<Button.Ghost title="Button" />)
    expect(getByTestId('baseButton').props.style).toStrictEqual({
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderRadius: 4,
      borderWidth: undefined,
      flexDirection: 'row',
      justifyContent: 'center',
      minWidth: 128,
      paddingHorizontal: 24,
      paddingVertical: 8,
    })
  })

  it('renders correctly Button.Link', () => {
    const { getByTestId } = render(<Button.Link title="Button" />)
    expect(getByTestId('baseButton').props.style).toStrictEqual({
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderRadius: 4,
      borderWidth: undefined,
      flexDirection: 'row',
      justifyContent: 'center',
      minWidth: 128,
      paddingHorizontal: 24,
      paddingVertical: 8,
    })
  })

  it('should call onPress', async () => {
    const onPress = jest.fn()
    const { getByTestId, update } = render(<Button title="Button" onPress={onPress} />)
    const button = getByTestId('baseButton')
    fireEvent.press(button)
    await act(async () => {
      update(<Button />)
    })
    expect(onPress).toHaveBeenCalledTimes(1)
  })

  it('should not call onPress when disabled', async () => {
    const onPress = jest.fn()
    const { getByTestId, update } = render(<Button title="Button" disabled onPress={onPress} />)
    const button = getByTestId('baseButton')
    fireEvent.press(button)
    await act(async () => {
      update(<Button />)
    })
    expect(onPress).toHaveBeenCalledTimes(0)
  })
})
