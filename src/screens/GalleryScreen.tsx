import { AntDesign } from '@expo/vector-icons'
import { useSharedValue } from 'react-native-reanimated'
import { ReText } from 'react-native-redash'

import { Row, Column, Text, Spacer } from '~components'
import { FullScreenGallery } from '~components/FullScreenGallery'
import { useNavigation, useMemo, useState, useTheme, useEffect } from '~hooks'

const exampleData = [
  {
    name: 'beach',

    uri: 'https://jenmulligandesign.com/wp-content/uploads/2017/04/pexels-beach-tropical-scene-free-stock-photo.jpg',

    nick: 'Cool User',
    location: 'Hawai',
    date: '07.08.2022',
    likes: 19,
  },

  {
    name: 'plaza',

    uri: 'https://picjumbo.com/wp-content/uploads/woman-holding-an-american-flag-in-a-field-free-photo-1080x1620.jpg',

    nick: 'Example Person',
    location: 'Los Angeles',
    date: '02.09.2012',
    likes: 15,
  },
  {
    name: 'night',

    uri: 'https://static.istockphoto.com/display-sets/istock/homepage/hero/iStock-537781662_905751012_1169447272_973284128.jpg',

    nick: 'Example Person',
    location: 'Los Angeles',
    date: '02.04.2018',
    likes: 19,
  },
]

export const GalleryScreen = () => {
  const navigation = useNavigation()

  const images = useMemo(
    () =>
      exampleData?.map((image) => {
        return {
          uri: image.uri || '',
          description: image.name,
        }
      }),
    []
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const { s } = useTheme()

  const nickname = useSharedValue('')
  const location = useSharedValue('')
  const date = useSharedValue('')
  const likes = useSharedValue('')

  useEffect(() => {
    if (exampleData !== undefined) {
      const data = exampleData[currentIndex]

      if (data.nick) {
        nickname.value = `${data.nick}`
      }
      if (data.location) {
        location.value = `${data.location}`
      }
      if (data.date) {
        date.value = data.date
      }

      if (data.likes) {
        likes.value = `${data.likes}`
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, exampleData])

  const renderBottomBarContent = useMemo(() => {
    return (
      <Row width="100%" height="100%" justifyContent="space-between">
        <Column maxWidth="80%">
          <Row pt={1} flexWrap="wrap" alignItems="center">
            <Text.BodyBold color="white">Added by: </Text.BodyBold>
            <Spacer x={1} />
            <ReText text={nickname} style={s.textWhite} />
          </Row>
          <Row pt={1} alignItems="center">
            <ReText text={location} style={s.textWhite} />
            <Spacer x={1} />
            <ReText text={date} style={s.textWhite} />
          </Row>
        </Column>

        <Column>
          <Row pt={2}>
            <AntDesign name="hearto" size={30} color="white" />
            <Spacer x={2} />
            <ReText text={likes} style={[s.textWhite, s.textXl]} />
          </Row>
        </Column>
      </Row>
    )
  }, [date, likes, location, nickname, s.textWhite, s.textXl])

  return (
    <FullScreenGallery
      handleCloseGallery={navigation.goBack}
      images={images || []}
      setCurrentIndex={setCurrentIndex}
      bottomBarContent={renderBottomBarContent}
      isBackButtonIcon
    />
  )
}
