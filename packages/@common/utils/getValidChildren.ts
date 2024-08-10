import {
  Children,
  ComponentProps,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  isValidElement,
} from "react";

export const getValidChildren = <T extends JSXElementConstructor<any>>(
  children: ReactNode,
  Component: T,
) => {
  return Children.toArray(children).filter((child) => {
    return isValidElement(child) && child.type === Component;
  }) as ReactElement<ComponentProps<typeof Component>>[];
};
