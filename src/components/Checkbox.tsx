import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Control, Controller, ControllerRenderProps } from 'react-hook-form'
import { Pressable, Text, PressableProps } from 'react-native'

import { Row } from './Atoms'

import { useCallback, useTheme } from '~hooks'

type CheckboxProps = PressableProps & {
  value: boolean
  onChangeValue: (newValue: boolean) => void
  label?: string
  children?: React.ReactNode
  disabled?: boolean
  size?: number
}

interface ControllerFieldProps {
  field: ControllerRenderProps
}

export const Checkbox = ({
  disabled,
  value,
  onChangeValue,
  label,
  children,
  size = 30,
  ...props
}: CheckboxProps) => {
  const { s } = useTheme()
  const icon = value ? 'checkbox-marked' : 'checkbox-blank-outline'
  const handleValueChange = useCallback(() => {
    onChangeValue(!value)
  }, [onChangeValue, value])
  return (
    <Pressable
      onPress={handleValueChange}
      disabled={disabled}
      accessibilityRole="checkbox"
      {...props}
    >
      <Row alignItems="center" opacity={disabled ? 0.5 : 1}>
        <MaterialCommunityIcons size={size} name={icon} color={s.bgPrimary.backgroundColor} />
        {children ? children : <Text>{label}</Text>}
      </Row>
    </Pressable>
  )
}

type ControlledCheckboxProps = Omit<CheckboxProps, 'value' | 'onChangeValue'> & {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  isRequired?: boolean
}

export const ControlledCheckbox = ({
  name,
  control,
  isRequired = false,
  ...props
}: ControlledCheckboxProps) => {
  const handlePress = useCallback(
    (field: ControllerRenderProps) => (newValue: boolean) => field.onChange(newValue),
    []
  )

  const renderCheckbox = useCallback(
    ({ field }: ControllerFieldProps) => {
      return <Checkbox {...props} onChangeValue={handlePress(field)} value={field?.value} />
    },
    [handlePress, props]
  )

  return (
    <Controller
      name={name}
      control={control}
      render={renderCheckbox}
      rules={{ required: isRequired }}
    />
  )
}
