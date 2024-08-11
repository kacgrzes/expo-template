import { ActivityIndicatorProps as RNActivityIndicatorProps } from "react-native";
import { Status } from "../types";

export type ActivityIndicatorProps = {
  size?: "s" | "l";
  status?: Status;
  style?: RNActivityIndicatorProps["style"];
};
