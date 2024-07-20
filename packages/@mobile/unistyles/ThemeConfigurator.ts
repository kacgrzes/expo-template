import { deepMerge } from "@common/utils";
import { UnistylesRegistry } from "react-native-unistyles";
import { breakpoints } from "./breakpoints";
import { themeMode } from "./themeMode";
import { common as commonTheme, darkTheme, lightTheme } from "./themes";

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

class ThemeConfigurator {
  private commonTheme: typeof commonTheme = commonTheme;
  private lightTheme: typeof lightTheme = lightTheme;
  private darkTheme: typeof darkTheme = darkTheme;

  common(theme: DeepPartial<typeof commonTheme>) {
    this.commonTheme = deepMerge(this.commonTheme, theme);
    return this;
  }

  dark(theme: DeepPartial<typeof darkTheme>) {
    this.darkTheme = deepMerge(this.darkTheme, theme);
    return this;
  }

  light(theme: Omit<DeepPartial<typeof lightTheme>, "name">) {
    this.lightTheme = deepMerge(this.lightTheme, theme);
    return this;
  }

  init() {
    UnistylesRegistry.addBreakpoints(breakpoints)
      .addThemes({
        dark: {
          ...this.commonTheme,
          ...this.darkTheme,
        },
        light: {
          ...this.commonTheme,
          ...this.lightTheme,
        },
      })
      .addConfig({
        // you can pass here optional config described below
        adaptiveThemes: themeMode === "system" || !themeMode,
        initialTheme:
          themeMode === "system" || !themeMode ? undefined : themeMode,
      });
  }
}

export const themeConfigurator = new ThemeConfigurator();
