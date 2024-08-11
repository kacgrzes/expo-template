import { BoxProps } from "@grapp/stacks";
import { ReactNode } from "react";
import { PageControlProps } from "../PageControl";
import { PagerViewProps } from "../PagerView";

export type PagerContainerProps = Omit<
  PagerViewProps,
  "onPageScroll" | "style"
>;

export type PagerControlProps = Omit<
  PageControlProps,
  "hidesForSinglePage" | "currentPage" | "numberOfPages" | "onPageChange"
>;

export type PagerPageProps = {
  children?: ReactNode;
} & BoxProps;
