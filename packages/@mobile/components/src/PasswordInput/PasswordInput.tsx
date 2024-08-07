import { useToggle } from "@common/hooks";
import { isAndroid } from "@mobile/utils";
import { Eye, EyeOff } from "lucide-react-native";
import { forwardRef, useMemo } from "react";
import { Pressable } from "react-native";
import { useStyles } from "react-native-unistyles";
import { TextInput, TextInputProps, TextInputRef } from "../TextInput";

const passwordRules =
  "required: upper;require: lower; required: digit; minLength: 8;";

export type PasswordInputProps = TextInputProps;

// TODO: there's a difference between new password and current password

/**
 * # PasswordInput
 *
 * @component
 *
 * @description A component that was generated by Plop
 *
 * @example
 *
 * ```tsx
 * <PasswordInput />
 * ```
 */
export const PasswordInput = forwardRef<TextInputRef, PasswordInputProps>(
  (props, ref) => {
    const { theme } = useStyles();
    const [secureTextEntry, toggleSecureTextEntry] = useToggle(true);
    const Icon = secureTextEntry ? Eye : EyeOff;
    const keyboardType = useMemo(() => {
      return isAndroid && !secureTextEntry ? "visible-password" : "default";
    }, [secureTextEntry]);

    return (
      <TextInput
        ref={ref}
        {...props}
        right={
          <Pressable
            accessibilityRole="button"
            // TODO: move these styles outside
            style={{
              height: "100%",
              aspectRatio: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={toggleSecureTextEntry}
          >
            <Icon color={theme.colors.typography} size={24} />
          </Pressable>
        }
        autoCapitalize={"none"}
        autoComplete={"current-password"}
        autoCorrect={false}
        keyboardType={keyboardType}
        passwordRules={passwordRules}
        secureTextEntry={secureTextEntry}
        spellCheck={false}
        textContentType="password"
      />
    );
  },
);
