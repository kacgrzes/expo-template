import { mergeRefs } from "@common/utils";
import { forwardRef } from "react";
import { ScrollView as GHScrollView } from "react-native-gesture-handler";
import { ScrollViewProps } from "./ScrollView.types";
import { ScrollViewRef } from "./useScrollRef";

export const ScrollView = forwardRef<ScrollViewRef, ScrollViewProps>(
  ({ scrollEventThrottle = 1000 / 60, ...props }, ref) => {
    // @ts-ignore
    return <GHScrollView ref={mergeRefs(ref)} {...props} />;
  },
);
