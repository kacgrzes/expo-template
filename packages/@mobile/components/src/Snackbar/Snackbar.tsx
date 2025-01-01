import React, { useCallback, useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Shadow, shadows } from "../Shadow";
import { Text } from "../Text";

type SnackbarProps = {
  message: string;
  isVisible: boolean;
  onDismiss: () => void;
  action?: {
    label: string;
    onPress: () => void;
  };
  duration?: number;
};

export const Snackbar = ({
  message,
  isVisible,
  onDismiss,
  action,
  duration = 4000,
}: SnackbarProps) => {
  const { styles } = useStyles(stylesheet);
  const translateY = useSharedValue(100);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const showSnackbar = useCallback(() => {
    "worklet";
    translateY.value = withTiming(0, {
      duration: 300,
      easing: Easing.out(Easing.ease),
    });
  }, [translateY]);

  const hideSnackbar = useCallback(() => {
    "worklet";
    translateY.value = withTiming(
      100,
      {
        duration: 300,
        easing: Easing.in(Easing.ease),
      },
      () => {
        runOnJS(onDismiss)();
      },
    );
  }, [translateY, onDismiss]);

  useEffect(() => {
    if (isVisible) {
      showSnackbar();
      const timer = setTimeout(() => {
        hideSnackbar();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, showSnackbar, hideSnackbar]);

  const gesture = Gesture.Pan().onEnd((event) => {
    if (event.translationY > 20) {
      hideSnackbar();
    } else {
      showSnackbar();
    }
  });

  if (!isVisible) return null;

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, rStyle]}>
        <Shadow style={shadows.xs}>
          <View style={styles.content}>
            <Text style={styles.message}>{message}</Text>
            {action && (
              <TouchableOpacity
                onPress={action.onPress}
                style={styles.actionButton}
              >
                <Text style={styles.actionText}>{action.label}</Text>
              </TouchableOpacity>
            )}
          </View>
        </Shadow>
      </Animated.View>
    </GestureDetector>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#333",
    borderRadius: 4,
  },
  message: {
    color: "#fff",
    flex: 1,
    marginRight: 8,
  },
  actionButton: {
    marginLeft: 8,
  },
  actionText: {
    color: "#4CAF50",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
}));
