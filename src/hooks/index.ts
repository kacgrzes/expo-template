// Reexport all the hooks that you use within the project here
// Hooks from external packages
export {
  useBottomSheet,
  useBottomSheetDynamicSnapPoints,
  useBottomSheetInternal,
  useBottomSheetModal,
  useBottomSheetSpringConfigs,
  useBottomSheetTimingConfigs,
} from '@gorhom/bottom-sheet'
export { useAsyncStorage } from '@react-native-async-storage/async-storage'
export * from '@react-native-community/hooks'
export { useNetInfo } from '@react-native-community/netinfo'
export { useAssets } from 'expo-asset'
export { useFonts } from 'expo-font'
export { useURL } from 'expo-linking'
export { useAnimationState, useDynamicAnimation } from 'moti'
export {
  useAccessibleColors,
  useColorMode,
  useColorModeValue,
  useLayout,
  useNativeBase,
  useTheme,
} from 'native-base'
export {
  useCallback,
  useContext,
  useDebugValue,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react'
export {
  useController,
  useFieldArray,
  useForm,
  useFormContext,
  useFormState,
  useWatch,
} from 'react-hook-form'
export { useSSR, useTranslation } from 'react-i18next'
export { useWindowDimensions } from 'react-native'
export { useNotificationController, useNotifications } from 'react-native-notificated'
export {
  useSpring,
  useTiming,
  useTranslation as useTranslationRedash,
  useVector,
} from 'react-native-redash'
export { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context'
export {
  useHydrate,
  useInfiniteQuery,
  useIsFetching,
  useIsMutating,
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
  useQueryErrorResetBoundary,
} from 'react-query'
export { useDebounce, useDebouncedCallback, useThrottledCallback } from 'use-debounce'

// Custom hooks implemented in app

export * from './forms'
export * from './navigation'

export * from './useAppStateActive'
export * from './useAuth'
export * from './useBoolean'
export * from './useCachedResources'
export * from './useSecurePassword'
export * from './useTimestamp'
export * from './useToggle'
