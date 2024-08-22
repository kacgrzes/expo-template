import { mmkv } from "@mobile/utils";

import { ThemeMode } from "./changeThemeMode";

export const themeMode = mmkv.getString("theme-mode") as ThemeMode | undefined;
