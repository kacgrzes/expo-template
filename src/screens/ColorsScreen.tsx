import { Text, Center, ScrollView } from '~components'

const colorsVariants: NestedKeys<Colors>[] = [
  'primary',
  'secondary',
  'tertiary',
  'danger',
  'success',
  'warning',
  'info',
  'light',
]

export const ColorsScreen = (): JSX.Element => (
  <ScrollView flexGrow={1} p={4}>
    {colorsVariants.map((colorVariant) => (
      <Center
        mb={4}
        key={colorVariant}
        height={8}
        width="full"
        alignSelf="stretch"
        backgroundColor={colorVariant}
      >
        <Text color="white">{colorVariant}</Text>
      </Center>
    ))}
  </ScrollView>
)
