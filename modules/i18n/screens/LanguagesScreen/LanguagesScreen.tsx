import { Text } from "components";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export function LanguagesScreen() {
  const { i18n } = useTranslation();
  const { styles } = useStyles(stylesheet);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {i18n.languages.map((language) => {
        return (
          <RectButton
            key={language}
            onPress={() => console.log("Hello!")}
            style={styles.listItem}>
            <Text>{language}</Text>
          </RectButton>
        );
      })}
    </ScrollView>
  );
}

const stylesheet = createStyleSheet(() => {
  return {
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    listItem: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#f0f0f0",
    },
  };
});
