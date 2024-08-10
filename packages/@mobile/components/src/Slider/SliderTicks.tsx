import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useSliderContext } from "./SliderContext";

export const SliderTicks = () => {
  const { styles } = useStyles(stylesheet);
  const { min, max, step } = useSliderContext();

  const ticks = useMemo(() => {
    return Array.from({ length: (max - min) / step + 1 }).map((_, index) => {
      return <Tick key={`tick-${index}`} />;
    });
  }, [min, max, step]);

  return <View style={styles.tickers}>{ticks}</View>;
};

const Tick = memo(() => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.tick} />;
});

const stylesheet = createStyleSheet({
  tickers: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tick: {
    backgroundColor: "black",
    height: 12,
    width: 4,
  },
});
