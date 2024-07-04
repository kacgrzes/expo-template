type ColorShade =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

// TODO: this could be original Status someday
export type Status = string;

export const statusColorPalette: Record<Status, Record<ColorShade, string>> = {
  success: {
    50: "#E8F5E9",
    100: "#C8E6C9",
    200: "#A5D6A7",
    300: "#81C784",
    400: "#66BB6A",
    500: "#4CAF50", // Original color
    600: "#43A047",
    700: "#388E3C",
    800: "#2E7D32",
    900: "#1B5E20",
    950: "#0A3D0A",
  },
  error: {
    50: "#FFEBEE",
    100: "#FFCDD2",
    200: "#EF9A9A",
    300: "#E57373",
    400: "#EF5350",
    500: "#F44336", // Original color
    600: "#E53935",
    700: "#D32F2F",
    800: "#C62828",
    900: "#B71C1C",
    950: "#7A0000",
  },
  warning: {
    50: "#FFF8E1",
    100: "#FFECB3",
    200: "#FFE082",
    300: "#FFD54F",
    400: "#FFCA28",
    500: "#FFC107", // Original color
    600: "#FFB300",
    700: "#FFA000",
    800: "#FF8F00",
    900: "#FF6F00",
    950: "#C43E00",
  },
  info: {
    50: "#E3F2FD",
    100: "#BBDEFB",
    200: "#90CAF9",
    300: "#64B5F6",
    400: "#42A5F5",
    500: "#2196F3", // Original color
    600: "#1E88E5",
    700: "#1976D2",
    800: "#1565C0",
    900: "#0D47A1",
    950: "#052C65",
  },
  muted: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E", // Original color
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    950: "#0A0A0A",
  },
};

export function extractDefaultColors(): Record<Status, string> {
  const defaultColors: Partial<Record<Status, string>> = {};

  for (const [status, shades] of Object.entries(statusColorPalette)) {
    defaultColors[status as Status] = shades[500];
  }

  return defaultColors as Record<Status, string>;
}

export type StatusColor = keyof typeof statusColorPalette;
export type ColorShadeType = keyof (typeof statusColorPalette)[StatusColor];
