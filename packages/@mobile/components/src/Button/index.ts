import { Button as ButtonComponent } from "./Button";
import { ButtonGroup } from "./ButtonGroup";

export * from "./AppleAuthenticationButton";
export * from "./GoogleAuthenticationButton";
export * from "./Button.types";

const Button = ButtonComponent;
Button.Group = ButtonGroup;

export { Button };
