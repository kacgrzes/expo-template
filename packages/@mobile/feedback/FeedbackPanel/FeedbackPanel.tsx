import { BottomSheetView } from "@gorhom/bottom-sheet";
import {
  Button,
  Separator,
  Switch,
  Text,
  Title,
  textInputFocusManager,
} from "@mobile/components";
import { useEffect } from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export function FeedbackPanel() {
  const { styles } = useStyles(stylesheet);

  useEffect(() => {
    const lastTextInput = textInputFocusManager.getLastTextInput();
    if (lastTextInput) {
      textInputFocusManager.dismissLastTextInput();
    }
    return () => {
      if (lastTextInput) {
        textInputFocusManager.setLastTextInput(lastTextInput);
        textInputFocusManager.focusLastTextInput();
      }
    };
  }, []);

  return (
    <BottomSheetView style={styles.container}>
      <Text variant="title" textAlign="center">
        Zgłoś problem techniczny
      </Text>
      <Text textAlign="center">
        Jeśli napotkałeś problem techniczny, prosimy o zgłoszenie go.
      </Text>
      <Button title="Zgłoś problem" onPress={() => {}} />
      <Separator />
      <View style={styles.row}>
        <Text style={styles.text}>
          Potrząśnij telefonem, aby zgłosić problem
        </Text>
        <Switch />
      </View>
    </BottomSheetView>
  );
}

const stylesheet = createStyleSheet(() => {
  return {
    container: {
      padding: 24,
      gap: 16,
    },
    text: {
      flexShrink: 1,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
  };
});
