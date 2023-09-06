import { TypographyScreen, fontSizes } from './TypographyScreen'

import { cleanup, render } from '~utils/testUtils'

afterEach(cleanup)

describe('TypographyScreen', () => {
  it('should render Typography screen with the key elements', () => {
    const { getByText, getByRole } = render(<TypographyScreen />)

    const colorModeSwitch = getByRole('switch')
    expect(colorModeSwitch).toBeTruthy()

    fontSizes.forEach((fontSize) => {
      expect(getByText(`Text - ${fontSize}`)).toBeDefined()
    })
  })

  // TODO: add test for a color mode toggler
})
