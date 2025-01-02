import { Box, Grid } from "@grapp/stacks";
import { trackScreen, useScreenTracking } from "@mobile/analytics";
import {
  useDevMenuItem,
  useDevPlugins,
  useOrientationLock,
  useQuickActionSetup,
  useShakeEvent,
  // eslint-disable-next-line import/no-unresolved
} from "@mobile/hooks";
import { Slot, useRouter } from "expo-router";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function Root() {
  const router = useRouter();
  const enabled = useDevMenuItem("stack-debug-enabled");
  const { styles } = useStyles(stylesheet);

  useDevPlugins();
  useOrientationLock();
  useQuickActionSetup();
  useScreenTracking(trackScreen);
  useShakeEvent(() => {
    router.navigate("/feedback");
  });

  return (
    <Box flex={"fluid"} style={styles.container}>
      <Slot />
      {enabled ? (
        <Grid columns={8} margin={4} gutter={4} color="#34BDFF" opacity={0.2} />
      ) : null}
    </Box>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  };
});
