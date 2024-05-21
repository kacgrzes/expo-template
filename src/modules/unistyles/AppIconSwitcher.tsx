import { useEffect, useState } from "react";
import { listAppIcons, getIconName, setAppIcon } from "./appIcon";
import { Asset } from "expo-asset";
import { Pressable, ScrollView } from "react-native";
import { createStyleSheet } from "react-native-unistyles";
import { useStyles } from "react-native-unistyles";
import { Image, RadioButton } from "components";

export function AppIconSwitcher() {
  const [icons, setAppIcons] = useState<Asset[] | undefined>();
  const [selectedIcon, setSelectedIcon] = useState<number | undefined>();
  const { styles } = useStyles(stylesheet);

  const selectIcon = (iconIndex: number) => {
    if (selectedIcon === iconIndex) {
      return;
    }
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
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.container}>
      {icons.map((icon, index) => {
        const selected = index === selectedIcon;

        return (
          <Pressable
            style={styles.appIconContainer(selected)}
            key={icon.hash}
            onPress={() => selectIcon(index)}>
            <Image style={styles.appIcon} source={icon.uri} />
            <RadioButton checked={selected} />
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const stylesheet = createStyleSheet({
  container: {
    paddingTop: 16,
  },
  contentContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 16,
  },
  appIconContainer: (selected: boolean) => ({
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
    opacity: !selected ? 0.4 : undefined,
    gap: 8,
  }),
  appIcon: {
    width: 64,
    height: 64,
    borderRadius: 12,
  },
});
