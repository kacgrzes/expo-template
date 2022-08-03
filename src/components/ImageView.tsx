import { useIsFocused } from '@react-navigation/native'
import { FC, useMemo, useState, useCallback } from 'react'
import {
  Image,
  Dimensions,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'

import { Touchable, Box } from './Atoms'

const { width, height } = Dimensions.get('screen')

type ImageViewProps = {
  uri: string
  toggleImageMode: () => void
  stopLoading: () => void
  setIsZoomed: (val: boolean) => void
  isZoomed: boolean
}

export const ImageView: FC<ImageViewProps> = ({ uri, toggleImageMode, stopLoading }) => {
  const [isLoading, setIsLoading] = useState(true)
  const onLoadEnd = useCallback(() => setIsLoading(false), [])

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

  return (
    <Touchable onPress={toggleImageMode} activeOpacity={1} onLayout={stopLoading}>
      {renderLoader}
      <Image
        source={{
          uri,
        }}
        style={[styles.image]}
        resizeMode="contain"
        onLoad={onLoadEnd}
        onLoadEnd={onLoadEnd}
      />
      <FocusAwareStatusBar barStyle="light-content" />
    </Touchable>
  )
}

const styles = StyleSheet.create({
  image: { height: '100%', width },
})
