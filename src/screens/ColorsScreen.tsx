import { useTheme, ScrollView, Heading, Row, Box, Theme, Center } from 'native-base'

type ColorsKeys = keyof Theme['colors']
const colorsVariants: ColorsKeys[] = [
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

export const ColorsScreen = (): JSX.Element => {
  const { colors } = useTheme()

  return (
    <ScrollView p={4}>
      {colorsVariants.map((colorVariant) => (
        <Center key={colorVariant}>
          <Heading size="sm">{colorVariant}</Heading>
          <Row my={2}>
            {Object.values(colors[colorVariant]).map((color) => (
              <Box h={8} w={8} key={color} bg={color} />
            ))}
          </Row>
        </Center>
      ))}
    </ScrollView>
  )
}
