import React, { FC, useEffect } from 'react'
import { ColorSchemeContext } from '~contexts'
import { ColorSchemeName, useColorScheme } from 'react-native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'

type InternalColorScheme = NonNullable<ColorSchemeName> | 'system'

export const ColorSchemeProvider: FC = ({ children }) => {
  const { setItem, getItem } = useAsyncStorage('@demo/colorScheme')
  const systemColorScheme = useColorScheme() as NonNullable<ColorSchemeName>

  useEffect(() => {}, [])

  return (
    <ColorSchemeContext.Provider
      value={{
        colorScheme: systemColorScheme,
      }}
      children={children}
    />
  )
}
