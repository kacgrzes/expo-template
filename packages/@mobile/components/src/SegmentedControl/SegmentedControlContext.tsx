import constate from "constate";
import { useMemo, useState } from "react";
import { LayoutRectangle } from "react-native";

const useSegmentedControl = ({
  disabled,
  full,
  numberOfChildren,
  selectedIndex,
}: {
  disabled: boolean;
  full: boolean;
  numberOfChildren: number;
  selectedIndex: number;
}) => {
  const [measurements, setMeasurements] = useState<LayoutRectangle[]>([]);

  const value = useMemo(
    () => ({
      disabled,
      full,
      measurements,
      ready: measurements.length === numberOfChildren,
      selectedIndex,
      setMeasurements,
    }),
    [disabled, full, measurements, selectedIndex, numberOfChildren],
  );

  return value;
};

export const [SegmentedControlProvider, useSegmentedControlContext] =
  constate(useSegmentedControl);
