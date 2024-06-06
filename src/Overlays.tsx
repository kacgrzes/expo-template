import { FullWindowOverlay } from "react-native-screens";
import { View, StyleSheet } from "react-native";
import { PortalHost } from "@gorhom/portal";
import { Notifier } from "components";

export function Overlays() {
  return (
    <FullWindowOverlay>
      <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
        <PortalHost name="sheets" />
        <Notifier />
      </View>
    </FullWindowOverlay>
  );
}
