import { Minus } from "lucide-react-native";
import { Button } from "../Button";
import { useStepperContext } from "./StepperContext";

export const StepperDecrement = () => {
  const { decrement, disabled, min, size, value } = useStepperContext();

  return (
    <Button
      variant="outline"
      size={size}
      icon={Minus}
      onPress={decrement}
      disabled={disabled || value <= min}
    />
  );
};
