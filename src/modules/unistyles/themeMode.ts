import { MMKV } from "react-native-mmkv";

import { ThemeMode } from "./changeThemeMode";

const storage = new MMKV();
export const themeMode = storage.getString("theme-mode") as
  | ThemeMode
  | undefined;
