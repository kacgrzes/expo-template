import { CommonFormProps, Size, Status } from "../types";

export type CheckBoxProps = CommonFormProps & {
  checked?: boolean;
  onValueChange?: (checked: boolean) => void;
  size?: Size;
  status?: Status;
};
