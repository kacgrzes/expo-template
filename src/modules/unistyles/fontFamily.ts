import { fonts } from "./fonts";

type FontName = keyof typeof fonts;

export const fontFamily = Object.keys(fonts).reduce((acc, key) => {
  return {
    ...acc,
    [key]: key,
  };
}, {}) as Record<FontName, string>;
