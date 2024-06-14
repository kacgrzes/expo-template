import "@testing-library/jest-native/extend-expect";
import "@testing-library/react-native/extend-expect";

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");
jest.mock("react-native-keyboard-controller", () =>
  require("react-native-keyboard-controller/jest"),
);
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);
