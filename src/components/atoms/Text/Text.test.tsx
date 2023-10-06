import { Text } from '.'

import { theme } from '~constants'
import { cleanup, render } from '~utils/testUtils'

afterEach(cleanup)

const defaultTextStyles = {
  textTransform: 'none',
  color: theme.light.colors.text,
}

describe('Text', () => {
  it('renders correctly text', () => {
    const { getByText } = render(<Text>Hello World</Text>)
    expect(getByText('Hello World')).toBeDefined()
  })

  it('renders correctly with underline', () => {
    const { getByText } = render(<Text underline>Hello World</Text>)

    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      textDecorationLine: 'underline',
    })
  })

  it('renders correctly with bold text', () => {
    const { getByText } = render(<Text bold>Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontWeight: 'bold',
    })
  })

  it('renders correctly with italic text', () => {
    const { getByText } = render(<Text italic>Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontStyle: 'italic',
    })
  })

  it('renders correctly with capitalized text', () => {
    const { getByText } = render(<Text capitalize>Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      textTransform: 'capitalize',
    })
  })

  it('renders correctly with uppercase text', () => {
    const { getByText } = render(<Text uppercase>Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      textTransform: 'uppercase',
    })
  })

  it('renders correctly with lowercase text', () => {
    const { getByText } = render(<Text lowercase>Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      textTransform: 'lowercase',
    })
  })

  it('renders correctly with a custom font size', () => {
    const { getByText } = render(<Text fontSize={20}>Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontSize: 20,
      textTransform: 'none',
    })
  })

  it('renders correctly with a custom color', () => {
    const { getByText } = render(<Text color="red.400">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      color: theme.light.colors.red[400],
      textTransform: 'none',
    })
  })

  it('renders correctly with a custom text alignment', () => {
    const { getByText } = render(<Text textAlign="center">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      textAlign: 'center',
    })
  })

  it('renders correctly with a custom text decoration', () => {
    const { getByText } = render(<Text textDecoration="line-through">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      textDecorationLine: 'line-through',
    })
  })

  it('renders correctly with a custom font weight', () => {
    const { getByText } = render(<Text fontWeight="bold">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontWeight: 'bold',
    })
  })

  it('renders correctly with multiple styles', () => {
    const { getByText } = render(
      <Text bold italic color="red.400" textDecoration="underline">
        Hello World
      </Text>
    )
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: theme.light.colors.red[400],
      textDecorationLine: 'underline',
    })
  })

  it('renders correctly with variant H1', () => {
    const { getByText } = render(<Text variant="H1">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 48,
      fontWeight: 'normal',
    })
  })

  it('renders correctly compound Text.H1', () => {
    const { getByText } = render(<Text.H1>Hello World</Text.H1>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 48,
      fontWeight: 'normal',
    })
  })

  it('renders correctly with variant H1Bold', () => {
    const { getByText } = render(<Text variant="H1Bold">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 48,
      fontWeight: 'bold',
    })
  })

  it('renders correctly compound Text.H1Bold', () => {
    const { getByText } = render(<Text.H1Bold>Hello World</Text.H1Bold>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 48,
      fontWeight: 'bold',
    })
  })

  it('renders correctly with variant H2', () => {
    const { getByText } = render(<Text variant="H2">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 36,
      fontWeight: 'normal',
    })
  })

  it('renders correctly compound Text.H2', () => {
    const { getByText } = render(<Text.H2>Hello World</Text.H2>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 36,
      fontWeight: 'normal',
    })
  })

  it('renders correctly with variant H2Bold', () => {
    const { getByText } = render(<Text variant="H2Bold">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 36,
      fontWeight: 'bold',
    })
  })

  it('renders correctly compound Text.H2Bold', () => {
    const { getByText } = render(<Text.H2Bold>Hello World</Text.H2Bold>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 36,
      fontWeight: 'bold',
    })
  })

  it('renders correctly with variant H3', () => {
    const { getByText } = render(<Text variant="H3">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 30,
      fontWeight: 'normal',
    })
  })

  it('renders correctly compound Text.H3', () => {
    const { getByText } = render(<Text.H3>Hello World</Text.H3>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 30,
      fontWeight: 'normal',
    })
  })

  it('renders correctly with variant H3Bold', () => {
    const { getByText } = render(<Text variant="H3Bold">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 30,
      fontWeight: 'bold',
    })
  })

  it('renders correctly compound Text.H3Bold', () => {
    const { getByText } = render(<Text.H3Bold>Hello World</Text.H3Bold>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 30,
      fontWeight: 'bold',
    })
  })

  it('renders correctly with variant H4', () => {
    const { getByText } = render(<Text variant="H4">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 24,
      fontWeight: 'normal',
    })
  })

  it('renders correctly compound Text.H4', () => {
    const { getByText } = render(<Text.H4>Hello World</Text.H4>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 24,
      fontWeight: 'normal',
    })
  })

  it('renders correctly with variant H4Bold', () => {
    const { getByText } = render(<Text variant="H4Bold">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 24,
      fontWeight: 'bold',
    })
  })

  it('renders correctly compound Text.H4Bold', () => {
    const { getByText } = render(<Text.H4Bold>Hello World</Text.H4Bold>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 24,
      fontWeight: 'bold',
    })
  })

  it('renders correctly with variant H5', () => {
    const { getByText } = render(<Text variant="H5">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      fontWeight: 'normal',
    })
  })

  it('renders correctly compound Text.H5', () => {
    const { getByText } = render(<Text.H5>Hello World</Text.H5>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      fontWeight: 'normal',
    })
  })

  it('renders correctly with variant H5Bold', () => {
    const { getByText } = render(<Text variant="H5Bold">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      fontWeight: 'bold',
    })
  })

  it('renders correctly compound Text.H5Bold', () => {
    const { getByText } = render(<Text.H5Bold>Hello World</Text.H5Bold>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      fontWeight: 'bold',
    })
  })

  it('renders correctly with variant H6', () => {
    const { getByText } = render(<Text variant="H6">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      fontWeight: 'normal',
    })
  })

  it('renders correctly compound Text.H6', () => {
    const { getByText } = render(<Text.H6>Hello World</Text.H6>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      fontWeight: 'normal',
    })
  })

  it('renders correctly with variant H6Bold', () => {
    const { getByText } = render(<Text variant="H6Bold">Hello World</Text>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      fontWeight: 'bold',
    })
  })

  it('renders correctly compound Text.H6Bold', () => {
    const { getByText } = render(<Text.H6Bold>Hello World</Text.H6Bold>)
    expect(getByText('Hello World').props.style).toStrictEqual({
      ...defaultTextStyles,
      fontFamily: 'Lato-Bold',
      fontSize: 18,
      fontWeight: 'bold',
    })
  })
})
