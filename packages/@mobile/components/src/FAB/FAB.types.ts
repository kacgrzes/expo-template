import { LucideIcon } from "lucide-react-native";
import { PressableProps } from "../Pressable";

export type FABProps = PressableProps & {
  Icon?: LucideIcon;
  extended?: boolean;
  label?: string;
};
