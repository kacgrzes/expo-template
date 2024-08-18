import { Box } from "@grapp/stacks";
import { Text } from "../Text";
import { useStepperContext } from "./StepperContext";

// Stepper.Value / renderProp?
export const StepperDisplay = () => {
  const { orientation, value } = useStepperContext();

  return (
    <Box
      alignX={"center"}
      alignY={"center"}
      paddingY={orientation === "vertical" ? 2 : undefined}
      paddingX={orientation === "horizontal" ? 2 : undefined}
    >
      <Text>{value}</Text>
    </Box>
  );
};
