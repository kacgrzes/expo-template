import { useCallback, useRef } from "react";
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextInputFocusEventData,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const AnimatedTextInput = Animated.createAnimatedComponent(RNTextInput);

type TextInputProps = RNTextInputProps;

class TextInputFocusManager {
  private lastFocused: RNTextInput | null;

  constructor() {
    this.lastFocused = null;
  }

  setLastTextInput(textInput: RNTextInput) {
    this.lastFocused = textInput;
  }

  focusLastTextInput() {
    this.lastFocused?.focus();
  }

  dismissLastTextInput() {
    this.lastFocused?.blur();
  }

  getLastTextInput() {
    return this.lastFocused;
  }

  resetLastTextInput() {
    this.lastFocused = null;
  }
}

export const textInputFocusManager = new TextInputFocusManager();

export function TextInput({
  onBlur,
  onFocus,
  style,
  ...props
}: TextInputProps) {
  const { styles, theme } = useStyles(stylesheet);
  const ref = useRef<RNTextInput>(null);
  const isFocused = useSharedValue(false);

  const handleBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onBlur?.(e);
      isFocused.value = false;
      textInputFocusManager.resetLastTextInput();
    },
    [onBlur, isFocused],
  );

  const handleFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onFocus?.(e);
      isFocused.value = true;
      textInputFocusManager.setLastTextInput(ref.current!);
    },
    [onFocus, isFocused],
  );

  const focusedStyleTextInput = useAnimatedStyle(() => {
    return {
      borderColor: withTiming(
        isFocused.value ? theme.colors.accent : theme.colors.typography,
        { duration: 300 },
      ),
    };
  });

  const focusedStyleView = useAnimatedStyle(() => {
    return {
      borderColor: withTiming(
        isFocused.value ? theme.colors.accent + "50" : "transparent",
        { duration: 300 },
      ),
    };
  });

  const focusedStyleText = useAnimatedStyle(() => {
    return {
      top: withTiming(isFocused.value ? 4 : 10, { duration: 300 }),
      fontSize: withTiming(isFocused.value ? 12 : 16, { duration: 300 }),
      color: withTiming(
        isFocused.value ? theme.colors.accent : theme.colors.typography,
        { duration: 300 },
      ),
    };
  });

  return (
    <Animated.View style={[{ justifyContent: "center" }, style]}>
      <Animated.Text
        style={[
          {
            position: "absolute",
            zIndex: 2,
            left: 10,
          },
          focusedStyleText,
        ]}>
        Hello
      </Animated.Text>
      <AnimatedTextInput
        ref={ref}
        {...props}
        autoCapitalize={"none"}
        autoComplete="off"
        cursorColor={theme.colors.accent}
        dataDetectorTypes="none"
        inputMode="text"
        keyboardType="default"
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholderTextColor={theme.colors.typography}
        selectionColor={theme.colors.accent}
        spellCheck={false}
        style={[styles.textInput, focusedStyleTextInput]}
        textAlign="left"
        textContentType="none"
      />
    </Animated.View>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    textInput: {
      backgroundColor: theme.colors.background,
      color: theme.colors.typography,
      padding: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: theme.colors.typography,
      fontSize: 16,
    },
  };
});
