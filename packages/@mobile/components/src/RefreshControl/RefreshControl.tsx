import {
  RefreshControl as RefreshControlComponent,
  RefreshControlProps as RefreshControlComponentProps,
} from "react-native";
import { useStyles } from "react-native-unistyles";

type RefreshControlProps = Pick<
  RefreshControlComponentProps,
  "refreshing" | "onRefresh"
>;

export function RefreshControl(props: RefreshControlProps) {
  const { theme } = useStyles();

  return (
    <RefreshControlComponent
      colors={[theme.colors.background]}
      progressBackgroundColor={theme.colors.typography}
      tintColor={theme.colors.primary}
      {...props}
    />
  );
}
