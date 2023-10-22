import { Fragment, useMemo } from 'react'

import { FieldCheckboxProps } from './types'
import { Box } from '../../atoms/Box'
import { Checkbox as CustomCheckbox } from '../../atoms/Checkbox'
import { FormErrorMessage } from '../../atoms/FormErrorMessage'
import { FormLabel } from '../../atoms/FormLabel'
import { Spacer } from '../../atoms/Spacer'

export const Checkbox = ({
  isInvalid,
  isRequired,
  isDisabled,
  label,
  errorMessage,
  labelStyle,
  checkboxes,
  onChange,
  value,
  checkboxText,
  ...props
}: FieldCheckboxProps) => {
  const renderCheckboxes = useMemo(() => {
    return checkboxes?.map((item: string, index: number) => {
      const handleChange = () => {
        if (Array.isArray(value)) {
          if (!value?.includes(item)) {
            const newArr = [...value, item]
            onChange(newArr)
          } else {
            const newArr = value.filter((el) => el !== item)
            onChange(newArr)
          }
        }
      }
      return (
        <Fragment key={index}>
          <CustomCheckbox
            onChange={handleChange}
            key={index}
            checkboxText={item}
            value={value}
            {...(Array.isArray(value) && { isChecked: value?.includes(item) })}
            {...props}
          />
          <Spacer y={2} />
        </Fragment>
      )
    })
  }, [checkboxes, value, props, onChange])

  return (
    <Box width="100%" mb={2}>
      <FormLabel label={label} isRequired={isRequired} labelStyle={labelStyle} />
      {checkboxes ? (
        renderCheckboxes
      ) : (
        <CustomCheckbox
          onChange={onChange}
          value={value}
          checkboxText={checkboxText}
          {...(typeof value === 'boolean' && { isChecked: value })}
          {...props}
        />
      )}
      <FormErrorMessage errorMessage={errorMessage} />
    </Box>
  )
}
