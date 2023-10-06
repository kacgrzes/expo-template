import { ScrollView, Switch, Platform } from 'react-native'

import { Column, Row, Box, Text } from '~components'
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
] as const
const isWeb = Platform.OS === 'web'

export const TypographyScreen = (): JSX.Element => {
  const { setColorSchemeSetting, colorScheme } = useColorScheme()

  const { t } = useTranslation()

  return (
    <ScrollView>
      <Row>
        <Column flex={1} alignItems="center" justifyContent="center">
          <Row alignItems="center" flex={1}>
            <Text>🌞</Text>
            {/* 
            Investigate the issue about using `useCallback` on `onChange`
            https://github.com/adobe/react-spectrum/issues/2320
          */}
            <Box mx={4} my={8}>
              <Switch
                value={colorScheme === 'dark'}
                {...(isWeb
                  ? {
                      onValueChange: () =>
                        setColorSchemeSetting(colorScheme === 'dark' ? 'light' : 'dark'),
                    }
                  : {
                      onChange: () =>
                        setColorSchemeSetting(colorScheme === 'dark' ? 'light' : 'dark'),
                    })}
              />
            </Box>
            <Text>🌚</Text>
          </Row>
          <Text fontSize="4xl">{t('typography_screen.text_font_size')}</Text>
          <Text.H4>{t('typography_screen.text_font_size')}</Text.H4>
          {fontSizes.map((fontSize) => (
            <Text key={fontSize} p={8} fontSize={fontSize}>
              Text - {fontSize}
            </Text>
          ))}
        </Column>
      </Row>
    </ScrollView>
  )
}
