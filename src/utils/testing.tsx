import React, { ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react-native";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

function customRender<T>(
  component: React.ReactElement<T>,
  options?: RenderOptions,
) {
  return render(component, {
    wrapper: Wrapper,
    ...options,
  });
}

export * from "@testing-library/react-native";

export { customRender as render };
