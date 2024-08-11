import PagerViewComponent, {
  PagerViewProps as PagerViewComponentProps,
} from "react-native-pager-view";

export type PagerViewProps = PagerViewComponentProps;

export type PagerViewRef = PagerViewComponent & {
  nextPage: () => void;
  previousPage: () => void;
};
