import { render } from "@mobile/utils/testing";
import { screen } from "@testing-library/react-native";
import React from "react";

import NotFoundScreen from "../../app/+not-found";

describe("+not-found", () => {
  test("renders correctly", async () => {
    render(<NotFoundScreen />);

    expect(screen.getByText("Not found!")).toBeTruthy();
    expect(screen.getByText("Go back home")).toBeTruthy();
  });
});
