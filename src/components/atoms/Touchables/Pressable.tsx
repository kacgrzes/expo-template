/* eslint-disable @typescript-eslint/ban-ts-comment */
import { forwardRef, useImperativeHandle, useRef } from 'react'
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  TargetedEvent,
  Pressable as BasePressable,
  PressableProps as BasePressableProps,
  View,
} from 'react-native'

import { useFocus } from './useFocus'
import { useHover } from './useHover'
import { useIsPressed } from './useIsPressed'
import { generateStyledSystem } from '../../utils'
import { StyledProps } from '../types'

import { useTheme, useCallback } from '~hooks'

export type PressableRef = {
  isHovered: boolean
  isPressed: boolean
  isFocused: boolean
} & Partial<View>
export type PressableProps = StyledProps &
  BasePressableProps & {
    children: React.ReactNode | ((props: PressableRef) => React.ReactNode)
  }

export const Pressable = forwardRef<PressableRef, PressableProps>(({ children, ...props }, ref) => {
  const _pressableRef = useRef<View>(null)
  const { isHovered, hoverProps } = useHover()
  const { isPressed, pressableProps } = useIsPressed()
  const { isFocused, focusProps } = useFocus()

  const { colors } = useTheme()
  const style = generateStyledSystem(props, colors)

  useImperativeHandle(
    ref,
    () => ({
      isHovered,
      isPressed,
      isFocused,
      ..._pressableRef.current,
    }),
    [isFocused, isHovered, isPressed]
  )

  const handlePressIn = useCallback(
    (event: GestureResponderEvent) => {
      pressableProps.onPressIn()
      focusProps.onFocus()

      props.onPressIn?.(event)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pressableProps.onPressIn, focusProps.onFocus, props.onPressIn]
  )

  const handlePressOut = useCallback(
    (event: GestureResponderEvent) => {
      pressableProps.onPressOut()
      focusProps.onBlur()

      props.onPressOut?.(event)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pressableProps.onPressOut, focusProps.onBlur, props.onPressOut]
  )

  const handleHoverIn = useCallback(
    (event: GestureResponderEvent) => {
      hoverProps.onHoverIn()

      // @ts-ignore - web only
      props.onHoverIn?.(event)
    },
    // @ts-ignore - web only
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hoverProps.onHoverIn, props.onHoverIn]
  )

  const handleHoverOut = useCallback(
    (event: GestureResponderEvent) => {
      hoverProps.onHoverOut()

      // @ts-ignore - web only
      props.onHoverOut?.(event)
    },
    // @ts-ignore - web only
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hoverProps.onHoverOut, props.onHoverOut]
  )

  const handleFocus = useCallback(
    (event: NativeSyntheticEvent<TargetedEvent>) => {
      focusProps.onFocus()

      props.onFocus?.(event)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [focusProps.onFocus, props.onFocus]
  )

  const handleBlur = useCallback(
    (event: NativeSyntheticEvent<TargetedEvent>) => {
      focusProps.onBlur()

      props.onBlur?.(event)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [focusProps.onBlur, props.onBlur]
  )

  return (
    <BasePressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      // @ts-ignore - web only
      onHoverIn={handleHoverIn}
      // @ts-ignore - web only
      onHoverOut={handleHoverOut}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
      ref={_pressableRef}
      style={style}
    >
      {typeof children === 'function'
        ? children({ isFocused, isHovered, isPressed, pressed: isPressed })
        : children}
    </BasePressable>
  )
})
