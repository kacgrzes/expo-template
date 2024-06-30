import { PortalHost } from "@gorhom/portal";
import { FullWindowOverlay, Notifier } from "@mobile/components";
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
