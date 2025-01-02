declare module "react-native-dynamic-app-icon" {
  function setAppIcon(iconIndex: string): void;

  function supportsDynamicAppIcon(): Promise<boolean>;

  type Callback = ({ iconName }: { iconName: string }) => void;

  function getIconName(callback: Callback): void;
}
