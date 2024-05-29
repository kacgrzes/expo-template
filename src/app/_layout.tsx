import { Grid } from "@grapp/stacks";
import { Slot, useRouter } from "expo-router";
import {
  ScreenTrackingCallback,
  useDevMenuItem,
  useOrientationLock,
  useQuickActionSetup,
  useScreenTracking,
  useShakeEvent,
} from "hooks";
import { Fragment } from "react";

const recordView: ScreenTrackingCallback = ({ params, pathname }) => {
  console.log("Screen changed", { params, pathname });
};

export default function Root() {
  const router = useRouter();
  const enabled = useDevMenuItem("stack-debug-enabled");

  useOrientationLock();
  useQuickActionSetup();
  useScreenTracking(recordView);
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
