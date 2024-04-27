import { IBMPlexMono_400Regular } from "@expo-google-fonts/ibm-plex-mono";
import { IBMPlexSans_400Regular } from "@expo-google-fonts/ibm-plex-sans";
import { IBMPlexSerif_600SemiBold } from "@expo-google-fonts/ibm-plex-serif";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

export const useFontsSetup = () => {
  const [fontsLoaded, fontError] = useFonts({
    IBMPlexMono_400Regular,
    IBMPlexSans_400Regular,
    IBMPlexSerif_600SemiBold,
  });

  const areFontsSuccessullyLoaded = fontsLoaded && !fontError;

  useEffect(() => {
    if (areFontsSuccessullyLoaded) {
      SplashScreen.hideAsync();
    }
  }, [areFontsSuccessullyLoaded]);

  return areFontsSuccessullyLoaded;
};
