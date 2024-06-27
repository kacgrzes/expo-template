import { AppIcon, RadioButton } from "@/components";
import { Asset } from "expo-asset";
import { useEffect, useState } from "react";
import { Pressable, ScrollView } from "react-native";
import { createStyleSheet } from "react-native-unistyles";
import { useStyles } from "react-native-unistyles";
import { getIconName, listAppIcons, setAppIcon } from "./appIcon";

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
      style={styles.container}
    >
      {icons.map((icon, index) => {
        const selected = index === selectedIcon;

        return (
          <Pressable
            accessibilityRole="radio"
            key={icon.hash}
            onPress={() => selectIcon(index)}
            style={styles.appIconContainer(selected)}
          >
            <AppIcon source={icon.uri} />
            <RadioButton selected={selected} />
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
});
