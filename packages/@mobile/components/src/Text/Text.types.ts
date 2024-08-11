import { TextProps as TextComponentProps, TextStyle } from "react-native";
import { Status } from "../types";

type TextAlign = TextStyle["textAlign"];
type TextTransform = TextStyle["textTransform"];
export type TextVariant =
  | "body1"
  | "body2"
  | "body3"
  | "body4"
  | "code1"
  | "code2"
  | "code3"
  | "code4"
  | "title"
  | "label1"
  | "label2"
  | "label3"
  | "caption1"
  | "caption2";

export type TextProps = TextComponentProps & {
  italic?: boolean;
  loading?: boolean;
  status?: Status;
  textAlign?: TextAlign;
  textTransform?: TextTransform;
  variant?: TextVariant;
};

// TODO: how do I type this?
export type TextRef = any;
