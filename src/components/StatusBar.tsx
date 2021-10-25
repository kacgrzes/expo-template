import { StatusBar as ExpoStatusBar, StatusBarProps } from 'expo-status-bar'

import { useColorScheme } from '~hooks'

export const StatusBar = (props: StatusBarProps): JSX.Element => {
  const { colorScheme } = useColorScheme()

  return (
    <ExpoStatusBar
      animated
      hideTransitionAnimation="fade"
      style={colorScheme === 'dark' ? 'light' : 'dark'}
      {...props}
    />
  )
}
