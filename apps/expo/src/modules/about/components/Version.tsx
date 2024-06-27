import { Text } from "@/components";
import * as Clipboard from "expo-clipboard";
import { useTranslation } from "react-i18next";
import { Pressable } from "react-native";

export function Version() {
  // @ts-ignore TODO: fix this
  const { t } = useTranslation("about");
  const appVersionWithBuildNumber = "1.0.0 (1)";

  return (
    <Pressable
      accessibilityRole="link"
      onPress={() => Clipboard.setStringAsync(appVersionWithBuildNumber)}
    >
      <Text>
        {t("version")} {appVersionWithBuildNumber}
      </Text>
    </Pressable>
  );
}
