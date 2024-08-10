import React from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useSliderContext } from "./SliderContext";

type SliderTrackProps = {
  children: React.ReactNode;
};

export const SliderTrack = ({ children }: SliderTrackProps) => {
  const { styles } = useStyles(stylesheet);
  const { orientation } = useSliderContext();

  return <View style={styles.track({ orientation })}>{children}</View>;
};

const stylesheet = createStyleSheet({
  track: ({ orientation }: { orientation: "vertical" | "horizontal" }) => {
    if (orientation === "vertical") {
      return {
        width: 4,
        height: "100%",
        top: 0,
        left: "50%",
        transform: [{ translateX: -2 }],
      };
    }

    return {
      height: 4,
      backgroundColor: "#DCDCDC",
      width: "100%",
      position: "absolute",
      top: "50%",
      transform: [{ translateY: -2 }],
    };
  },
});
