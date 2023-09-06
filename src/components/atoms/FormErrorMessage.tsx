import React from 'react'
import { StyleSheet, Text } from 'react-native'

// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove `useTheme` hook when issue is resolved
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
