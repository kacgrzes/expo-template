import { breakpoints } from "./breakpoints";
import { darkTheme, lightTheme } from "./themes";

// if you defined breakpoints
type AppBreakpoints = typeof breakpoints;

// if you defined themes
type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

// override library types
declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

declare module "@grapp/stacks" {
  export interface StacksBreakpoints extends AppBreakpoints {}
}
