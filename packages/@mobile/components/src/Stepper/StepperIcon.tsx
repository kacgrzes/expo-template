import { Button, ButtonProps } from "../Button";
import { useStepperContext } from "./StepperContext";

type StepperIconProps = Pick<ButtonProps, "icon" | "onPress" | "disabled">;

export const StepperIcon = ({
  disabled: disabledFromProp,
  onPress,
  icon,
}: StepperIconProps) => {
  const { disabled: disabledFromContext, size } = useStepperContext();
  const disabled = disabledFromProp || disabledFromContext;

  return (
    <Button
      variant="outline"
      size={size}
      icon={icon}
      onPress={onPress}
      disabled={disabled}
    />
  );
};
