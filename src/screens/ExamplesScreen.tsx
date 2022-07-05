import { Box, Button, Row, ScrollView, Text, useTheme } from 'native-base'
import { Fragment, useCallback } from 'react'

const buttonVariants = ['ghost', 'outline', 'solid', 'subtle', 'link']
const colorsVariants = [
  'primary',
  'secondary',
  'tertiary',
  'danger',
  'error',
  'success',
  'warning',
  'muted',
  'info',
  'light',
  'rose',
  'pink',
  'fuchsia',
  'purple',
  'violet',
  'indigo',
  'blue',
  'lightBlue',
  'darkBlue',
  'cyan',
  'teal',
  'emerald',
  'green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'red',
  'warmGray',
  'trueGray',
  'gray',
  'coolGray',
  'blueGray',
  'dark',
]

export const ExamplesScreen = (props: ExamplesScreenProps): JSX.Element => {
  const {
    navigation: { navigate },
  } = props

  const { colors } = useTheme()

  const goToApplicationInfo = useCallback(() => navigate('ApplicationInfo'), [navigate])
  const goToAppSettings = useCallback(() => navigate('Settings'), [navigate])
  const goToComponents = useCallback(() => navigate('Components'), [navigate])
  const goToHomeStackDetails = useCallback(
    () =>
      navigate('HomeStack', {
        screen: 'Details',
        params: { id: 'examples-id' },
      }),
    [navigate]
  )
  return (
    <ScrollView p={4}>
      <Text mb={4} color="white">
        Colors
      </Text>
      {colorsVariants.map((colorVariant) => {
        return (
          <Fragment key={colorVariant}>
            <Text color="white">{colorVariant}</Text>
            <Row mb={6}>
              {Object.values(colors[colorVariant]).map((color) => {
                return <Box h={8} w={8} key={color} bg={color} />
              })}
            </Row>
          </Fragment>
        )
      })}

      <Text color={'white'}>Buttons variants</Text>
      {buttonVariants.map((buttonVariant) => {
        return (
          <Button key={buttonVariant} variant={buttonVariant}>
            {buttonVariant}
          </Button>
        )
      })}
    </ScrollView>
  )
}
