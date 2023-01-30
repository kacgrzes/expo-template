import { KeyboardAvoidingView, View, ScrollView, IScrollViewProps } from 'native-base'
import React, { FC } from 'react'
import { KeyboardAvoidingViewProps, Platform, StyleProp, ViewStyle } from 'react-native'
import { Edge } from 'react-native-safe-area-context'

import { useSafeAreaInsetsStyle } from '~hooks'

type Props = {
  /**
   * Should keyboard persist on screen tap. Defaults to handled.
   */
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never'
  /**
   * Pass any additional props directly to the ScrollView component.
   */
  ScrollViewProps?: IScrollViewProps
  /**
   * Children components.
   */
  children?: React.ReactNode
  /**
   * Style for the outer content container useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  /**
   * Style for the inner content container useful for padding & margin.
   */
  contentContainerStyle?: StyleProp<ViewStyle>
  /**
   * Override the default edges for the safe area.
   */
  safeAreaEdges?: Edge[]
  /**
   * Pass any additional props directly to the KeyboardAvoidingView component.
   */
  KeyboardAvoidingViewProps?: KeyboardAvoidingViewProps
}

const isIos = Platform.OS === 'ios'

export const KeyboardAwareScrollView: FC<Props> = (props) => {
  const {
    KeyboardAvoidingViewProps,
    safeAreaEdges = [],
    children,
    keyboardShouldPersistTaps = 'handled',
    contentContainerStyle,
    ScrollViewProps,
    style,
  } = props

  const $containerInsets = useSafeAreaInsetsStyle(safeAreaEdges)

  return (
    <View style={[$flexStyle, $containerInsets]}>
      <KeyboardAvoidingView
        behavior={isIos ? 'padding' : undefined}
        keyboardVerticalOffset={100}
        {...KeyboardAvoidingViewProps}
        style={[$flexStyle, KeyboardAvoidingViewProps?.style]}
      >
        <ScrollView
          {...ScrollViewProps}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}
          style={[$flexStyle, ScrollViewProps?.style, style]}
          contentContainerStyle={[ScrollViewProps?.contentContainerStyle, contentContainerStyle]}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

const $flexStyle: ViewStyle = {
  flex: 1,
}
