import { useShakeAnimation } from "hooks";
import {
  ReactNode,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextInputFocusEventData,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const AnimatedTextInput = Animated.createAnimatedComponent(RNTextInput);

export type TextInputProps = Omit<RNTextInputProps, "editable"> & {
  disabled?: boolean;
  left?: ReactNode;
  right?: ReactNode;
};

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

type TextInputRef = {
  blur: () => void | undefined;
  clear: () => void | undefined;
  focus: () => void | undefined;
  isFocused: () => boolean | undefined;
  shake: () => void | undefined;
};

export const useTextInputRef = () => {
  return useRef<TextInputRef>(null);
};

export const textInputFocusManager = new TextInputFocusManager();

export const TextInput = forwardRef<TextInputRef, TextInputProps>(
  (
    { disabled, onBlur, onFocus, style, left = null, right = null, ...props },
    outerRef,
  ) => {
    const { shake, shakeAnimatedStyle } = useShakeAnimation();
    const { styles, theme } = useStyles(stylesheet);
    const innerRef = useRef<RNTextInput>(null);
    const isFocused = useSharedValue(false);

    useImperativeHandle(outerRef, () => {
      return {
        blur: () => innerRef.current?.blur(),
        clear: () => innerRef.current?.clear(),
        focus: () => innerRef.current?.focus(),
        isFocused: () => innerRef.current?.isFocused(),
        shake,
      };
    }, [shake]);

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
        textInputFocusManager.setLastTextInput(innerRef.current!);
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

    const disabledAnimatedStyle = useAnimatedStyle(() => {
      return {
        opacity: withTiming(disabled ? theme.opacity : 1, { duration: 300 }),
      };
    }, [disabled, theme.opacity]);

    const focusedStyleText = useAnimatedStyle(() => {
      return {
        top: withTiming(isFocused.value ? 4 : 13, { duration: 300 }),
        fontSize: withTiming(isFocused.value ? 12 : 16, { duration: 300 }),
        lineHeight: withTiming(isFocused.value ? 12 : 16, { duration: 300 }),
        color: withTiming(
          isFocused.value ? theme.colors.accent : theme.colors.typography,
          { duration: 300 },
        ),
      };
    });

    return (
      <Animated.View
        style={[
          styles.textInputContainer,
          style,
          shakeAnimatedStyle,
          disabledAnimatedStyle,
        ]}>
        {left}
        <View style={{ height: "100%", flex: 1 }}>
          <Animated.Text
            onPress={() => innerRef.current?.focus()}
            suppressHighlighting
            style={[
              {
                position: "absolute",
                zIndex: 2,
                left: left !== null ? 0 : 10,
              },
              focusedStyleText,
            ]}>
            Hello
          </Animated.Text>
          <AnimatedTextInput
            ref={innerRef}
            {...props}
            autoCapitalize={"none"}
            editable={!disabled}
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
            style={[
              styles.textInput({
                hasLeftIcon: left !== null,
                hasRightIcon: right !== null,
              }),
              focusedStyleTextInput,
            ]}
            textAlign="left"
            textContentType="none"
          />
        </View>
        {right}
      </Animated.View>
    );
  },
);

TextInput.displayName = "TextInput";

const stylesheet = createStyleSheet((theme) => {
  return {
    textInputContainer: {
      alignItems: "center",
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.typography,
      borderRadius: 5,
      borderWidth: 1,
      flexDirection: "row",
      height: 44,
      justifyContent: "center",
    },
    textInput: ({
      hasLeftIcon,
      hasRightIcon,
    }: {
      hasLeftIcon: boolean;
      hasRightIcon: boolean;
    }) => {
      return {
        color: theme.colors.typography,
        flex: 1,
        fontFamily: theme.fonts.IBMPlexMono_400Regular,
        fontSize: 16,
        paddingLeft: hasLeftIcon ? 0 : 10,
        paddingRight: hasRightIcon ? 0 : 10,
        paddingVertical: 10,
      };
    },
  };
});
