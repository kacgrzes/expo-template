import React from 'react'
import { StyleSheet, Text } from 'react-native'

import { useTheme } from '~hooks'

export const FormErrorMessage = ({ errorMessage }: { errorMessage?: string }) => {
  const { colors } = useTheme()
  return (
    errorMessage && <Text style={[styles.text, { color: colors.red['500'] }]}>{errorMessage}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    marginTop: 8,
  },
})
