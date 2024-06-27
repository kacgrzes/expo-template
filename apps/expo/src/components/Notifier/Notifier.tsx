import {
  FC,
  createRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AnimatedRectButton } from "@/components/AnimatedButtons";
import { Text } from "../Text";

type NotifierRef = {
  create: (message: string) => void;
  dismiss: (message: string) => void;
};

const notifierRef = createRef<NotifierRef>();

type NotifierComposition = FC & NotifierRef;

export const Notifier: NotifierComposition = () => {
  const { top } = useSafeAreaInsets();
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
    <View pointerEvents="box-none" style={{ paddingTop: top + 8, gap: 4 }}>
      {messages.map((message) => {
        return (
          // TODO: replace this with Notification / Alert component
          <AnimatedRectButton
            onPress={() => dismiss(message)}
            key={message}
            style={{
              backgroundColor: "red",
              borderRadius: 16,
              padding: 24,
              marginHorizontal: 8,
            }}
          >
            <Text>{message}</Text>
          </AnimatedRectButton>
        );
      })}
    </View>
  );
};

Notifier.create = (...args) => notifierRef.current?.create(...args);
Notifier.dismiss = (...args) => notifierRef.current?.dismiss(...args);
