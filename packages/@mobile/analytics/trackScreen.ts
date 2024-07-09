import { useGlobalSearchParams } from "expo-router";

export type ScreenTrackingCallback = (screen: {
  pathname: string;
  params: ReturnType<typeof useGlobalSearchParams>;
}) => void;

export const trackScreen: ScreenTrackingCallback = ({ params, pathname }) => {
  console.log("Screen changed", { params, pathname });
};
