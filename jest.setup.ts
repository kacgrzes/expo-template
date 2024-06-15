import "@testing-library/jest-native/extend-expect";
import "@testing-library/react-native/extend-expect";

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");
jest.mock("react-native-keyboard-controller", () =>
  require("react-native-keyboard-controller/jest"),
);
