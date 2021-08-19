import React, { FC } from 'react'
import { Pressable, Text, StyleSheet, PressableProps } from 'react-native'

type ButtonProps = PressableProps

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 20,
    minWidth: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
})
