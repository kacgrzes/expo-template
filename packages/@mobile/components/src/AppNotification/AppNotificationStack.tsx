import { Box } from "@grapp/stacks";
import React from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Card } from "../Card";
import { AppNotification, AppNotificationProps } from "./AppNotification";

interface AppNotificationStackProps extends AppNotificationProps {
  stackDepth?: number;
}

export const AppNotificationStack: React.FC<AppNotificationStackProps> = ({
  stackDepth = 2,
  ...notificationProps
}) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Box width={"100%"}>
      {[...Array(stackDepth - 1)].map((_, index) => (
        <Card
          key={index}
          style={[
            styles.backgroundCard,
            {
              position: "absolute",
              // bottom: 0,
              bottom: -16 * (index + 1),
              transform: [{ scale: 0.9 - index * 0.2 }],
              zIndex: -index,
              opacity: 0.8 - index * 0.25,
            },
          ]}
        />
      ))}
      <AppNotification {...notificationProps} />
    </Box>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  backgroundCard: {
    position: "absolute",
    width: "100%",
  },
}));
