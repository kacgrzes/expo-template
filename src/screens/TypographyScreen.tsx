import { Center, Divider, Heading, Row, ScrollView, Switch, Text } from 'native-base'

import { useColorMode } from '~hooks'

export const fontSizes = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
]
export const headingSizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']

export const TypographyScreen = (): JSX.Element => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <ScrollView>
      <Center>
        <Row alignItems="center" flex={1}>
          <Text>🌞</Text>
          {/* 
            Investigate the issue about using `useCallback` on `onChange`
            https://github.com/adobe/react-spectrum/issues/2320
          */}
          <Switch mx={4} my={8} value={colorMode === 'dark'} onChange={toggleColorMode} />
          <Text>🌚</Text>
        </Row>
        <Text fontSize="4xl">Text.fontSize: </Text>
        {fontSizes.map((fontSize) => (
          <Text key={fontSize} fontSize={fontSize}>
            Text - {fontSize}
          </Text>
        ))}

        <Divider />

        <Text fontSize="4xl">Heding.size: </Text>
        {headingSizes.map((size) => (
          <Heading key={size} size={size}>
            Heading - {size}
          </Heading>
        ))}
      </Center>
    </ScrollView>
  )
}
