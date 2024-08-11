import { Status } from "../types";

export type BadgeStatus = "default" | Omit<Status, "secondary">;

export type BadgeProps = {
  /** Value in the badge. Badge will be a dot if this is not provided/ */
  label?: number | string;
  max?: number;
  outline?: boolean;
  status?: BadgeStatus;
};
