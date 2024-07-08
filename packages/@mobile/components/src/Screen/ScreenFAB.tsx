import React, { ReactElement } from "react";
import { KeyboardStickyView } from "react-native-keyboard-controller";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";
import { FABProps } from "../FAB";

type ScreenFABProps = {
  fab: ReactElement<FABProps>;
  footerHeight: number;
  hasBottomEdge: boolean;
};

export const ScreenFAB: React.FC<ScreenFABProps> = React.memo(
  ({ fab, footerHeight, hasBottomEdge }) => {
    const { styles } = useStyles(stylesheet);

    return (
      <KeyboardStickyView
        style={styles.fabContainer}
        offset={{
          closed: footerHeight
            ? -footerHeight
            : -(hasBottomEdge ? UnistylesRuntime.insets.bottom : 0),
          opened: footerHeight
            ? -footerHeight + UnistylesRuntime.insets.bottom
            : 0,
        }}
      >
        {fab}
      </KeyboardStickyView>
    );
  },
);

const stylesheet = createStyleSheet(() => ({
  fabContainer: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
}));
