import { Pressable, RadioButton, Text } from "@mobile/components";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { LANGUAGES } from "../../languages";

export function LanguagesScreen() {
  const { i18n } = useTranslation();
  const { styles } = useStyles(stylesheet);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {LANGUAGES.map((language) => {
        return (
          <Pressable
            key={language.id}
            onPress={() => i18n.changeLanguage(language.id)}
            style={styles.listItem}
          >
            <Text>{language.name}</Text>
            <RadioButton selected={language.id === i18n.language} />
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const stylesheet = createStyleSheet(() => {
  return {
    container: {
      flex: 1,
    },
    listItem: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#f0f0f0",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  };
});
