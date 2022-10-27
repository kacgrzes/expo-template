import { ScrollView } from 'native-base'
import { useMemo } from 'react'
import { Platform, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import {
  KeyboardAwareScrollView as KeyboardAwareScroll,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view'

import { useNavigationTheme } from '~hooks'

const keyboardDismissMode = Platform.OS === 'android' ? 'none' : 'interactive'
const ScrollWrapper = Platform.OS === 'android' ? ScrollView : KeyboardAwareScroll

type Props = Omit<KeyboardAwareScrollViewProps, 'contentContainerStyle'> & {
  contentContainerStyle?: StyleProp<ViewStyle>
}

export const KeyboardAwareScrollView = ({
  children,
  contentContainerStyle = {},
  ...rest
}: Props): JSX.Element => {
  const { navigationTheme } = useNavigationTheme()
  const scrollViewContentContainerStyle = useMemo(
    () =>
      StyleSheet.compose<ViewStyle>(
        [
          {
            alignItems: 'center',
            backgroundColor: navigationTheme.colors.background,
            flexGrow: 1,
            justifyContent: 'space-between',
          },
        ],
        contentContainerStyle
      ),
    [contentContainerStyle, navigationTheme.colors.background]
  )
  return (
    <ScrollWrapper
      contentContainerStyle={scrollViewContentContainerStyle}
      enableAutomaticScroll
      keyboardDismissMode={keyboardDismissMode}
      keyboardOpeningTime={0}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      {...rest}
    >
      {children}
    </ScrollWrapper>
  )
}
