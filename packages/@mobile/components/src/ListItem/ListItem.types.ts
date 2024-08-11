import { LucideIcon } from "lucide-react-native";
import { CommonAccessoryProps } from "../types";

export type ListItemProps = {
  details?: string;
  icon?: LucideIcon;
  onPress: () => void;
  title: string;
} & CommonAccessoryProps;
