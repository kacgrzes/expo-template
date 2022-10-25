import * as Application from 'expo-application'
import * as Clipboard from 'expo-clipboard'
import * as Updates from 'expo-updates'
import { Text, Pressable } from 'native-base'
import { useCallback } from 'react'

export const Version = ({ onPress }: { onPress: () => void }) => {
  const version = `${Application.applicationName}: ${Application.nativeApplicationVersion} (${
    Application.nativeBuildVersion
  }) ${Updates.updateId ? 'update: ' + Updates.updateId : ''}`

  const handleShortPress = useCallback(async () => {
    await Clipboard.setStringAsync(version)
  }, [version])

  return (
    <Pressable onPress={handleShortPress} onLongPress={onPress} delayLongPress={7000} mb={1}>
      <Text opacity={40}>{version}</Text>
    </Pressable>
  )
}
