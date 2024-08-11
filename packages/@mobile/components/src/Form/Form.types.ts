import { BoxProps } from "@grapp/stacks";
import { ReactElement, ReactNode } from "react";
import * as z from "zod";

export type FormControlProps = {
  children?: ReactElement;
};

export type FormFieldProps = {
  children: ReactNode;
  name: string;
};

export type FormHelperTextProps = {
  children: string | string[];
};

export type FormLabelProps = {
  children: ReactNode;
};

export type FormRootProps<T extends z.Schema<any, any>> = BoxProps & {
  schema?: T;
};
