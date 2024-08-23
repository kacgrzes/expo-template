import { ImageProps } from "../Image";

export type AppIconContext = "home-screen-icon" | "notification";

export interface AppIconProps extends Pick<ImageProps, "source"> {
  context?: AppIconContext;
}
