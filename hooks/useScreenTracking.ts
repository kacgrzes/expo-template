import { useGlobalSearchParams, usePathname } from "expo-router";
import { useEffect } from "react";

type ScreenTrackingCallback = (screen: {
  pathname: string;
  params: ReturnType<typeof useGlobalSearchParams>;
}) => void;

export const useScreenTracking = (
  callback: ScreenTrackingCallback = () => {},
) => {
  const pathname = usePathname();
  const params = useGlobalSearchParams();

  // Track the location in your analytics provider here.
  useEffect(() => {
    callback({ pathname, params });
  }, [callback, pathname, params]);
};
