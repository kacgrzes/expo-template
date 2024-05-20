import { useRef } from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

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

export function TextInput({ ...props }: TextInputProps) {
  const { styles } = useStyles(stylesheet);
  const ref = useRef<RNTextInput>(null);

  return (
    <RNTextInput
      ref={ref}
      {...props}
      onFocus={(e) => {
        props?.onFocus?.(e);
        textInputFocusManager.setLastTextInput(ref.current!);
      }}
      onBlur={(e) => {
        props?.onBlur?.(e);
        textInputFocusManager.resetLastTextInput();
      }}
      style={[styles.textInput, props.style]}
    />
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
