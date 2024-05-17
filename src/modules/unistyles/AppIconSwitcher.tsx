import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { listAppIcons, getIconName, setAppIcon } from "./appIcon";
import { Asset } from "expo-asset";
import { Pressable, View } from "react-native";
import { createStyleSheet } from "react-native-unistyles";
import { useStyles } from "react-native-unistyles";

export function AppIconSwitcher() {
  const [icons, setAppIcons] = useState<Asset[] | undefined>();
  const [selectedIcon, setSelectedIcon] = useState<number | undefined>();
  const { styles } = useStyles(stylesheet);

  const selectIcon = (iconIndex: number) => {
    setAppIcon(iconIndex.toString());
    setSelectedIcon(iconIndex);
  };

  useEffect(() => {
    async function init() {
      const icons = await listAppIcons();
      setAppIcons(icons);
      const { iconName } = await getIconName();
      console.log({ iconName });
      setSelectedIcon(Number(iconName));
    }

    init();
  }, []);

  if (!icons) {
    return null;
  }

  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <Pressable
          style={{ opacity: selectedIcon !== index ? 0.4 : undefined }}
          key={index.toString()}
          onPress={() => selectIcon(index)}>
          <Image style={styles.appIcon} key={icon.hash} source={icon.uri} />
        </Pressable>
      ))}
    </View>
  );
}

const stylesheet = createStyleSheet({
  container: {
    flexDirection: "row",
    gap: 8,
  },
  appIcon: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
});
