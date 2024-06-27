import { Search, X } from "lucide-react-native";
import { useCallback, useState } from "react";
import { Pressable } from "react-native";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
import { useStyles } from "react-native-unistyles";
import { TextInput, TextInputProps, useTextInputRef } from "../TextInput";

type SearchBarProps = TextInputProps;

/**
 * # SearchBar
 *
 * @component
 *
 * @description A component that was generated by Plop
 *
 * @example
 *
 * ```tsx
 * <SearchBar />
 * ```
 */
export function SearchBar({ onChangeText, ...props }: SearchBarProps) {
  const { theme } = useStyles();
  const [value, setValue] = useState("");
  const textInputRef = useTextInputRef();

  const handleChangeText = useCallback(
    (text: string) => {
      setValue(text);
      onChangeText?.(text);
    },
    [onChangeText],
  );

  const handleClear = useCallback(() => {
    setValue("");
  }, []);

  return (
    <TextInput
      ref={textInputRef}
      {...props}
      left={
        <Pressable
          accessibilityRole="search"
          onPress={() => textInputRef.current?.focus()}
        >
          <Animated.View
            style={{
              alignItems: "center",
              aspectRatio: 1,
              height: 39,
              justifyContent: "center",
            }}
          >
            <Search size={24} />
          </Animated.View>
        </Pressable>
      }
      value={value}
      onChangeText={handleChangeText}
      right={
        value !== "" ? (
          <Animated.View
            entering={ZoomIn.duration(theme.animation.duration)}
            exiting={ZoomOut.duration(theme.animation.duration)}
            style={{
              alignItems: "center",
              aspectRatio: 1,
              height: 39,
              justifyContent: "center",
            }}
          >
            <Pressable
              accessibilityRole="button"
              onPress={handleClear}
              style={{
                width: 24,
                height: 24,
                borderRadius: 24,
                backgroundColor: "lightgrey",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <X size={14} />
            </Pressable>
          </Animated.View>
        ) : null
      }
    />
  );
}
