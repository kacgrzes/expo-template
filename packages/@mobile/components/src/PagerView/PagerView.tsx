import {
  Children,
  Ref,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
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

export const PagerView = forwardRef(
  ({ children, initialPage = 0, ...props }: PagerViewProps, ref) => {
    const [_, setPage] = useState(initialPage);
    const pagerViewRef = useRef<PagerViewComponent>(null);
    const numberOfPages = Children.count(children);

    // TODO: clean this up!
    useImperativeHandle(
      ref,
      () => {
        return {
          setPage: (selectedPage: number) => {
            if (selectedPage < 0) {
              selectedPage = 0;
            } else if (selectedPage >= numberOfPages) {
              selectedPage = numberOfPages;
            }
            pagerViewRef.current?.setPage(selectedPage);
            setPage(selectedPage);
          },
          setPageWithoutAnimation: (index: number) => {
            if (index < 0) {
              index = 0;
            } else if (index >= numberOfPages) {
              index = numberOfPages;
            }
            pagerViewRef.current?.setPageWithoutAnimation(index);
            setPage(index);
          },
          setScrollEnabled: (scrollEnabled: boolean) =>
            pagerViewRef.current?.setScrollEnabled(scrollEnabled),
          nextPage: () => {
            setPage((prevPage) => {
              const nextPage = prevPage + 1;
              if (nextPage < numberOfPages) {
                pagerViewRef.current?.setPage(nextPage);
                return nextPage;
              }
              return prevPage;
            });
          },
          previousPage: () => {
            setPage((prevPage) => {
              const nextPage = prevPage - 1;
              if (nextPage > 0) {
                pagerViewRef.current?.setPage(nextPage);
                return nextPage;
              }
              return prevPage;
            });
          },
        };
      },
      [numberOfPages],
    );

    return (
      <AnimatedPagerView
        initialPage={initialPage}
        ref={pagerViewRef}
        {...props}
        onPageSelected={(event) => {
          props.onPageSelected?.(event);
          setPage(event.nativeEvent.position);
        }}
      >
        {children}
      </AnimatedPagerView>
    );
  },
);

export type PagerViewRef = PagerViewComponent & {
  nextPage: () => void;
  previousPage: () => void;
};

export const usePagerViewRef = () => useRef<PagerViewRef>(null);
