import { Notifier as Toast } from "@mobile/components";
import React, { useEffect } from "react";
import { StyleSheet, TextInput } from "react-native";
import {
  KeyboardEvents,
  useResizeMode,
} from "react-native-keyboard-controller";

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#3c3c3c",
  },
});

function EventsListener() {
  useResizeMode();

  useEffect(() => {
    const show = KeyboardEvents.addListener("keyboardWillShow", (e) => {
      const delay = new Date().getTime() - e.timestamp;

      Toast.create({
        status: "info",
        title: "⬆️ ⌨️ Keyboard will show",
        description: `📲 Height: ${e.height}, duration: ${e.duration}ms, delay: ${delay}ms`,
      });
    });
    const shown = KeyboardEvents.addListener("keyboardDidShow", (e) => {
      const delay = new Date().getTime() - e.timestamp;

      Toast.create({
        status: "success",
        title: "⌨️ Keyboard is shown",
        description: `👋 Height: ${e.height}, duration: ${e.duration}ms, delay: ${delay}ms`,
      });
    });
    const hide = KeyboardEvents.addListener("keyboardWillHide", (e) => {
      const delay = new Date().getTime() - e.timestamp;

      Toast.create({
        status: "info",
        title: "⬇️ ⌨️ Keyboard will hide",
        description: `📲 Height: ${e.height}, duration: ${e.duration}ms, delay: ${delay}ms`,
      });
    });
    const hid = KeyboardEvents.addListener("keyboardDidHide", (e) => {
      const delay = new Date().getTime() - e.timestamp;

      Toast.create({
        status: "error",
        title: "⌨️ Keyboard is hidden",
        description: `🤐 Height: ${e.height}, duration: ${e.duration}ms, delay: ${delay}ms`,
      });
    });

    return () => {
      show.remove();
      shown.remove();
      hide.remove();
      hid.remove();
    };
  }, []);

  return <TextInput style={styles.input} />;
}

export default function Events() {
  return (
    <>
      <EventsListener />
      <Toast />
    </>
  );
}
