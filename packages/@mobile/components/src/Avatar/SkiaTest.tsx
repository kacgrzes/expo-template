import { Box } from "@grapp/stacks";
import {
  Canvas,
  Circle,
  Group,
  Image,
  Mask,
  useImage,
} from "@shopify/react-native-skia";
import React, { ReactNode } from "react";

export const ImageWithHole = ({ children }: { children?: ReactNode }) => {
  const image = useImage(
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  );

  const size = 64;

  if (!image) {
    return null;
  }

  return (
    <Box width={size} height={size}>
      <Canvas style={{ width: size, height: size }}>
        <Mask
          mode="luminance"
          mask={
            <Group>
              <Circle cx={size / 2} cy={size / 2} r={size / 2} color="white" />
              <Circle
                cx={size / 2 + size / 3}
                cy={size / 2 + size / 3}
                r={size / 5}
                color="black"
              />
              {/* <Circle
                cx={size / 2 - size / 3}
                cy={size / 2 - size / 3}
                r={size / 5}
                color="black"
              />
              <Circle
                cx={size / 2 - size / 3}
                cy={size / 2 + size / 3}
                r={size / 5}
                color="black"
              />
              <Circle
                cx={size / 2 + size / 3}
                cy={size / 2 - size / 3}
                r={size / 5}
                color="black"
              /> */}
            </Group>
          }
        >
          <Image
            image={image}
            x={0}
            y={0}
            width={size}
            height={size}
            fit="cover"
          />
        </Mask>
      </Canvas>
      {children}
    </Box>
  );
};
