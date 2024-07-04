import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { EmptyState } from "./EmptyState";

describe("EmptyState", () => {
  it("renders correctly with minimal props", () => {
    const { getByText } = render(<EmptyState title="No data" />);
    expect(getByText("No data")).toBeTruthy();
  });

  it("renders explanation when provided", () => {
    const { getByText } = render(
      <EmptyState title="No data" explanation="There is no data available." />,
    );
    expect(getByText("There is no data available.")).toBeTruthy();
  });

  it("renders illustration when provided", () => {
    const { getByTestId } = render(
      <EmptyState
        title="No data"
        illustration={<View testID="test-illustration" />}
      />,
    );
    expect(getByTestId("test-illustration")).toBeTruthy();
  });

  it("renders CTA button when provided", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <EmptyState
        title="No data"
        cta={{ title: "Add Data", onPress: onPressMock }}
      />,
    );
    const button = getByText("Add Data");
    expect(button).toBeTruthy();
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("applies custom styles", () => {
    const { getByText } = render(
      <EmptyState
        title="No data"
        containerStyle={{ backgroundColor: "red" }}
        titleStyle={{ color: "blue" }}
        explanationStyle={{ fontStyle: "italic" }}
        explanation="Test explanation"
      />,
    );
    const container = getByText("No data").parent.parent;
    expect(container.props.style).toContainEqual({ backgroundColor: "red" });
    expect(getByText("No data").props.style).toContainEqual({ color: "blue" });
    expect(getByText("Test explanation").props.style).toContainEqual({
      fontStyle: "italic",
    });
  });

  it("has correct accessibility properties", () => {
    const { getByA11yLabel } = render(
      <EmptyState
        title="No data"
        accessibilityLabel="Empty state description"
      />,
    );
    expect(getByA11yLabel("Empty state description")).toBeTruthy();
  });
});
