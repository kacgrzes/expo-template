import { View, StyleSheet } from "react-native";
import { PortalHost } from "@gorhom/portal";
import { FullWindowOverlay, Notifier } from "@/components";

export function Overlays() {
  return (
    <FullWindowOverlay>
      <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
        <PortalHost name="sheets" />
        <PortalHost name="tooltips" />
        <Notifier />
      </View>
    </FullWindowOverlay>
  );
}
