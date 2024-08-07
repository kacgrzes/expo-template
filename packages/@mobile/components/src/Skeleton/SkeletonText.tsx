import { Box, BoxProps } from "@grapp/stacks";
import React from "react";
import { View } from "react-native";
import { AnimatedText, Text, TextProps, useTextVariantStyle } from "../Text";
import { Skeleton } from "./Skeleton";
import { useSkeletonAnimation } from "./SkeletonContext";

export type PlaceholderTextProps = Pick<
  TextProps,
  "variant" | "numberOfLines" | "textAlign" | "children" | "status"
>;

// TODO: move to some utils
const shouldTrim = (lineIndex: number, numberOfLines?: number) => {
  if (typeof numberOfLines === "number") {
    const isLast = numberOfLines - 1 === lineIndex;
    return numberOfLines > 1 && isLast;
  }

  return false;
};

// TODO: move to some utils
const textAlignToFlexJustify = (
  textAlign: TextProps["textAlign"],
): BoxProps["alignX"] => {
  if (textAlign === "center") {
    return "center";
  } else if (textAlign === "left") {
    return "left";
  } else if (textAlign === "right") {
    return "right";
  } else if (textAlign === "justify") {
    return "between";
  } else if (textAlign === "auto") {
    return undefined;
  }
};

export const SkeletonText = (props: PlaceholderTextProps) => {
  const animatedStyles = useSkeletonAnimation();
  const { variant, numberOfLines, textAlign, children } = props;
  const textVariantStyle = useTextVariantStyle(variant);
  const { fontSize, lineHeight } = textVariantStyle;

  if (typeof children === "string") {
    const words = children.split(" ");
    const lastWordIndex = words.length - 1;
    const maxHeight =
      numberOfLines && lineHeight ? numberOfLines * lineHeight : undefined;

    return (
      <Box
        direction="row"
        wrap={"wrap"}
        style={{
          maxHeight,
          overflow: "hidden",
        }}
        alignX={textAlignToFlexJustify(textAlign)}
      >
        {words.map((word, index) => (
          <Box
            alignY="center"
            direction="row"
            height={lineHeight}
            key={`word-${index}`}
          >
            <AnimatedText
              {...props}
              style={[
                {
                  color: "transparent",
                  flexShrink: 1,
                  height: fontSize,
                  backgroundColor: "#E1E9EE",
                  overflow: "hidden",
                  borderRadius: 4,
                },
                animatedStyles,
              ]}
            >
              {word}
            </AnimatedText>

            {index !== lastWordIndex ? (
              <Text style={{ height: fontSize }}> </Text>
            ) : null}
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <View>
      {new Array(numberOfLines).fill(null).map((_, index) => {
        return (
          <Box
            direction={"row"}
            alignY={"center"}
            height={lineHeight}
            alignX={textAlignToFlexJustify(textAlign)}
            key={`line-${index}`}
          >
            <Skeleton
              width={shouldTrim(index, numberOfLines) ? "50%" : "100%"}
              height={fontSize}
            />
          </Box>
        );
      })}
    </View>
  );
};
