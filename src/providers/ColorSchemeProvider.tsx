import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { FC, useEffect } from 'react'
import { useColorScheme as useRNColorScheme } from 'react-native'

import { colorSchemesList, colorSchemes } from '~constants'
import { ColorSchemeContext, ColorSchemeContextType } from '~contexts'
import { useState, useMemo, useCallback } from '~hooks'

export type SettingColorSchemeName = typeof colorSchemesList[number]
export type ColorSchemeName = Exclude<SettingColorSchemeName, 'system'>

const defaultColorScheme = colorSchemes.LIGHT

export const ColorSchemeProvider: FC = ({ children }) => {
  const { setItem, getItem } = useAsyncStorage('@demo/colorScheme')
  const systemColorScheme = useRNColorScheme()
  const [colorSchemeSetting, setColorSchemeSetting] = useState<SettingColorSchemeName>(
    colorSchemes.SYSTEM
  )

  const colorScheme =
    (colorSchemeSetting === 'system' ? systemColorScheme : colorSchemeSetting) || defaultColorScheme

  useEffect(() => {
    const getInitialColorScheme = async () => {
      getItem((error, savedColorScheme) => {
        if (!error && savedColorScheme) {
          setColorSchemeSetting(savedColorScheme as SettingColorSchemeName)
        } else if (systemColorScheme) {
          // For old devices it's possible that system color scheme name is null or undefined
          setColorSchemeSetting(systemColorScheme)
        } else {
          setColorSchemeSetting(defaultColorScheme)
        }
      })
    }

    getInitialColorScheme()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setNewColorSchemeSetting = useCallback(
    (newColorScheme: SettingColorSchemeName) => {
      const oldColorScheme = colorSchemeSetting
      setColorSchemeSetting(newColorScheme)
      setItem(newColorScheme, (error) => {
        if (error) {
          setColorSchemeSetting(oldColorScheme)
        }
        // TODO: Handle error
      })
    },
    [colorSchemeSetting, setItem]
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
