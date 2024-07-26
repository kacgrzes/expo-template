import React from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export const TooltipArrow = () => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.arrow} />;
};

const stylesheet = createStyleSheet({
  arrow: {
    position: "absolute",
    width: 10,
    height: 10,
    backgroundColor: "black",
    transform: [
      {
        rotate: "45deg",
      },
    ],
    alignSelf: "center",
    top: -5,
  },
});
