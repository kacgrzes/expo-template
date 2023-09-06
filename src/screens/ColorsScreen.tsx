// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove native-base components when issue is resolved
import { Theme } from 'native-base'
import { ScrollView, StyleSheet } from 'react-native'

import { Box, Text, Row, Center } from '~components/atoms'
// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove `useTheme` hook when issue is resolved
import { useTheme } from '~hooks'

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
    <ScrollView style={styles.container}>
      {colorsVariants.map((colorVariant) => (
        <Center key={colorVariant}>
          <Text size="sm">{colorVariant}</Text>
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

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
})
