import { cleanup, render } from '@testing-library/react-native'

import { ComponentsScreen } from './ComponentsScreen'

afterEach(cleanup)

it('renders a component screen', async () => {
  const { getByText } = render(<ComponentsScreen />)

  const button = getByText('Button')
  expect(button).toBeTruthy()

  const text = getByText('This is component screen')
  expect(text).toBeTruthy()
})
