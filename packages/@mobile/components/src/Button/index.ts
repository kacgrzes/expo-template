import { Button as ButtonComponent } from "./Button";
import { ButtonGroup } from "./ButtonGroup";

export * from "./AppleAuthenticationButton";
export * from "./GoogleAuthenticationButton";
export * from "./Button.types";

export const Button = ButtonComponent as typeof ButtonComponent & {
  Group: typeof ButtonGroup;
};
Button.Group = ButtonGroup;
