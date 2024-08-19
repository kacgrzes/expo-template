import { type MutableRefObject, useRef } from "react";

export type UseLatest = <T>(value: T) => MutableRefObject<T>;

export const useLatest: UseLatest = (value) => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};
