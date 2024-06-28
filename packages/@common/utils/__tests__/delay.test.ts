import { delay } from "../delay";

describe("delay", () => {
  jest.useFakeTimers();
  jest.spyOn(global, "setTimeout");

  it("should return a promise that resolves after the specified time", async () => {
    const delayTime = 1000;
    const promise = delay(delayTime);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      delayTime,
    );

    jest.runAllTimers();

    await expect(promise).resolves.toBeUndefined();
  });

  it("should actually delay for the specified time", async () => {
    const delayTime = 1000;
    const start = Date.now();

    jest.useRealTimers();
    await delay(delayTime);
    const end = Date.now();

    const actualDelay = end - start;
    expect(actualDelay).toBeGreaterThanOrEqual(delayTime);
    expect(actualDelay).toBeLessThan(delayTime + 50); // Allow small margin for execution time
  });
});
