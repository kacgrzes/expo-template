import { useRef } from "react";

export type TextInputRef = {
  blur: () => undefined;
  clear: () => undefined;
  focus: () => undefined;
  isFocused: () => boolean | undefined;
  shake: () => undefined;
};

export const useTextInputRef = () => {
  return useRef<TextInputRef>(null);
};
