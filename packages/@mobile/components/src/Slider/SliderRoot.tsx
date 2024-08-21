import partition from "lodash/partition";
import React, { Children, isValidElement, cloneElement } from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Orientation, Size } from "../types";
import { SliderProvider } from "./SliderContext";
import { SliderThumb } from "./SliderThumb";

type SliderRootProps = {
  children?: React.ReactNode;
  defaultValue?: number[];
  disabled?: boolean;
  inverted?: boolean;
  max?: number;
  min?: number;
  minStepsBetweenThumbs?: number;
  onChange?: (values: number[]) => void;
  onValueChange?: (values: number[]) => void;
  onValueCommit?: (values: number[]) => void;
  orientation?: Orientation;
  size?: Size;
  step?: number;
  testID?: string;
  value?: number[];
};

export const SliderRoot = ({
  children,
  defaultValue = [0],
  disabled = false,
  inverted = false,
  max = 100,
  min = 0,
  onChange = () => {},
  onValueChange = () => {},
  onValueCommit = () => {},
  orientation = "horizontal",
  step = 1,
  minStepsBetweenThumbs = step,
  value,
}: SliderRootProps) => {
  const { styles } = useStyles(stylesheet);

  const validElements = Children.toArray(children).filter(isValidElement);
  const [thumbs, other] = partition(
    validElements,
    (child) => child.type === SliderThumb,
  );

  return (
    <SliderProvider
      defaultValue={defaultValue}
      disabled={disabled}
      inverted={inverted}
      max={max}
      min={min}
      minStepsBetweenThumbs={minStepsBetweenThumbs}
      onChange={onChange}
      onValueChange={onValueChange}
      onValueCommit={onValueCommit}
      orientation={orientation}
      step={step}
      value={value}
    >
      <View style={styles.root({ orientation })}>
        {other}
        {thumbs.map((thumb, index) => cloneElement(thumb, { index }))}
      </View>
    </SliderProvider>
  );
};

const stylesheet = createStyleSheet(() => {
  return {
    root: ({ orientation }: { orientation: Orientation }) => {
      if (orientation === "vertical") {
        return {
          width: 20,
          height: "100%",
          position: "relative",
        };
      }
      return {
        width: "100%",
        height: 20,
        position: "relative",
      };
    },
  };
});
