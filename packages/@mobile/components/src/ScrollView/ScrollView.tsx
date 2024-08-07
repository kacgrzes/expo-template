import { mergeRefs } from "@common/utils";
import { forwardRef } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollViewProps,
} from "react-native";
import { ScrollView as GHScrollView } from "react-native-gesture-handler";
import { ScrollViewRef } from "./useScrollRef";

export const ScrollView = forwardRef<ScrollViewRef, ScrollViewProps>(
  ({ scrollEventThrottle = 1000 / 60, ...props }, ref) => {
    // @ts-ignore
    return <GHScrollView ref={mergeRefs(ref)} {...props} />;
  },
);

export type OnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
