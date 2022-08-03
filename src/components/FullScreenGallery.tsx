import { AntDesign } from '@expo/vector-icons'
import { FC, useState, ReactNode, useCallback } from 'react'
import { Dimensions, ActivityIndicator } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  runOnJS,
} from 'react-native-reanimated'
import { ReText } from 'react-native-redash'

import { Box, Row, Gradient } from './Atoms'
import { ImageView } from './ImageView'
import { ZoomableImage } from './ZoomableImage'

import { useToggle, useSafeAreaInsets, useMemo, useTheme } from '~hooks'

const { width, height } = Dimensions.get('screen')

export type GalleryImage = {
  uri: string
  name?: string
  description?: string
}

type FullScreenGalleryProps = {
  handleCloseGallery: () => void
  images: GalleryImage[]
  initialIndex?: number
  additionalRightTopBarComponent?: ReactNode
  bottomBarContent?: ReactNode
  setCurrentIndex?: (index: number) => void
  isBackButtonIcon?: boolean
}

export const FullScreenGallery: FC<FullScreenGalleryProps> = ({
  images,
  handleCloseGallery,
  additionalRightTopBarComponent,
  bottomBarContent,
  setCurrentIndex,
  isBackButtonIcon = false,
}) => {
  const { colors, s } = useTheme()
  const [isOnlyImageMode, toggleImageMode] = useToggle(true)
  const { top, bottom } = useSafeAreaInsets()
  const [isZoomed, setIsZoomed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [visibleIndex, setVisibleIndex] = useState(0)

  const stopLoading = useCallback(() => setIsLoading(false), [])
  const setIsZoomedHandler = useCallback((val: boolean) => setIsZoomed(val), [])

  const currentSlide = useSharedValue(`${1} / ${images?.length}`)

  const scrollHandler = useAnimatedScrollHandler((event) => {
    currentSlide.value = `${Math.round(event.contentOffset.x / width) + 1} / ${images?.length}`
    runOnJS(setVisibleIndex)(Math.floor(event.contentOffset.x / width))
    if (setCurrentIndex) {
      runOnJS(setCurrentIndex)(Math.round(event.contentOffset.x / width))
    }
  })

  const renderTopBar = useMemo(() => {
    return (
      <Gradient
        zIndex={20}
        width="100%"
        position="absolute"
        justifyContent="center"
        colors={[colors.black, 'rgba(0,0,0,0.1)']}
      >
        <Row pt={`${top + 11}px`} px={5} pb={3} justifyContent="space-between" alignItems="center">
          <AntDesign
            name={isBackButtonIcon ? 'left' : 'close'}
            size={24}
            color="white"
            onPress={handleCloseGallery}
          />
          <Box
            px={2}
            borderRadius={40}
            bg="black"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            bgOpacity={0.5}
            width={100}
          >
            <ReText text={currentSlide} style={s.textWhite} />
          </Box>
          {additionalRightTopBarComponent ? (
            additionalRightTopBarComponent
          ) : (
            <Box width="10%"></Box>
          )}
        </Row>
      </Gradient>
    )
  }, [
    currentSlide,
    additionalRightTopBarComponent,
    colors.black,
    handleCloseGallery,
    s.textWhite,
    top,
    isBackButtonIcon,
  ])

  const renderBottomBar = useMemo(() => {
    return (
      <Gradient
        zIndex={20}
        width="100%"
        position="absolute"
        justifyContent="center"
        bottom={0}
        colors={['rgba(0,0,0,0.1)', colors.black]}
      >
        <Row pb={`${bottom + 11}px`} pt={5} px={5} justifyContent="space-between">
          {!!bottomBarContent && bottomBarContent}
        </Row>
      </Gradient>
    )
  }, [bottom, bottomBarContent, colors.black])

  const renderLoader = useMemo(() => {
    if (isLoading) {
      return (
        <Box width={width} height={height} justifyContent="center" alignItems="center">
          <ActivityIndicator size="large" color={colors.white} />
        </Box>
      )
    }

    return null
  }, [isLoading, colors.white])

  const renderImage = useCallback(
    ({ item, index }) => {
      if (visibleIndex - 1 === index || visibleIndex === index || visibleIndex + 1 === index)
        return (
          <ZoomableImage
            uri={item.uri}
            toggleImageMode={toggleImageMode}
            setIsZoomed={setIsZoomedHandler}
            isZoomed={isZoomed}
            stopLoading={stopLoading}
          />
        )
      return (
        <ImageView
          uri={item.uri}
          toggleImageMode={toggleImageMode}
          setIsZoomed={setIsZoomedHandler}
          isZoomed={isZoomed}
          stopLoading={stopLoading}
        />
      )
    },
    [isZoomed, toggleImageMode, visibleIndex, stopLoading, setIsZoomedHandler]
  )

  const keyExtractor = useCallback((item) => item.uri, [])

  return (
    <Box bg="gray700" flex={1}>
      {isOnlyImageMode && renderTopBar}
      {renderLoader}

      <Animated.FlatList
        style={{ width }}
        onScroll={scrollHandler}
        data={images}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        renderItem={renderImage}
        keyExtractor={keyExtractor}
      />

      {isOnlyImageMode && renderBottomBar}
    </Box>
  )
}
