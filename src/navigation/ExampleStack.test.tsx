import { NavigationContainer } from '@react-navigation/native'
import { render, fireEvent } from '@testing-library/react-native'
import React from 'react'

import { ExamplesStack } from './ExamplesStack'

describe('Testing react navigation', () => {
  test('screen contains a button linking to the components screen', async () => {
    const component = (
      <NavigationContainer>
        <ExamplesStack />
      </NavigationContainer>
    )

    const { findByText } = render(component)
    const button = await findByText('Go to ApplicationInfo')

    expect(button).toBeTruthy()
  })

  test('pressing on the button takes you to the components screen', async () => {
    const component = (
      <NavigationContainer>
        <ExamplesStack />
      </NavigationContainer>
    )

    const { queryByText, getByText } = render(component)
    const oldScreen = await queryByText('This is Example screen')
    const button = getByText('Go to Components')
    expect(oldScreen).toBeTruthy()
    expect(button).toBeTruthy()

    fireEvent.press(button)
    const newScreen = getByText('This is component screen')
    const componentButton = getByText('Button')

    expect(newScreen).toBeTruthy()
    expect(componentButton).toBeTruthy()
  })
})
