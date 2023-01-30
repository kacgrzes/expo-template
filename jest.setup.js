import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

// Workaround copied from the reanimated contributor github comment
// Src: https://github.com/software-mansion/react-native-reanimated/issues/3125#issuecomment-1085865635
global.__reanimatedWorkletInit = () => ({})
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'))

jest.mock('expo-linking', () => ({
  createURL: (str) => str,
}))
