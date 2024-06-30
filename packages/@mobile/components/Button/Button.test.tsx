import {
  render,
  screen,
  userEvent,
  waitFor,
} from "@testing-library/react-native";
import { Button } from "./Button";

describe("Components", () => {
  describe("Button", () => {
    it("renders correctly", () => {
      render(<Button title="Press Me" onPress={() => {}} />);
      expect(screen.getByText("Press Me")).toBeTruthy();
    });

    it("calls the onPress function when pressed", () => {
      const onPressMock = jest.fn();
      render(<Button title="Press Me" onPress={onPressMock} />);

      userEvent.press(screen.getByText("Press Me"));
      waitFor(() => {
        expect(onPressMock).toHaveBeenCalledTimes(1);
      });
    });

    it("does not call onPress when disabled", () => {
      const onPressMock = jest.fn();
      render(<Button title="Press Me" onPress={onPressMock} disabled />);

      userEvent.press(screen.getByText("Press Me"));
      waitFor(() => {
        expect(onPressMock).not.toHaveBeenCalled();
      });
    });

    it("applies disabled styles when disabled", () => {
      render(<Button title="Press Me" onPress={() => {}} disabled />);
      const button = screen.getByText("Press Me").parent;

      expect(button.props.enabled).toBeFalsy();
    });
  });
});
