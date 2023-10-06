import { useCallback, useMemo } from 'react'
import { View, Pressable, StyleSheet } from 'react-native'

import { Box } from './Box'
import { Icon } from './Icon'
import { Text } from './Text'
import { CheckboxProps } from './types'

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
  const handleValueChange = useCallback(() => {
    return checkboxes ? onChange(value) : onChange(!value)
  }, [onChange, value, checkboxes])

  const iconColor = useMemo(() => {
    if (disabled && value) {
      return 'gray.500'
    }

    return 'text'
  }, [disabled, value])

  const bgColor = useMemo(() => {
    if (!value) {
      return colors.white
    }
    if (disabled) {
      return colors.gray['200']
    }

    return 'transparent'
  }, [disabled, value, colors])

  const borderColor = useMemo(
    () => (isError ? 'red.500' : disabled ? 'gray.500' : 'inputBorder'),
    [isError, disabled]
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
        <Box
          style={[
            styles.checkbox,
            {
              backgroundColor: bgColor,
              height: size,
              width: size,
            },
          ]}
          borderColor={borderColor}
          {...props}
        >
          {isChecked ? <Icon color={iconColor} name="check-line" size={18} /> : null}
        </Box>
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
