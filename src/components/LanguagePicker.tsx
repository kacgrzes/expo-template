import {
  HStack,
  ChevronDownIcon,
  Text,
  Pressable,
  useTheme,
  Menu,
  IPressableProps,
} from 'native-base'
import { StyleSheet } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import languages from '../../assets/languages.json'

import { useCallback, useTranslation } from '~hooks'

export const LanguagePicker: React.FC = () => {
  const { sizes } = useTheme()
  const { i18n } = useTranslation()
  const language = i18n.language.slice(0, 2).toUpperCase() as keyof typeof languages
  const isOpen = useSharedValue(false)

  const rotateZ = useDerivedValue(() => withTiming(isOpen.value ? 180 : 0))
  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotateZ.value}deg` }],
  }))

  const styles = StyleSheet.create({
    icon: { height: sizes[8], justifyContent: 'center' },
  })

  const renderTrigger = useCallback(
    (
      props: IPressableProps,
      state: {
        open: boolean
      }
    ) => {
      // Set animated value based on a `Menu` state
      isOpen.value = state.open

      return (
        <Pressable {...props}>
          <HStack>
            <Text fontSize="xl" pr="2">
              {languages[language].emoji}
            </Text>
            <Animated.View style={[animatedIconStyle, styles.icon]}>
              <ChevronDownIcon />
            </Animated.View>
          </HStack>
        </Pressable>
      )
    },
    [animatedIconStyle, isOpen, language, styles.icon]
  )

  const handleItemPress = useCallback(
    (lng: string) => () => {
      i18n.changeLanguage(lng.toLowerCase())
    },
    [i18n]
  )

  return (
    <Menu trigger={renderTrigger}>
      {Object.entries(languages).map(([key, languageData]) => (
        <Menu.Item
          onPress={handleItemPress(key)}
          key={key}
        >{`${languageData.emoji} ${languageData.language}`}</Menu.Item>
      ))}
    </Menu>
  )
}