import {
  FC,
  createRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import Animated from "react-native-reanimated";
import { FadeInUp, FadeOutUp, LinearTransition } from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { AnimatedRectButton } from "../AnimatedButtons";
import { Text } from "../Text";

type NotifierRef = {
  create: (message: string) => void;
  dismiss: (message: string) => void;
};

const notifierRef = createRef<NotifierRef>();

type NotifierComposition = FC & NotifierRef;

export const Notifier: NotifierComposition = () => {
  const { styles } = useStyles(stylesheet);
  const [messages, setMessages] = useState<string[]>([]);

  const create = useCallback((message: string) => {
    setMessages((p) => [...p, message]);
  }, []);

  const dismiss = useCallback((message: string) => {
    setMessages((p) => p.filter((m) => m !== message));
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
      {messages.map((message) => {
        return (
          // TODO: replace this with Notification / Alert component
          <AnimatedRectButton
            entering={FadeInUp.duration(300)}
            exiting={FadeOutUp.duration(300)}
            key={message}
            layout={LinearTransition.duration(150)}
            onPress={() => dismiss(message)}
            style={styles.notification}
          >
            <Text>{message}</Text>
          </AnimatedRectButton>
        );
      })}
    </Animated.View>
  );
};

const stylesheet = createStyleSheet((_theme, runtime) => {
  return {
    notifier: { paddingTop: runtime.insets.top + 8, gap: 4 },
    notification: {
      backgroundColor: "red",
      borderRadius: 16,
      paddingHorizontal: 24,
      paddingVertical: 16,
      marginHorizontal: 8,
    },
  };
});

Notifier.create = (...args) => notifierRef.current?.create(...args);
Notifier.dismiss = (...args) => notifierRef.current?.dismiss(...args);
