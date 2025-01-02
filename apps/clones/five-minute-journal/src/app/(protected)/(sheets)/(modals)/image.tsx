import { Screen } from "@mobile/components";
import Animated from "react-native-reanimated";

export default function ImageExample() {
  return (
    <Screen>
      <Screen.ScrollView>
        <Animated.View
          sharedTransitionTag="red"
          style={{
            width: "40%",
            aspectRatio: 1,
            backgroundColor: "red",
            borderRadius: 0,
          }}
        />
      </Screen.ScrollView>
    </Screen>
  );
}
