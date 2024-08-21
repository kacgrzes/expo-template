import { Plus } from "lucide-react-native";
import { Button } from "../Button";
import { useStepperContext } from "./StepperContext";

export const StepperIncrement = () => {
  const { disabled, increment, max, size, value } = useStepperContext();

  return (
    <Button
      variant="outline"
      size={size}
      icon={Plus}
      onPress={increment}
      disabled={disabled || value >= max}
    />
  );
};
