import { TextInputProps as RNTextInputProps } from "react-native";

import { CommonAccessoryProps, CommonFormProps } from "../types";

export type TextInputProps = CommonFormProps &
  CommonAccessoryProps &
  Omit<RNTextInputProps, "editable">;
