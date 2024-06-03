import { TextInput, TextInputProps } from "../TextInput";
import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";
import { Pressable } from "react-native";

type PasswordInputProps = TextInputProps;

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
export function PasswordInput(props: PasswordInputProps) {
  // TODO: create useToggle component and use it here.
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <TextInput
      right={
        <Pressable
          // TODO: move these styles outside
          style={{
            height: 39,
            aspectRatio: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSecureTextEntry(!secureTextEntry);
          }}>
          {secureTextEntry ? <Eye size={24} /> : <EyeOff size={24} />}
        </Pressable>
      }
      {...props}
      secureTextEntry={secureTextEntry}
    />
  );
}
