// TODO: ISSUE-33 (https://github.com/binarapps/expo-ts-template/issues/33)
// Remove native-base components when issue is resolved
import { Box } from 'native-base'
import { Fragment, useMemo } from 'react'

import { FieldCheckboxProps } from './types'

import { FormLabel, Checkbox as CustomCheckbox, Spacer, FormErrorMessage } from '~components/atoms'

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
          <Spacer y="2" />
        </Fragment>
      )
    })
  }, [checkboxes, value, props, onChange])

  return (
    <Box width="100%" mb="2">
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
