import { ScrollView, Switch } from 'react-native'

import { Center, Text, Row, Box } from '~components/atoms'
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
          <Box mx={4} my={8}>
            <Switch
              value={colorScheme === 'dark'}
              onChange={() => setColorSchemeSetting(colorScheme === 'dark' ? 'light' : 'dark')}
            />
          </Box>
          <Text>🌚</Text>
        </Row>
        <Text fontSize="4xl">{t('typography_screen.text_font_size')}</Text>
        {fontSizes.map((fontSize) => (
          <Text key={fontSize} fontSize={fontSize}>
            Text - {fontSize}
          </Text>
        ))}
      </Center>
    </ScrollView>
  )
}
