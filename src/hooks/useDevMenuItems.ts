import { DevMenu, isDevelopmentBuild } from "expo-dev-client";
import { Image } from "expo-image";
import { useCallback, useEffect } from "react";
import { useMMKVObject } from "react-native-mmkv";
import { mmkv } from "utils";

type DevMenuItem = {
  key: string;
  title: string;
  callback?: () => void;
};

const ITEMS: DevMenuItem[] = [
  {
    key: "storybook-enabled",
    title: "Toggle Storybook",
  },
  {
    key: "stack-debug-enabled",
    title: `Toggle Stack debug`,
  },
] as const;

const useDevMenuItems = () => {
  return useMMKVObject<{ [key: string]: boolean }>("dev-menu-items", mmkv);
};

export const useRegisterDevMenuItems = () => {
  const [value, setValue] = useDevMenuItems();

  const registerDevMenuItems = useCallback(() => {
    DevMenu.registerDevMenuItems([
      ...ITEMS.map((item) => {
        return {
          name: `${item.title} (${value?.[item.key] ? "enabled" : "disabled"})`,
          shouldCollapse: true,
          callback: () => {
            setValue((prevValue) => {
              return {
                ...prevValue,
                [item.key]: !prevValue?.[item.key],
              };
            });
            item.callback?.();
          },
        };
      }),
      {
        name: "Clear Image cache",
        callback: () => {
          Image.clearDiskCache();
          Image.clearMemoryCache();
        },
      },
    ]);
  }, [value, setValue]);

  useEffect(() => {
    if (!isDevelopmentBuild()) {
      return;
    }

    registerDevMenuItems();
  }, [setValue, registerDevMenuItems]);
};

export const useDevMenuItem = (
  key: "storybook-enabled" | "stack-debug-enabled",
) => {
  const [value] = useDevMenuItems();

  return value?.[key] ?? false;
};
