// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove native-base components when issue is resolved
import { Text } from 'native-base'
import { useCallback, useMemo } from 'react'
import { View, Pressable, StyleSheet } from 'react-native'

import { Icon } from './Icon'
import { CheckboxProps } from './types'

import { useColorScheme } from '~contexts'

// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove `useTheme` hook when issue is resolved
import { useTheme } from '~hooks'

export const Checkbox = ({
  disabled,
  value,
  onChange,
  checkboxText,
  size = 22,
  isError,
  isChecked,
  checkboxes,
  ...props
}: CheckboxProps) => {
  const { colors } = useTheme()
  const { colorScheme } = useColorScheme()
  const handleValueChange = useCallback(() => {
    return checkboxes ? onChange(value) : onChange(!value)
  }, [onChange, value, checkboxes])

  const themeColors = useMemo(
    () => (colorScheme === 'light' ? colors.black : colors.white),
    [colors, colorScheme]
  )

  const iconColor = useMemo(() => {
    if (disabled && value) {
      return colors.gray['500']
    }

    return themeColors
  }, [disabled, value, colors, themeColors])

  const bgColor = useMemo(() => {
    if (!value) {
      return colors.white
    }
    if (disabled) {
      return colors.lightGray
    }

    return 'transparent'
  }, [disabled, value, colors])

  const borderColor = useMemo(
    () => (isError ? colors.red['500'] : disabled ? colors.gray['500'] : themeColors),
    [isError, disabled, colors, themeColors]
  )

  return (
    <Pressable
      onPress={handleValueChange}
      hitSlop={{
        top: 5,
        left: 5,
        bottom: 5,
      }}
      style={styles.mainContainer}
      disabled={disabled}
    >
      <View style={styles.row}>
        <View
          style={[
            styles.checkbox,
            {
              backgroundColor: bgColor,
              borderColor,
              height: size,
              width: size,
            },
          ]}
          {...props}
        >
          {isChecked ? <Icon color={iconColor} name="check-line" size={18} /> : null}
        </View>
        <Text>{checkboxText}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  checkbox: {
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: 'center',
    marginRight: 8,
  },
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  row: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
