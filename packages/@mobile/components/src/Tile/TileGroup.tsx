import React from "react";
import { Group } from "../Group";
import { Tile } from "./Tile";
import { TileGroupProps } from "./Tile.types";

export const TileGroup = ({
  children,
  gap = 2,
  // size,
  // disabled,
  orientation = "horizontal",
}: TileGroupProps) => {
  return (
    <Group orientation={orientation} gap={gap} validTypes={[Tile]}>
      {children}
    </Group>
  );
};
