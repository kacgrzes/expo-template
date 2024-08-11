import constate from "constate";
import React, { useCallback, useState } from "react";
import Animated from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useDisabledStyle } from "../hooks/useDisabledStyle";
import { CollapsibleRootProps } from "./Collapsible.types";

const useOpenState = ({
  defaultOpen,
  disabled,
  onOpenChange: onOpenChangeFromProps,
  open: openFromProps,
}) => {
  const isControlled = typeof openFromProps !== "undefined";
  const hasDefaultOpen = typeof defaultOpen !== "undefined";

  const [internalOpen, setInternalOpen] = useState(
    hasDefaultOpen ? defaultOpen : false,
  );

  const open = isControlled ? openFromProps : internalOpen;

  const onOpenChange = useCallback(
    (open: boolean) => {
      if (onOpenChangeFromProps) {
        onOpenChangeFromProps(open);
      }

      if (!isControlled) {
        setInternalOpen(open);
      }
    },
    [isControlled, onOpenChangeFromProps],
  );

  return {
    disabled,
    onOpenChange,
    open,
  };
};

export const [CollapsibleProvider, useCollapsibleContext] =
  constate(useOpenState);

export const CollapsibleRoot = ({
  children,
  defaultOpen,
  disabled,
  onOpenChange,
  open,
}: CollapsibleRootProps) => {
  const { styles } = useStyles(stylesheet);
  const disabledStyle = useDisabledStyle({ disabled });

  return (
    <CollapsibleProvider
      defaultOpen={defaultOpen}
      disabled={disabled}
      onOpenChange={onOpenChange}
      open={open}
    >
      <Animated.View style={[styles.item, disabledStyle]}>
        {children}
      </Animated.View>
    </CollapsibleProvider>
  );
};

const stylesheet = createStyleSheet({
  item: {
    width: "100%",
  },
});
