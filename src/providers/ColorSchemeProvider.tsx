import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import React, { FC, useEffect } from 'react'
import { useColorScheme as useRNColorScheme } from 'react-native'

import { ColorSchemeContext, ColorSchemeContextType } from '~contexts'
import { useState, useMemo, useCallback } from '~hooks'

// It's added in case of creating multiple themes
export const colorSchemesList = ['light', 'dark', 'system'] as const
export type ColorSchemeName = typeof colorSchemesList[number]

export const ColorSchemeProvider: FC = ({ children }) => {
  const { setItem, getItem } = useAsyncStorage('@demo/colorScheme')
  const systemColorScheme = useRNColorScheme()
  const [colorSchemeSetting, setColorSchemeSetting] = useState<ColorSchemeName>('system')

  const colorScheme = colorSchemeSetting === 'system' ? systemColorScheme : colorSchemeSetting

  useEffect(() => {
    const getInitialColorScheme = async () => {
      getItem((error, savedColorScheme) => {
        if (!error && savedColorScheme) {
          setColorSchemeSetting(savedColorScheme as ColorSchemeName)
        } else {
          setColorSchemeSetting(systemColorScheme)
        }
      })
    }

    getInitialColorScheme()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setNewColorSchemeSetting = useCallback(
    (newColorScheme: ColorSchemeName) => {
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

  const providerValue: ColorSchemeContextType = useMemo(
    () => ({
      colorScheme,
      colorSchemeSetting,
      setColorSchemeSetting: setNewColorSchemeSetting,
    }),
    [colorScheme, colorSchemeSetting, setNewColorSchemeSetting]
  )

  return <ColorSchemeContext.Provider value={providerValue} children={children} />
}
