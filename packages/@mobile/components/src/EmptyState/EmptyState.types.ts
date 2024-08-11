import { BoxProps } from "@grapp/stacks";
import { ReactNode } from "react";
import { ButtonProps } from "../Button";

export type EmptyStateProps = {
  explanation?: string;
  illustration?: ReactNode;
  title: string;
  cta?: ButtonProps;
} & BoxProps;
