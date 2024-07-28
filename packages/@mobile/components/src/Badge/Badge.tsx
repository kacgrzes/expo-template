import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Dot } from "../Dot";
import { Text } from "../Text";
import { Status } from "../types";

type BadgeStatus = "default" | Omit<Status, "secondary">;

type BadgeProps = {
  /** Value in the badge. Badge will be a dot if this is not provided/ */
  label?: number | string;
  max?: number;
  outline?: boolean;
  status?: BadgeStatus;
};

/**
 * # Badge
 *
 * @component
 *
 * @description A badge is a small, contextual UI element that typically displays a status, notification count, or short piece of information. It is often attached to an icon, avatar, or a button, providing additional context or highlighting a change in status.
 *
 * @example
 *
 * ```tsx
 * <Badge label={3} />
 * ```
 */
export function Badge({
  label,
  max = 99,
  outline,
  status = "default",
}: BadgeProps) {
  const { styles } = useStyles(stylesheet);

  if (!label) {
    return <Dot />;
  }

  const isNumber = typeof label === "number";
  const value = isNumber
    ? Math.min(label, max) + (label > max ? "+" : "")
    : label;

  return (
    <View>
      <View style={styles.container(status)}>
        <Text
          style={styles.label(status)}
          suppressHighlighting
          textAlign="center"
          variant="label1"
        >
          {value}
        </Text>
      </View>
      {outline ? <View style={styles.outline} /> : null}
    </View>
  );
}

const getBadgeBackgroundColor = (status: BadgeStatus) => {
  return {
    default: "rgb(255, 59, 48)",
    error: "#f87171",
    info: "#60a5fa",
    muted: "#94a3b8",
    success: "#86efac",
    warning: "#facc15",
  }[status];
};

const getBadgeColor = (status: BadgeStatus) => {
  return {
    default: "#fff",
    error: "#450a0a",
    info: "#172554",
    muted: "#020617",
    success: "#14532d",
    warning: "#422006",
  }[status];
};

const stylesheet = createStyleSheet((theme) => {
  const height = 20;
  const outline = 2;

  return {
    container: (status: BadgeStatus) => {
      return {
        alignItems: "center",
        backgroundColor: getBadgeBackgroundColor(status),
        borderRadius: height / 2,
        color: "#fff",
        flexShrink: 1,
        fontFamily: theme.fontFamily.IBMPlexSans_400Regular,
        fontSize: 14,
        height: height,
        justifyContent: "center",
        lineHeight: height,
        paddingHorizontal: 6,
      };
    },
    label: (status: BadgeStatus) => {
      return {
        color: getBadgeColor(status),
        lineHeight: height,
        textAlignVertical: "center",
      };
    },
    outline: {
      backgroundColor: theme.colors.background,
      borderRadius: (height + outline * 2) / 2,
      bottom: -outline,
      left: -outline,
      position: "absolute",
      right: -outline,
      top: -outline,
      zIndex: -1,
    },
  };
});

export const useBadgeStyle = () =>
  useStyles(stylesheet).styles.container("default");
