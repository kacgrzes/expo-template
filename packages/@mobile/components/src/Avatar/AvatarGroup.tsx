import React from "react";
import { Group } from "../Group";
import { Avatar } from "./Avatar";
import { AvatarGroupProps, AvatarProps } from "./Avatar.types";

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  size,
  orientation = "horizontal",
  overlap = 0,
  reverse = false,
  ...groupProps
}) => {
  return (
    <Group
      orientation={orientation}
      gap={0}
      validTypes={[Avatar]}
      {...groupProps}
      style={{
        zIndex: 0,
      }}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<AvatarProps>(child)) {
          return React.cloneElement<AvatarProps>(child, {
            size: size || child.props.size,
            style: {
              marginLeft:
                orientation === "horizontal" && index !== 0
                  ? -overlap
                  : undefined,
              marginTop:
                orientation === "vertical" && index !== 0
                  ? -overlap
                  : undefined,
              zIndex: index * (reverse ? -1 : 1),
            },
          });
        }
      })}
    </Group>
  );
};
