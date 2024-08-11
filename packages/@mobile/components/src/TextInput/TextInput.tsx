import { useShakeAnimation } from "@mobile/hooks/useShakeAnimation";
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  View,
} from "react-native";
import { TextInput as RNTextInput } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  useDerivedValue,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
/** eslint-disable @typescript-eslint/no-unused-vars */

import { TextInputProps } from "./TextInput.types";
import { textInputFocusManager } from "./textInputFocusManager";
import { TextInputRef } from "./useTextInputRef";

const AnimatedTextInput = Animated.createAnimatedComponent(RNTextInput);

// TODO: add TextInput.Icon / TextInput.Affix

export const TextInput = forwardRef<TextInputRef, TextInputProps>(
  (
    {
      disabled,
      onBlur,
      onFocus,
      style,
      left = null,
      right = null,
      value: controlledValue,
      defaultValue,
      ...props
    },
    outerRef,
  ) => {
    "use no memo";
    const [internalValue, setInternalValue] = useState(defaultValue);
    const value =
      controlledValue !== undefined ? controlledValue : internalValue;
    const { shake, shakeAnimatedStyle } = useShakeAnimation();
    const { styles, theme } = useStyles(stylesheet);
    const innerRef = useRef<RNTextInput>(null);

    const isFocused = useSharedValue(false);
    const hasValue = typeof value !== "undefined" && value.length !== 0;
    const isFocusedOrHasValue = useDerivedValue(
      () => isFocused.value || hasValue,
    );

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
          isFocusedOrHasValue.value
            ? theme.colors.primary
            : theme.colors.typography,
          { duration: theme.animation.duration },
        ),
        bottom: -4,
      };
    });

    const textInputContainerStyle = useAnimatedStyle(() => {
      return {
        borderColor: withTiming(
          isFocused.value ? theme.colors.primary : "lightgrey",
          { duration: 300 },
        ),
      };
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _focusedStyleView = useAnimatedStyle(() => {
      return {
        borderColor: withTiming(
          isFocused.value ? `${theme.colors.primary}50` : "transparent",
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
        top: withTiming(isFocusedOrHasValue.value ? 4 : 13, {
          duration: theme.animation.duration,
        }),
        fontSize: withTiming(isFocusedOrHasValue.value ? 12 : 16, {
          duration: theme.animation.duration,
        }),
        lineHeight: withTiming(isFocusedOrHasValue.value ? 12 : 16, {
          duration: theme.animation.duration,
        }),
        color: withTiming(
          isFocused.value ? theme.colors.primary : theme.colors.typography,
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
          textInputContainerStyle,
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
                fontFamily: theme.fontFamily.IBMPlexSans_400Regular,
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
            allowFontScaling={true}
            ref={innerRef}
            editable={!disabled}
            readOnly={disabled}
            inputMode="text"
            dataDetectorTypes="none"
            keyboardType="default"
            {...props}
            autoCapitalize={"none"}
            autoComplete="off"
            cursorColor={theme.colors.primary}
            onBlur={handleBlur}
            onFocus={handleFocus}
            placeholderTextColor={theme.colors.typography}
            selectionColor={theme.colors.primary}
            spellCheck={false}
            style={[
              // @ts-ignore TODO: fix this
              styles.textInput({
                hasLeftIcon: left !== null,
                hasRightIcon: right !== null,
              }),
              focusedStyleTextInput,
            ]}
            value={value}
            textAlign="left"
            textContentType="none"
            onChangeText={setInternalValue}
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
      borderColor: "lightgrey",
      borderRadius: 5,
      borderWidth: 2,
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
        fontFamily: theme.fontFamily.IBMPlexSans_400Regular,
        fontWeight: "400",
        fontSize: 16,
        paddingLeft: hasLeftIcon ? 0 : 10,
        paddingRight: hasRightIcon ? 0 : 10,
        paddingVertical: 10,
      };
    },
  };
});
