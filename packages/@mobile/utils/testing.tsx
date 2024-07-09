import { RenderOptions, render } from "@testing-library/react-native";
import React, { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

function customRender<T>(
  element: React.ReactElement<T>,
  options?: RenderOptions,
) {
  return render(element, {
    wrapper: Wrapper,
    ...options,
  });
}

export * from "@testing-library/react-native";

export { customRender as render };
