import * as Application from 'expo-application'
import * as Clipboard from 'expo-clipboard'
import Constants from 'expo-constants'
import * as Updates from 'expo-updates'
import { Text, Pressable } from 'native-base'
import { useCallback } from 'react'

const appName = Application?.applicationName ?? Constants?.expoConfig?.name
const appVersion = Application?.nativeApplicationVersion ?? Constants?.expoConfig?.version

export const Version = ({ onPress }: { onPress: () => void }) => {
  const version = `${appName}: ${appVersion} (${Application?.nativeBuildVersion ?? '-'}) ${
    Updates.updateId ? 'update: ' + Updates.updateId : ''
  }`

  const handleShortPress = useCallback(async () => {
    await Clipboard.setStringAsync(version)
  }, [version])

  return (
    <Pressable onPress={handleShortPress} onLongPress={onPress} delayLongPress={7000} mb={1}>
      <Text opacity={40}>{version}</Text>
    </Pressable>
  )
}
