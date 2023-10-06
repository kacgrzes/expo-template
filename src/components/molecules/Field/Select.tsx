import React from 'react'
import { Pressable } from 'react-native'

import { Select as CustomSelect, Box, FormErrorMessage, FormLabel, SelectKey } from '../../atoms'
import type { FieldSelectProps } from './types'

import { useMemo } from '~hooks'

const layoutPropsKeys = [
  'm',
  'margin',
  'mt',
  'marginTop',
  'mr',
  'marginRight',
  'mb',
  'marginBottom',
  'ml',
  'marginLeft',
  'mx',
  'my',
  'p',
  'padding',
  'pt',
  'paddingTop',
  'pr',
  'paddingRight',
  'pb',
  'paddingBottom',
  'pl',
  'paddingLeft',
  'px',
  'py',
]

export const Select = <T extends SelectKey>({
  isRequired,
  isInvalid,
  label,
  helperText,
  errorMessage,
  onOpen,
  labelStyle,
  ...props
}: FieldSelectProps<T>) => {
  const layoutProps = useMemo(
    () =>
      Object.fromEntries(Object.entries(props).filter(([key]) => layoutPropsKeys.includes(key))),
    [props]
  )

  return (
    <Box {...layoutProps} width="100%" mb={2}>
      <Pressable>
        <FormLabel label={label} isRequired={isRequired} labelStyle={labelStyle} />
        <CustomSelect {...props} />
        <FormErrorMessage errorMessage={errorMessage} />
      </Pressable>
    </Box>
  )
}
