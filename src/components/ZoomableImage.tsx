import { useIsFocused } from '@react-navigation/native'
import { FC, useState, useMemo, useCallback } from 'react'
import {
  Image,
  Dimensions,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { GestureHandlerRootView, Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated'

import { Box } from './Atoms'

const AnimatedImage = Animated.createAnimatedComponent(Image)

const { width, height } = Dimensions.get('screen')

type ImageViewProps = {
  uri: string
  toggleImageMode: () => void
  stopLoading: () => void
  setIsZoomed: (val: boolean) => void
  isZoomed: boolean
}

const clamp = (value: number, lowerBound: number, upperBound: number) => {
  'worklet'
  return Math.min(Math.max(lowerBound, value), upperBound)
}

export const ZoomableImage: FC<ImageViewProps> = ({
  uri,
  toggleImageMode,
  setIsZoomed,
  isZoomed,
  stopLoading,
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const onLoadEnd = useCallback(() => setIsLoading(false), [])

  const scale = useSharedValue(1)
  const focalX = useSharedValue(width / 2)
  const focalY = useSharedValue(height / 2)

  const startX = useSharedValue(0) // previous position of X
  const startY = useSharedValue(0) // previous position of Y
  const savedScale = useSharedValue(1)

  function FocusAwareStatusBar(props: StatusBarProps) {
    const isFocused = useIsFocused()

    return isFocused ? <StatusBar {...props} /> : null
  }

  const renderLoader = useMemo(() => {
    if (isLoading) {
      return (
        <Box width={width} height={height} justifyContent="center" alignItems="center">
          <ActivityIndicator size="large" color="white" />
        </Box>
      )
    }
  }, [isLoading])

  const zoomHandler = Gesture.Pinch()
    .onUpdate((event) => {
      const clampedValue = clamp(event.scale * savedScale.value, 1, 2.5)
      scale.value = clampedValue

      if (clampedValue > savedScale.value) {
        // set focal when zooming in,
        focalX.value = event.focalX
        focalY.value = event.focalY
      } else {
        // prevent from screen jumping when zooming out
        focalX.value = startX.value
        focalY.value = startY.value
      }
    })
    .onEnd(() => {
      if (scale.value > 1) {
        runOnJS(setIsZoomed)(true)
      } else {
        runOnJS(setIsZoomed)(false)
      }
      startX.value = focalX.value
      startY.value = focalY.value
      savedScale.value = scale.value
    })

  const doubleTapHandler = Gesture.Tap()
    .numberOfTaps(2)
    .maxDelay(250)
    .onEnd((e, success) => {
      if (success) {
        if (scale.value !== 1) {
          // zoom out
          focalX.value = withTiming(width / 2)
          focalY.value = withTiming(height / 2)
          scale.value = withTiming(1)
          savedScale.value = 1
          runOnJS(setIsZoomed)(false)
        } else {
          // zoom in
          focalX.value = withTiming(e.x)
          focalY.value = withTiming(e.y)
          startX.value = e.x
          startY.value = e.y
          scale.value = withTiming(2)
          savedScale.value = 2
          runOnJS(setIsZoomed)(true)
        }
      }
    })

  const oneTapHandler = Gesture.Tap()
    .requireExternalGestureToFail(doubleTapHandler)
    .maxDelay(250)
    .onEnd((_event, success) => {
      if (success) {
        runOnJS(toggleImageMode)()
      }
    })

  const dragHandler = Gesture.Pan()
    .maxPointers(1)
    .enabled(isZoomed)
    .onUpdate((e) => {
      // prevent from leaving left x side -> focal > 0 and drag values are positive
      if (-e.translationX + startX.value > 0 && -e.translationX < 0) {
        focalX.value = -e.translationX + startX.value
      }

      // prevent from leaving right x side -> focal greater than screen width and drag values are negative
      if (-e.translationX + startX.value < width && -e.translationX > 0) {
        focalX.value = -e.translationX + startX.value
      }

      // TODO: It doesn't works good with not full height images, maybe it should check image height instead of screen height. Or something with scale multiplier
      if (-e.translationY + startY.value > 0 && -e.translationY < 0) {
        focalY.value = -e.translationY + startY.value
      }

      // TODO: It doesn't works good with not full height images, maybe it should check image height instead of screen height. Or something with scale multiplier
      if (-e.translationY + startY.value < height && -e.translationY > 0) {
        focalY.value = -e.translationY + startY.value
      }
    })
    .onEnd(() => {
      startX.value = focalX.value
      startY.value = focalY.value
    })

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: focalX.value },
        { translateY: focalY.value },
        { translateX: -width / 2 },
        { translateY: -height / 2 },
        { scale: scale.value },
        { translateX: -focalX.value },
        { translateY: -focalY.value },
        { translateX: width / 2 },
        { translateY: height / 2 },
      ],
    }
  })

  const composed = Gesture.Race(
    dragHandler,
    zoomHandler,
    Gesture.Exclusive(doubleTapHandler, oneTapHandler)
  )

  return (
    <GestureHandlerRootView onLayout={stopLoading}>
      {renderLoader}
      <GestureDetector gesture={composed}>
        <Animated.View>
          <AnimatedImage
            source={{
              uri,
            }}
            style={[styles.image, rStyle]}
            resizeMode="contain"
            onLoadEnd={onLoadEnd}
          />

          <FocusAwareStatusBar barStyle="light-content" />
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  image: { height: '100%', width },
})
