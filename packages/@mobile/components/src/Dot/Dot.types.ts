import { ViewProps } from "react-native";
import { SharedValue } from "react-native-reanimated";

export type DotProps = Pick<ViewProps, "style"> & {
  index?: number;
  animatedIndex?: SharedValue<number>;
};
