import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "../useDebounce";

jest.useFakeTimers();

describe("useDebounce", () => {
  it("debe devolver el valor después del delay", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: "a" },
      }
    );
    expect(result.current).toBe("a");
    rerender({ value: "b" });
    expect(result.current).toBe("a");
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(result.current).toBe("b");
  });
});
