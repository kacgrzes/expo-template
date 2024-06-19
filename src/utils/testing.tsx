import React from "react";
import { render, RenderOptions } from "@testing-library/react-native";

function customRender<T>(
  component: React.ReactElement<T>,
  options?: RenderOptions,
) {
  return render(component, {
    wrapper: ({ children }) => <>{children}</>,
    ...options,
  });
}

export * from "@testing-library/react-native";

export { customRender as render };
