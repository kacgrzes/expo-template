import { CommonFormProps, Size, Status } from "../types";

export type RadioButtonProps = CommonFormProps & {
  onPress?: () => void;
  onValueChange?: (value: string | number | boolean) => void;
  selected?: boolean;
  size?: Size;
  status?: Status;
  value?: string | number | boolean;
};
