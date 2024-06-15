import { StorybookConfig } from "@storybook/react-native";

const main: StorybookConfig = {
  stories: ["./stories/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
  ],
  // @ts-ignore
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
};

export default main;
