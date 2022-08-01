import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { useColorMode } from 'native-base'
import { FC } from 'react'
import { useColorScheme as useRNColorScheme } from 'react-native'

import { colorSchemesList, colorSchemes, ASYNC_STORAGE_KEYS } from '~constants'
import { ColorSchemeContext, ColorSchemeContextType } from '~contexts'
import { useEffect, useState, useMemo, useCallback } from '~hooks'

export type SettingColorSchemeName = typeof colorSchemesList[number]
export type ColorSchemeName = Exclude<SettingColorSchemeName, 'system'>

const defaultColorScheme = colorSchemes.LIGHT

export const ColorSchemeProvider: FC = ({ children }) => {
  const { setItem, getItem } = useAsyncStorage(ASYNC_STORAGE_KEYS.COLOR_SCHEME)
  const systemColorScheme = useRNColorScheme()
  const { setColorMode } = useColorMode()
  const [colorSchemeSetting, setColorSchemeSetting] = useState<SettingColorSchemeName>(
    colorSchemes.SYSTEM
  )

  const colorScheme =
    (colorSchemeSetting === 'system' ? systemColorScheme : colorSchemeSetting) || defaultColorScheme

  useEffect(() => {
    const getInitialColorScheme = async () => {
      try {
        const colorScheme = await getItem()
        if (colorScheme === 'system' && systemColorScheme) {
          setNewColorSchemeSetting(systemColorScheme)
        } else {
          setNewColorSchemeSetting((colorScheme || defaultColorScheme) as ColorSchemeName)
        }
      } catch (error) {
        console.error(error)
        setNewColorSchemeSetting(defaultColorScheme)
      }
    }

    getInitialColorScheme()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setNewColorSchemeSetting = useCallback(
    (newColorScheme: ColorSchemeName) => {
      const oldColorScheme = colorSchemeSetting
      setColorSchemeSetting(newColorScheme)
      setColorMode(newColorScheme)
      setItem(newColorScheme, (error) => {
        if (error) {
          console.error(error)
          setColorSchemeSetting(oldColorScheme)
        }
        // TODO: Handle error
      })
    },
    [colorSchemeSetting, setColorMode, setItem]
  )

  const value: ColorSchemeContextType = useMemo(
    () => ({
      colorScheme,
      colorSchemeSetting,
      setColorSchemeSetting: setNewColorSchemeSetting,
    }),
    [colorScheme, colorSchemeSetting, setNewColorSchemeSetting]
  )

  return <ColorSchemeContext.Provider value={value}>{children}</ColorSchemeContext.Provider>
}
