import constate from "constate";
import { ButtonProps } from "./Button.types";

const useButtonState = ({
  size,
  disabled,
}: Pick<ButtonProps, "size" | "disabled">) => {
  return { size, disabled };
};

export const [ButtonProvider, useButtonContext] = constate(useButtonState);
