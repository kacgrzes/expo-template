import { BoxProps } from "@grapp/stacks";
import { LucideIcon } from "lucide-react-native";
import { ReactNode } from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { GroupProps } from "../Group";
import { CommonAccessoryProps, CommonFormProps, Size, Status } from "../types";

export type ButtonVariant = "solid" | "outline" | "link" | "apple" | "google";

export type ButtonProps = CommonFormProps &
  CommonAccessoryProps & {
    full?: boolean;
    loading?: boolean;
    progress?: boolean;
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

export type ButtonGroupProps = Pick<BoxProps, "gap"> &
  Pick<ButtonProps, "disabled" | "size"> & {
    children?: ReactNode;
  } & Pick<GroupProps, "orientation">;

export type ButtonProgressProps = {
  duration?: number;
  variant?: ButtonVariant;
  onCompleted?: () => void;
};

export type AppleAuthenticationButtonProps = Pick<ButtonProps, "full">;

export type GoogleAuthenticationButtonProps = Pick<ButtonProps, "full">;
