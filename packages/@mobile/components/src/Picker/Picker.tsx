import {
  Picker as PickerComponent,
  PickerProps,
} from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import { useTextVariantStyle } from "../Text";

export const Picker = (props: PickerProps) => {
  const bodyStyle = useTextVariantStyle("body1");

  return (
    <PickerComponent
      {...props}
      numberOfLines={1}
      itemStyle={StyleSheet.compose(bodyStyle, props.itemStyle)}
    />
  );
};

Picker.Item = PickerComponent.Item;
