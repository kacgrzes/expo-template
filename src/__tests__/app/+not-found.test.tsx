import React from "react";
import { render, screen } from "@testing-library/react-native";

import NotFoundScreen from "../../app/+not-found";

describe("+not-found", () => {
  test("renders correctly", async () => {
    render(<NotFoundScreen />);

    expect(screen.getByText("Not found!")).toBeTruthy();
    expect(screen.getByText("Go back home")).toBeTruthy();
  });
});
