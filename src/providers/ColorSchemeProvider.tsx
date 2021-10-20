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
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>('system')

  useEffect(() => {
    const getInitialColorScheme = async () => {
      getItem((error, savedColorScheme) => {
        if (!error && savedColorScheme) {
          setColorScheme(savedColorScheme as ColorSchemeName)
        } else {
          setColorScheme(systemColorScheme)
        }
      })
    }

    getInitialColorScheme()
  }, [])

  const setNewColorScheme = useCallback(
    (newColorScheme: ColorSchemeName) => {
      const oldColorScheme = colorScheme
      setColorScheme(newColorScheme)
      setItem(newColorScheme, (error) => {
        if (error) {
          setColorScheme(oldColorScheme)
        }
        // TODO: Handle error
      })
    },
    [colorScheme]
  )

  const providerValue: ColorSchemeContextType = useMemo(
    () => ({
      colorScheme,
      systemColorScheme,
      setNewColorScheme,
    }),
    [colorScheme, setNewColorScheme, systemColorScheme]
  )

  return <ColorSchemeContext.Provider value={providerValue} children={children} />
}
