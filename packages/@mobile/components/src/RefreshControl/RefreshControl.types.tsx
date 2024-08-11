import { RefreshControlProps as RefreshControlComponentProps } from "react-native";

export type RefreshControlProps = Pick<
  RefreshControlComponentProps,
  "refreshing" | "onRefresh"
>;
