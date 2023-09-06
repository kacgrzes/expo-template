// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove (or replace with the new UI config) whole file when issue is resolved
import { LinearGradient } from 'expo-linear-gradient'
import type { INativebaseConfig } from 'native-base'

export const nativeBaseConfig: INativebaseConfig = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
}
