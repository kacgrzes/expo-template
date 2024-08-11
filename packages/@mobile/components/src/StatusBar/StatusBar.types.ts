import { StatusBarProps as ExpoStatusBarProps } from "expo-status-bar";

export type StatusBarProps = ExpoStatusBarProps & {
  isModal?: boolean;
};
