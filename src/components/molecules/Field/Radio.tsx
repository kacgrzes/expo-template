import { forwardRef, useCallback, useMemo } from 'react'

import { FormErrorMessage, FormLabel, Box, Touchable, Text } from '../../atoms'
import type { TouchableRef } from '../../atoms/Touchables/Touchable'
import { FieldRadioProps } from './types'

export const Radio = forwardRef<TouchableRef, FieldRadioProps>(
  (
    {
      isRequired,
      value,
      radioOptions,
      errorMessage,
      isError,
      onChange,
      label,
      labelStyle,
      isDisabled,
    },
    ref
  ) => {
    const borderColor = useMemo(
      () => (isError ? 'red.500' : isDisabled ? 'gray.400' : 'inputBorder'),
      [isError, isDisabled]
    )
    const bgColor = useCallback(
      (item: string) => (item === value ? 'blue.500' : 'gray.500'),
      [value]
    )

    const renderRadioButtons = useMemo(
      () =>
        radioOptions?.map((item: string, index: number) => {
          return (
            <Touchable
              ref={ref}
              key={index}
              onPress={() => onChange(item)}
              alignItems="center"
              flexDirection="row"
              height={8}
            >
              <Box
                alignItems="center"
                borderRadius={50}
                borderWidth={1}
                height={22}
                width={22}
                justifyContent="center"
                borderColor={borderColor}
              >
                {item === value ? (
                  <Box borderRadius={50} height={14} width={14} bg={bgColor(item)} />
                ) : null}
              </Box>
              <Text ml={4}>{item}</Text>
            </Touchable>
          )
        }),
      [radioOptions, value, bgColor, borderColor, onChange, ref]
    )

    return (
      <Box width="100%" mb={2}>
        <FormLabel label={label} isRequired={isRequired} labelStyle={labelStyle} />
        {renderRadioButtons}
        <FormErrorMessage errorMessage={errorMessage} />
      </Box>
    )
  }
)
