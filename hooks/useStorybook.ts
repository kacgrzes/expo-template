import { DevMenu, isDevelopmentBuild } from "expo-dev-client";
import { useEffect } from "react";
import { useMMKVBoolean } from "react-native-mmkv";

export const useStorybook = () => {
  const [enabled, setEnabled] = useMMKVBoolean("storybook-enabled");

  useEffect(() => {
    if (!isDevelopmentBuild()) {
      return;
    }
    DevMenu.registerDevMenuItems([
      {
        name: "Toggle Storybook",
        callback: () => setEnabled((e) => !e),
        shouldCollapse: true,
      },
    ]);
  }, [setEnabled]);

  return [enabled && isDevelopmentBuild(), setEnabled];
};
