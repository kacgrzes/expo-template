import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'

import { useTheme } from '~hooks'

export const StatusBar = (): JSX.Element => {
  const { userTheme } = useTheme()

  return (
    <ExpoStatusBar
      animated
      hideTransitionAnimation="fade"
      style={userTheme === 'dark' ? 'light' : 'dark'}
    />
  )
}
