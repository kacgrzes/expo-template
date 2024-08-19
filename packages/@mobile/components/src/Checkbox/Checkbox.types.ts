import { CommonFormProps, Size, Status } from "../types";

export type CheckboxProps = CommonFormProps & {
  checked?: boolean;
  onValueChange?: (checked: boolean) => void;
  size?: Size;
  status?: Status;
};
