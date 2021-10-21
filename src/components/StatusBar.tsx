import { StatusBar as ExpoStatusBar, StatusBarProps } from 'expo-status-bar'
import React from 'react'

import { useTheme } from '~hooks'

export const StatusBar = (props: StatusBarProps): JSX.Element => {
  const { userTheme } = useTheme()

  return (
    <ExpoStatusBar
      animated
      hideTransitionAnimation="fade"
      style={userTheme === 'dark' ? 'light' : 'dark'}
      {...props}
    />
  )
}
