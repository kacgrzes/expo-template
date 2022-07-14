import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Control, Controller, ControllerRenderProps } from 'react-hook-form'
import { View, Pressable, Text, PressableProps } from 'react-native'

import { useCallback, useTheme } from '~hooks'

type CheckboxProps = PressableProps & {
  name: string
  label?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  children?: React.ReactNode
  disabled?: boolean
  isRequired?: boolean
  size?: number
}

interface ControllerFieldProps {
  field: ControllerRenderProps
}

export const Checkbox = ({
  name,
  label,
  control,
  children,
  disabled,
  isRequired = false,
  size = 30,
  ...props
}: CheckboxProps) => {
  const { s } = useTheme()

  const handlePress = useCallback(
    (field: ControllerRenderProps) => () => field.onChange(!field.value),
    []
  )

  const renderCheckbox = useCallback(
    ({ field }: ControllerFieldProps) => {
      const icon = field?.value ? 'checkbox-marked' : 'checkbox-blank-outline'
      return (
        <Pressable
          onPress={handlePress(field)}
          disabled={disabled}
          accessibilityRole="checkbox"
          {...props}
        >
          <View style={[s.flexRow, s.itemsCenter, disabled && s.opacity50]}>
            <MaterialCommunityIcons size={size} name={icon} color={s.bgPrimary.backgroundColor} />
            {children ? children : <Text>{label}</Text>}
          </View>
        </Pressable>
      )
    },
    [
      handlePress,
      props,
      s.flexRow,
      s.itemsCenter,
      s.bgPrimary.backgroundColor,
      children,
      label,
      disabled,
      s.opacity50,
      size,
    ]
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
