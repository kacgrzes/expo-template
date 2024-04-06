import { StatusBar } from "expo-status-bar";
import { StrictMode } from "react";
import { ScrollView, Text } from "react-native";
import {
  UnistylesRuntime,
  createStyleSheet,
  useStyles,
} from "react-native-unistyles";

function App() {
  const { styles } = useStyles(stylesheet);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>
        <Text>Open up App.js to start working on your app!</Text>
      </Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

function Root({ children }) {
  return <>{children}</>;
}

export default function () {
  return (
    <StrictMode>
      <Root>
        <App />
      </Root>
    </StrictMode>
  );
}

const stylesheet = createStyleSheet((theme) => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: theme.colors.typography,
    },
  };
});
