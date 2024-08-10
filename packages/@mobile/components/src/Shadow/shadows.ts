import { shadowStyle } from "./Shadow";

export const shadows = {
  none: {},
  xs: shadowStyle({
    color: "#000",
    offset: [0, 1],
    opacity: 0.22,
    radius: 2.22,
  }),
};
