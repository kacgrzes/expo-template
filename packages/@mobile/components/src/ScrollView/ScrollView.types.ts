import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollViewProps,
} from "react-native";

export type OnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => void;

export { ScrollViewProps };
