import { withModalStatusBar } from "@mobile/components";
import { AppIconSwitcher } from "@mobile/unistyles/AppIconSwitcher";

export default withModalStatusBar(() => (
  <AppIconSwitcher
    icons={[
      require("../../../../../assets/icon.png"),
      require("../../../../../assets/icon2.png"),
      require("../../../../../assets/icon3.png"),
    ]}
  />
));
