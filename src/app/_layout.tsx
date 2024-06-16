import { Grid } from "@grapp/stacks";
import { Slot, useRouter } from "expo-router";
import {
  useDevMenuItem,
  useDevPlugins,
  useOrientationLock,
  useQuickActionSetup,
  useShakeEvent,
} from "@/hooks";
import { Fragment } from "react";
import { useScreenTracking, trackScreen } from "@/analytics";

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
