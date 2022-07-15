import AsyncStorage from '@react-native-async-storage/async-storage'
import * as ExpoSecureStore from 'expo-secure-store'

async function getItem(
  key: string,
  options?: ExpoSecureStore.SecureStoreOptions | undefined
): Promise<string | null> {
  const isAvailable = await ExpoSecureStore.isAvailableAsync()
  if (!isAvailable) {
    return AsyncStorage.getItem(key)
  }
  return ExpoSecureStore.getItemAsync(key, options)
}

async function setItem(
  key: string,
  value: string,
  options?: ExpoSecureStore.SecureStoreOptions | undefined
): Promise<void> {
  const isAvailable = await ExpoSecureStore.isAvailableAsync()
  if (!isAvailable) {
    return AsyncStorage.setItem(key, value)
  }
  return ExpoSecureStore.setItemAsync(key, value, options)
}

async function removeItem(
  key: string,
  options?: ExpoSecureStore.SecureStoreOptions | undefined
): Promise<void> {
  const isAvailable = await ExpoSecureStore.isAvailableAsync()
  if (!isAvailable) {
    return AsyncStorage.removeItem(key)
  }
  return ExpoSecureStore.deleteItemAsync(key, options)
}

export const secureStore = {
  getItem,
  setItem,
  removeItem,
}
