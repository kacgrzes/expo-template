import { configure } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import "@testing-library/react-native/extend-expect";
import { setUpTests } from "react-native-reanimated";

setUpTests();

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");
jest.mock("react-native-keyboard-controller", () =>
  require("react-native-keyboard-controller/jest"),
);
jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

jest.mock("zeego/context-menu", () => {
  return jest.fn(() => {
    return require("react").createElement("View", null, null);
  });
});

jest.mock("zeego/dropdown-menu", () => {
  return jest.fn(() => {
    return require("react").createElement("View", null, null);
  });
});

jest.setTimeout(5 * 1000); // default is 5 seconds

jest.retryTimes(3);

configure({
  asyncUtilTimeout: 5 * 1000, // 5 seconds
});
