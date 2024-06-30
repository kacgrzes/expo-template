import { useAsyncStorageDevTools } from "@dev-plugins/async-storage";
import { useMMKVDevTools } from "@dev-plugins/react-native-mmkv";
import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
import { useNavigationContainerRef } from "expo-router";

export const useDevPlugins = () => {
  const navigationContainerRef = useNavigationContainerRef();

  useReactNavigationDevTools(navigationContainerRef);
  useAsyncStorageDevTools();
  useMMKVDevTools();
};
