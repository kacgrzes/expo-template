import { Box } from "@grapp/stacks";
import React from "react";
import { AppIcon } from "../AppIcon";
import { Card } from "../Card";
import { Text } from "../Text";

export interface AppNotificationProps {
  appName: string;
  title: string;
  message: string;
  time: string;
  appIconSource: any; // This should be the source for the app icon
}

export const AppNotification: React.FC<AppNotificationProps> = ({
  appName,
  title,
  message,
  time,
  appIconSource,
}) => {
  return (
    <Card>
      <Box direction="column" gap={2}>
        <Box direction="row" alignY={"center"} gap={2}>
          <AppIcon source={appIconSource} context="notification" />
          <Box
            direction="row"
            flex="fluid"
            alignY={"center"}
            alignX={"between"}
          >
            <Text status="muted" variant="body3" textTransform="uppercase">
              {appName}
            </Text>
            <Text variant="caption1" status="muted">
              {time}
            </Text>
          </Box>
        </Box>
        <Box>
          <Text variant="label1">{title}</Text>
          <Text status="muted" variant="body1" numberOfLines={2}>
            {message}
          </Text>
          T
        </Box>
      </Box>
    </Card>
  );
};
