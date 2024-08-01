import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useStyles } from "react-native-unistyles";

export const useModalsScreenOptions = (): NativeStackNavigationOptions => {
  const { theme } = useStyles();

  return {
    presentation: "modal",
    headerTitleStyle: {
      fontFamily: theme.fontFamily.IBMPlexSans_500Medium,
      fontWeight: "500",
    },
  };
};
