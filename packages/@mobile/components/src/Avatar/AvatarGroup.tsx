import React from "react";
import { Group } from "../Group";
import { Avatar } from "./Avatar";
import { AvatarGroupProps } from "./Avatar.types";

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  size,
  orientation = "horizontal",
  overlap = 0,
  ...groupProps
}) => {
  return (
    <Group
      orientation={orientation}
      gap={0}
      validTypes={[Avatar]}
      {...groupProps}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            size: size || child.props.size,
            style: {
              marginLeft: -overlap,
              zIndex: index,
            },
          });
        }
      })}
    </Group>
  );
};
