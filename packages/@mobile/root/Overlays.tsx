import { PortalHost } from "@gorhom/portal";
import { FullWindowOverlay, Notifier } from "@mobile/components";
import React from "react";
import { StyleSheet, View } from "react-native";

/**
 * Organizes the overlays in the app. Order matters.
 */
export function Overlays() {
  return (
    <FullWindowOverlay>
      <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
        <PortalHost name="overlay" />
        <PortalHost name="sheets" />
        <PortalHost name="tooltips" />
        <Notifier />
      </View>
    </FullWindowOverlay>
  );
}
