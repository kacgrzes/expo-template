/** eslint-disable import/no-unresolved */
import { trackScreen, useScreenTracking } from "@/analytics";
import { Grid } from "@grapp/stacks";
import {
  useDevMenuItem,
  useDevPlugins,
  useOrientationLock,
  useQuickActionSetup,
  useShakeEvent,
  // eslint-disable-next-line import/no-unresolved
} from "@mobile/hooks";
import { Slot, useRouter } from "expo-router";
import { Fragment } from "react";

export default function Root() {
  const router = useRouter();
  const enabled = useDevMenuItem("stack-debug-enabled");

  useDevPlugins();
  useOrientationLock();
  useQuickActionSetup();
  useScreenTracking(trackScreen);
  useShakeEvent(() => {
    router.navigate("/feedback");
  });

  return (
    <Fragment>
      <Slot />
      {enabled ? (
        <Grid columns={8} margin={4} gutter={4} color="#34BDFF" opacity={0.2} />
      ) : null}
    </Fragment>
  );
}
