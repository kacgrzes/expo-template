import { Status, statusColorPalette } from "./palette";

type Theme = "light" | "dark";

export function getThemeAwareStatusColor(status: Status, theme: Theme): string {
  if (theme === "light") {
    return status === "muted"
      ? statusColorPalette[status][600]
      : statusColorPalette[status][500];
  } else {
    return status === "muted"
      ? statusColorPalette[status][400]
      : statusColorPalette[status][300];
  }
}
