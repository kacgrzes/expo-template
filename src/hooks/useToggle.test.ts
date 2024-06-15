import { renderHook, act } from "@testing-library/react-native";
import { useToggle } from "./useToggle";

describe("useToggle hook", () => {
  test("should initialize with default value (false)", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current[0]).toBe(false);
  });

  test("should initialize with provided value (true)", () => {
    const { result } = renderHook(() => useToggle(true));

    expect(result.current[0]).toBe(true);
  });

  test("should toggle the state", () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current[1](); // call toggle
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1](); // call toggle again
    });

    expect(result.current[0]).toBe(false);
  });

  test("should set the state to true", () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current[2](true); // set state to true
    });

    expect(result.current[0]).toBe(true);
  });

  test("should set the state to false", () => {
    const { result } = renderHook(() => useToggle(true));

    act(() => {
      result.current[2](false); // set state to false
    });

    expect(result.current[0]).toBe(false);
  });
});
