import { SignInScreen } from './SignInScreen'

import { act, cleanup, fireEvent, render } from '~utils/testUtils'

afterEach(cleanup)

describe('SignInScreen', () => {
  it('should render SignIn screen with the key elements', () => {
    const { getByTestId, getAllByRole } = render(<SignInScreen />)
    const emailInput = getByTestId('emailInput')
    const passwordInput = getByTestId('passwordInput')
    const confirmationCheckbox = getByTestId('confirmCheckbox')
    const buttons = getAllByRole('button')

    expect(emailInput).toBeDefined()
    expect(passwordInput).toBeDefined()
    expect(confirmationCheckbox).toBeDefined()
    expect(buttons.length).toBe(2)
  })

  it('should display errors on required fields', async () => {
    const { findAllByText, getByTestId, update } = render(<SignInScreen />)
    const emailInput = getByTestId('emailInput')
    const passwordInput = getByTestId('passwordInput')
    const signInButton = getByTestId('signInButton')

    expect(signInButton).toBeDefined()
    fireEvent.changeText(emailInput, '')
    fireEvent.changeText(passwordInput, '')
    fireEvent.press(signInButton)

    await act(async () => {
      update(<SignInScreen />)
      const requiredInputs = await findAllByText('This field is required')
      expect(requiredInputs.length).toBe(2)
    })
  })

  it('should validate email format', async () => {
    const { getByTestId, getByText, update } = render(<SignInScreen />)

    const emailInput = getByTestId('emailInput')
    fireEvent.changeText(emailInput, 'test@test')

    const signInButton = getByTestId('signInButton')
    expect(signInButton).toBeDefined()

    fireEvent.press(signInButton)

    await act(async () => {
      update(<SignInScreen />)
    })

    expect(getByText('Incorrect e-mail address')).toBeTruthy()
  })
})
