import { DevMenu, isDevelopmentBuild } from "expo-dev-client";
import { useEffect } from "react";
import { useMMKVObject } from "react-native-mmkv";

type DevMenuItem = {
  key: string;
  title: string;
};

const ITEMS: DevMenuItem[] = [
  {
    key: "storybook-enabled",
    title: "Toggle Storybook",
  },
  {
    key: "stack-debug-enabled",
    title: "Toggle Stack debug",
  },
] as const;

const useDevMenuItems = () => {
  return useMMKVObject<{ [key: string]: boolean }>("dev-menu-items");
};

export const useRegisterDevMenuItems = () => {
  const setValue = useDevMenuItems()[1];

  useEffect(() => {
    if (!isDevelopmentBuild()) {
      return;
    }
    DevMenu.registerDevMenuItems(
      ITEMS.map((item) => {
        return {
          name: item.title,
          shouldCollapse: true,
          callback: () => {
            setValue((prevValue) => {
              return {
                ...prevValue,
                [item.key]: !prevValue?.[item.key],
              };
            });
          },
        };
      }),
    );
  }, [setValue]);
};

export const useDevMenuItem = (
  key: "storybook-enabled" | "stack-debug-enabled",
) => {
  const [value] = useDevMenuItems();

  return value?.[key] ?? false;
};
