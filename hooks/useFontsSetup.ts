import { IBMPlexMono_400Regular } from "@expo-google-fonts/ibm-plex-mono";
import { IBMPlexSans_400Regular } from "@expo-google-fonts/ibm-plex-sans";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

export const useFontsSetup = () => {
  const [fontsLoaded, fontError] = useFonts({
    IBMPlexSans_400Regular,
    IBMPlexMono_400Regular,
  });

  const areFontsSuccessullyLoaded = fontsLoaded && !fontError;

  useEffect(() => {
    if (areFontsSuccessullyLoaded) {
      SplashScreen.hideAsync();
    }
  }, [areFontsSuccessullyLoaded]);

  return areFontsSuccessullyLoaded;
};
