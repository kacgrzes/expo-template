import { FullWindowOverlay, Notifier } from "@/components";
import { PortalHost } from "@gorhom/portal";
import { StyleSheet, View } from "react-native";

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
