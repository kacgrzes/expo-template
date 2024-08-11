import { LucideIcon } from "lucide-react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { CommonAccessoryProps, CommonFormProps, Size, Status } from "../types";

export type ButtonVariant = "solid" | "outline" | "link" | "apple" | "google";

export type ButtonProps = CommonFormProps &
  CommonAccessoryProps & {
    full?: boolean;
    loading?: boolean;
    size?: Size;
    status?: Status;
    variant?: ButtonVariant;
  } & Pick<RectButtonProps, "onPress" | "onLongPress" | "testID" | "style"> &
  (
    | {
        title: string;
        icon?: undefined;
      }
    | {
        title?: undefined;
        icon: LucideIcon;
      }
  );

export type AppleAuthenticationButtonProps = Pick<ButtonProps, "full">;

export type GoogleAuthenticationButtonProps = Pick<ButtonProps, "full">;
