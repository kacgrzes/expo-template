import { Box } from "@grapp/stacks";
import {
  BadgeInfo,
  CircleCheck,
  LucideIcon,
  OctagonX,
  TriangleAlert,
  X,
} from "lucide-react-native";
import React, { useMemo } from "react";
import { FadeInUp, FadeOutUp, LinearTransition } from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Status } from "../types";

import { AnimatedRectButton } from "../AnimatedButtons";
import { BlurView } from "../BlurView";
import { Text } from "../Text";

type NotificationStatus = Exclude<Status, "muted" | "primary">;

const icons: Record<NotificationStatus, LucideIcon> = {
  error: OctagonX,
  info: BadgeInfo,
  success: CircleCheck,
  warning: TriangleAlert,
};

export type NotificationProps = {
  description?: string;
  onDismiss?: () => void;
  onPress?: () => void;
  status?: NotificationStatus;
  title?: string;
};

export const Notification = ({
  description,
  onPress,
  status = "info",
  title,
}: NotificationProps) => {
  const { styles, theme } = useStyles(stylesheet);
  const Icon = useMemo(() => icons[status], [status]);

  return (
    <AnimatedRectButton
      entering={FadeInUp.duration(300)}
      exiting={FadeOutUp.duration(300)}
      layout={LinearTransition.duration(150)}
      onPress={onPress}
      style={styles.notification(status)}
    >
      <BlurView />
      <Icon color={theme.colors[status]} />
      <Box direction={"column"} gap={2} flex={"fluid"}>
        {title ? <Text status={status}>{title}</Text> : null}
        {description ? <Text status={status}>{description}</Text> : null}
      </Box>
      <X color={theme.colors[status]} />
    </AnimatedRectButton>
  );
};

const stylesheet = createStyleSheet((theme) => {
  return {
    notification: (status: NotificationStatus) => {
      return {
        flexDirection: "row",
        backgroundColor: theme.colors[status] + "AA",
        borderRadius: 16,
        paddingHorizontal: 12,
        paddingVertical: 16,
        marginHorizontal: 8,
        gap: 12,
        overflow: "hidden",
      };
    },
  };
});
