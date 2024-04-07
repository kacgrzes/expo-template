import { useFonts, OpenSans_400Regular } from "@expo-google-fonts/open-sans";

export const useFontsSetup = () => {
  const [fontsLoaded, fontError] = useFonts({
    OpenSans_400Regular,
  });

  return fontsLoaded && !fontError;
};
