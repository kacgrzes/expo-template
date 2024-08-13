import { ImageProps } from "../Image";
import { Size } from "../types";

export type AvatarProps = {
  /**
   * Size of the avatar
   * - "s" - Small - bottom tab bars, navigation, etc.
   * - "m" - Medium - list or content blocks
   * - "l" - Large - within profile or settings screen
   */
  size?: Size;
  loading?: boolean;
} & Pick<ImageProps, "source">;

export { Size };