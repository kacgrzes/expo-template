import { forwardRef, useMemo } from 'react'
import { Platform, StyleProp, ViewStyle } from 'react-native'
import {
  KeyboardAwareScrollView as KeyboardAwareScroll,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view'

import { useNavigationTheme } from '~hooks'

const keyboardDismissMode = Platform.OS === 'android' ? 'on-drag' : 'interactive'

type Props = Omit<KeyboardAwareScrollViewProps, 'contentContainerStyle'> & {
  contentContainerStyle?: Omit<StyleProp<ViewStyle>, 'false'>
}

export const KeyboardAwareScrollView = forwardRef<KeyboardAwareScroll, Props>(
  ({ children, contentContainerStyle = {}, ...rest }, ref) => {
    const { navigationTheme } = useNavigationTheme()

    const scrollViewContentContainerStyle = useMemo(
      () => [
        {
          backgroundColor: navigationTheme.colors.background,
          flexGrow: 1,
        },
        contentContainerStyle,
      ],
      [contentContainerStyle, navigationTheme.colors.background]
    )

    return (
      <KeyboardAwareScroll
        ref={ref}
        enableOnAndroid
        bounces={false}
        alwaysBounceHorizontal={false}
        enableResetScrollToCoords={false}
        alwaysBounceVertical={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode={keyboardDismissMode}
        contentContainerStyle={scrollViewContentContainerStyle}
        {...rest}
      >
        {children}
      </KeyboardAwareScroll>
    )
  }
)
