import { Tile as TileComponent } from "./Tile";
import { TileGroup } from "./TileGroup";
export * from "./Tile.types";

export const Tile = TileComponent as typeof TileComponent & {
  Group: typeof TileGroup;
};
Tile.Group = TileGroup;
