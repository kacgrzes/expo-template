import { Center, Divider, Heading, Row, ScrollView, Switch, Text } from 'native-base'

import { useColorScheme } from '~contexts'
import { useTranslation } from '~hooks'

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
  const { setColorSchemeSetting, colorScheme } = useColorScheme()

  const { t } = useTranslation()
  return (
    <ScrollView>
      <Center>
        <Row alignItems="center" flex={1}>
          <Text>🌞</Text>
          {/* 
            Investigate the issue about using `useCallback` on `onChange`
            https://github.com/adobe/react-spectrum/issues/2320
          */}
          <Switch
            mx={4}
            my={8}
            value={colorScheme === 'dark'}
            onChange={() => setColorSchemeSetting(colorScheme === 'dark' ? 'light' : 'dark')}
          />
          <Text>🌚</Text>
        </Row>
        <Text fontSize="4xl">{t('typography_screen.text_font_size')}</Text>
        {fontSizes.map((fontSize) => (
          <Text key={fontSize} fontSize={fontSize}>
            Text - {fontSize}
          </Text>
        ))}

        <Divider />

        <Text fontSize="4xl">{t('typography_screen.heading_size')}</Text>
        {headingSizes.map((size) => (
          <Heading key={size} size={size}>
            Heading - {size}
          </Heading>
        ))}
      </Center>
    </ScrollView>
  )
}
