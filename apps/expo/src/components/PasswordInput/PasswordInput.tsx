import { useToggle } from "@common/hooks";
import { Eye, EyeOff } from "lucide-react-native";
import { Pressable } from "react-native";
import { TextInput, TextInputProps } from "../TextInput";

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
  const [secureTextEntry, toggleSecureTextEntry] = useToggle(true);

  return (
    <TextInput
      right={
        <Pressable
          accessibilityRole="button"
          // TODO: move these styles outside
          style={{
            height: 39,
            aspectRatio: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={toggleSecureTextEntry}
        >
          {secureTextEntry ? <Eye size={24} /> : <EyeOff size={24} />}
        </Pressable>
      }
      {...props}
      secureTextEntry={secureTextEntry}
    />
  );
}
