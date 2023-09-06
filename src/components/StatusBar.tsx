import { StatusBar as ExpoStatusBar, StatusBarProps } from 'expo-status-bar'

// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove native-base hooks when issue is resolved
import { useColorMode } from '~hooks'

export const StatusBar = (props: StatusBarProps): JSX.Element => {
  const { colorMode } = useColorMode()

  return (
    <ExpoStatusBar
      animated
      hideTransitionAnimation="fade"
      style={colorMode === 'dark' ? 'light' : 'dark'}
      {...props}
    />
  )
}
