import React, { useMemo, useState } from "react";
import { Button, View } from "react-native";
import Animated, {
  FadeInLeft,
  FadeOutLeft,
  LinearTransition,
} from "react-native-reanimated";

export const Example = () => {
  const [value, setValue] = useState(100);
  const characters = useMemo(() => {
    return String(value);
  }, [value]);
  const positions = useMemo(() => {
    const length = characters.length;
    return Array.from({ length })
      .map((_, index) => index)
      .reverse();
  }, [characters.length]);

  return (
    <View>
      <Animated.View style={{ flexDirection: "row" }}>
        {positions.map((position, index) => {
          return (
            <Animated.Text
              style={{ fontSize: 50 }}
              key={position}
              entering={FadeInLeft.duration(300)}
              exiting={FadeOutLeft.duration(300)}
              layout={LinearTransition.duration(300)}
            >
              {characters[index]}
            </Animated.Text>
          );
        })}
      </Animated.View>
      <Button title="+1" onPress={() => setValue((p) => p + 1)} />
      <Button title="-1" onPress={() => setValue((p) => p - 1)} />
    </View>
  );
};
