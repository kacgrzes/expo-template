import { StatusBar } from "expo-status-bar";
import { StrictMode } from "react";
import { StyleSheet, Text, View } from "react-native";

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
