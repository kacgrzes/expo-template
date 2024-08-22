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
  Component?: T | T[],
) => {
  return Children.toArray(children).filter((child) => {
    if (isValidElement(child)) {
      if (!Component) {
        return true;
      }

      if (Array.isArray(Component)) {
        return Component.some((c) => c === child.type);
      }

      return child.type === Component;
    }

    return false;
  }) as ReactElement<ComponentProps<any>>[];
};
