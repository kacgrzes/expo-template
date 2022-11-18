import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics'
import { Platform } from 'react-native'

export const hapticImpact = async (hapticStyle?: ImpactFeedbackStyle): Promise<void> => {
  try {
    if (Platform.OS === 'web') return

    await impactAsync(hapticStyle || ImpactFeedbackStyle.Medium)
  } catch {
    // TODO: Handle error somehow
  }
}
