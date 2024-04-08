import { useFonts, OpenSans_400Regular } from "@expo-google-fonts/open-sans";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

export const useFontsSetup = () => {
  const [fontsLoaded, fontError] = useFonts({
    OpenSans_400Regular,
  });

  const areFontsSuccessullyLoaded = fontsLoaded && !fontError;

  useEffect(() => {
    if (areFontsSuccessullyLoaded) {
      SplashScreen.hideAsync();
    }
  }, [areFontsSuccessullyLoaded]);

  return areFontsSuccessullyLoaded;
};
