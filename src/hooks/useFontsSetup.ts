import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { useStyles } from "react-native-unistyles";

export const useFontsSetup = () => {
  const { theme } = useStyles();

  const [fontsLoaded, fontError] = useFonts(theme.fonts);

  const areFontsSuccessullyLoaded = fontsLoaded && !fontError;

  useEffect(() => {
    if (areFontsSuccessullyLoaded) {
      SplashScreen.hideAsync();
    }
  }, [areFontsSuccessullyLoaded]);

  return areFontsSuccessullyLoaded;
};
