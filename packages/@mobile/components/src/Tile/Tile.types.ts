import { BoxProps } from "@grapp/stacks";
import { ReactNode } from "react";
import { BadgeProps } from "../Badge";
import { GroupProps } from "../Group";

export type TileProps = {
  selected?: boolean;
  disabled?: boolean;
  children?:
    | ReactNode
    | ((props: { selected: boolean; disabled: boolean }) => ReactNode);
};

export type TileGroupProps = BoxProps &
  TileProps &
  Pick<GroupProps, "orientation">;

export type TileBadgeProps = BadgeProps;
