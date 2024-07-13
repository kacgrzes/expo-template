import { useRef } from "react";
import PagerViewComponent, {
  PagerViewProps as PagerViewComponentProps,
} from "react-native-pager-view";
import Animated, { useHandler, useEvent } from "react-native-reanimated";

export type PagerViewProps = PagerViewComponentProps;

const AnimatedPagerView = Animated.createAnimatedComponent(PagerViewComponent);

export function usePagerScrollHandler(handlers: any, dependencies?: any) {
  const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);
  const subscribeForEvents = ["onPageScroll"];

  return useEvent<any>(
    (event) => {
      "worklet";
      const { onPageScroll } = handlers;
      if (onPageScroll && event.eventName.endsWith("onPageScroll")) {
        onPageScroll(event, context);
      }
    },
    subscribeForEvents,
    doDependenciesDiffer,
  );
}

export const PagerView = AnimatedPagerView;

export const usePagerViewRef = () => useRef<PagerViewComponent>(null);
