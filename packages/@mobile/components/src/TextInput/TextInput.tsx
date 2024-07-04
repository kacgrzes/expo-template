/** eslint-disable @typescript-eslint/no-unused-vars */
import {
  CommonAccessoryProps,
  CommonFormProps,
} from "@mobile/components/types";
import { useShakeAnimation } from "@mobile/hooks/useShakeAnimation";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
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

// TODO: add TextInput.Icon / TextInput.Affix
export type TextInputProps = CommonFormProps &
  CommonAccessoryProps &
  Omit<RNTextInputProps, "editable">;

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
  blur: () => undefined;
  clear: () => undefined;
  focus: () => undefined;
  isFocused: () => boolean | undefined;
  shake: () => undefined;
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
    "use no memo";
    const { shake, shakeAnimatedStyle } = useShakeAnimation();
    const { styles, theme } = useStyles(stylesheet);
    const innerRef = useRef<RNTextInput>(null);
    const isFocused = useSharedValue(false);

    useImperativeHandle(
      outerRef,
      () => {
        return {
          blur: () => {
            innerRef.current?.blur();
            return undefined;
          },
          clear: () => {
            innerRef.current?.clear();
            return undefined;
          },
          focus: () => {
            innerRef.current?.focus();
            return undefined;
          },
          isFocused: () => {
            innerRef.current?.isFocused();
            return undefined;
          },
          shake: () => {
            shake();
            return undefined;
          },
        };
      },
      [shake],
    );

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
        if (innerRef.current) {
          textInputFocusManager.setLastTextInput(innerRef.current);
        }
      },
      [onFocus, isFocused],
    );

    const focusedStyleTextInput = useAnimatedStyle(() => {
      return {
        borderColor: withTiming(
          isFocused.value ? theme.colors.accent : theme.colors.typography,
          { duration: theme.animation.duration },
        ),
      };
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _focusedStyleView = useAnimatedStyle(() => {
      return {
        borderColor: withTiming(
          isFocused.value ? `${theme.colors.accent}50` : "transparent",
          { duration: theme.animation.duration },
        ),
      };
    });

    const disabledAnimatedStyle = useAnimatedStyle(() => {
      return {
        opacity: withTiming(disabled ? theme.opacity : 1, {
          duration: theme.animation.duration,
        }),
      };
    }, [disabled, theme.opacity]);

    const focusedStyleText = useAnimatedStyle(() => {
      return {
        top: withTiming(isFocused.value ? 4 : 13, {
          duration: theme.animation.duration,
        }),
        fontSize: withTiming(isFocused.value ? 12 : 16, {
          duration: theme.animation.duration,
        }),
        lineHeight: withTiming(isFocused.value ? 12 : 16, {
          duration: theme.animation.duration,
        }),
        color: withTiming(
          isFocused.value ? theme.colors.accent : theme.colors.typography,
          { duration: theme.animation.duration },
        ),
      };
    });

    return (
      <Animated.View
        style={[
          // @ts-ignore TODO: fix this
          styles.textInputContainer,
          style,
          shakeAnimatedStyle,
          disabledAnimatedStyle,
        ]}
      >
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
            ]}
          >
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
              // @ts-ignore TODO: fix this
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

// @ts-ignore TODO: fix this
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
