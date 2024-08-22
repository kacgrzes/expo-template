import { useAsyncStorageDevTools } from "@dev-plugins/async-storage";
import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
import { useNavigationContainerRef } from "expo-router";

export const useDevPlugins = () => {
  const navigationContainerRef = useNavigationContainerRef();

  useReactNavigationDevTools(navigationContainerRef);
  useAsyncStorageDevTools();
};
