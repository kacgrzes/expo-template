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
  const [userColorScheme, setUserColorScheme] = useState<ColorSchemeName>('system')

  const colorScheme = userColorScheme === 'system' ? systemColorScheme : userColorScheme

  useEffect(() => {
    const getInitialColorScheme = async () => {
      getItem((error, savedColorScheme) => {
        if (!error && savedColorScheme) {
          setUserColorScheme(savedColorScheme as ColorSchemeName)
        } else {
          setUserColorScheme(systemColorScheme)
        }
      })
    }

    getInitialColorScheme()
  }, [])

  const setColorScheme = useCallback(
    (newColorScheme: ColorSchemeName) => {
      const oldColorScheme = userColorScheme
      setUserColorScheme(newColorScheme)
      setItem(newColorScheme, (error) => {
        if (error) {
          setUserColorScheme(oldColorScheme)
        }
        // TODO: Handle error
      })
    },
    [userColorScheme]
  )

  const providerValue: ColorSchemeContextType = useMemo(
    () => ({
      colorScheme, // light | dark
      userColorScheme, // colorSchemeSetting
      setColorScheme, // setColorSchemeSetting
    }),
    [userColorScheme, setColorScheme, systemColorScheme]
  )

  return <ColorSchemeContext.Provider value={providerValue} children={children} />
}
