// TODO: move to some util function
import * as Crypto from "expo-crypto";
import {
  FC,
  createRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import Animated from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Notification, NotificationProps } from "./Notification";

type NotificationPropsWithId = NotificationProps & { id: string };

type NotifierRef = {
  create: (notification: NotificationProps) => void;
  dismiss: (notificationId: string) => void;
};

const notifierRef = createRef<NotifierRef>();

type NotifierComposition = FC & NotifierRef;

export const Notifier: NotifierComposition = () => {
  const { styles } = useStyles(stylesheet);
  const [notifications, setNotifications] = useState<NotificationPropsWithId[]>(
    [],
  );

  const create = useCallback((notification: NotificationProps) => {
    setNotifications((p) => [
      ...p,
      {
        ...notification,
        id: Crypto.randomUUID(),
      },
    ]);
  }, []);

  const dismiss = useCallback((notificationId: string) => {
    setNotifications((p) =>
      p.filter((notification) => notification.id !== notificationId),
    );
  }, []);

  useImperativeHandle(
    notifierRef,
    () => {
      return {
        create,
        dismiss,
      };
    },
    [create, dismiss],
  );

  return (
    <Animated.View pointerEvents="box-none" style={styles.notifier}>
      {notifications.map((notification) => {
        return (
          <Notification
            {...notification}
            key={notification.id}
            onPress={() => dismiss(notification.id)}
          />
        );
      })}
    </Animated.View>
  );
};

const stylesheet = createStyleSheet((_theme, runtime) => {
  return {
    notifier: { paddingTop: runtime.insets.top + 8, gap: 4 },
  };
});

Notifier.create = (...args) => notifierRef.current?.create(...args);
Notifier.dismiss = (...args) => notifierRef.current?.dismiss(...args);
