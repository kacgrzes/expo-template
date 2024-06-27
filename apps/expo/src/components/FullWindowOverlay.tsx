import { Platform, View } from "react-native";

export const FullWindowOverlay = (props: { children: React.ReactNode }) => {
  if (Platform.OS === "ios") {
    const RNSFullWindowOverlay = require("react-native-screens")
      .FullWindowOverlay as typeof View;
    return (
      <RNSFullWindowOverlay testID="FullWindowOverlay">
        {props.children}
      </RNSFullWindowOverlay>
    );
  }
  return <>{props.children}</>;
};
