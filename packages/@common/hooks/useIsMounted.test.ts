import { act, renderHook } from "@testing-library/react-native";
import { useIsMounted } from "./useIsMounted";

// TODO: this has to be tested
describe.skip("useIsMounted", () => {
  it("should return false on initial render", () => {
    const { result } = renderHook(() => useIsMounted());
    expect(result.current).toBe(false);
  });

  it("should return true after component mount", () => {
    const { result } = renderHook(() => useIsMounted());

    act(() => {
      // Simulate a re-render
      result.current;
    });

    expect(result.current).toBe(true);
  });

  it("should return false after component unmount", () => {
    const { result, unmount } = renderHook(() => useIsMounted());

    act(() => {
      // Simulate a re-render
      result.current;
    });

    unmount();

    expect(result.current).toBe(false);
  });
});
