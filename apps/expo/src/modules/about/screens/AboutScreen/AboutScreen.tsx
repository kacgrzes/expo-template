import { ListItem, SocialIcon, Title } from "@mobile/components";
import { applicationName } from "expo-application";
import { useRouter } from "expo-router";
import { ScrollView, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Clipboard, FileCheck, LockKeyhole, Mail } from "lucide-react-native";
import { Version } from "../../components/Version";
import { composeEmail } from "../../utils/composeEmail";

export function AboutScreen() {
  const router = useRouter();
  const { styles } = useStyles(stylesheet);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.top}>
        <Title>{applicationName}</Title>
      </View>
      <ListItem
        icon={Clipboard}
        title="Terms and conditions"
        onPress={() => {
          router.navigate("/terms-and-conditions");
        }}
      />
      <ListItem
        icon={LockKeyhole}
        title="Privacy policy"
        onPress={() => {
          router.navigate("/privacy-policy");
        }}
      />
      <ListItem
        icon={FileCheck}
        title="Licenses"
        onPress={() => {
          router.navigate("/licenses");
        }}
      />
      <ListItem icon={Mail} title="Contact us" onPress={composeEmail} />
      <View style={styles.socials}>
        <SocialIcon name="Facebook" onPress={() => {}} />
        <SocialIcon name="Instagram" onPress={() => {}} />
        <SocialIcon name="Twitter" onPress={() => {}} />
      </View>
      <Version />
    </ScrollView>
  );
}

const stylesheet = createStyleSheet({
  top: {
    padding: 24,
  },
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  socials: {
    flexDirection: "row",
    gap: 8,
    padding: 16,
  },
});
