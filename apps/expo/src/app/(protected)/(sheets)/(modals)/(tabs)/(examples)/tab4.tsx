import { Screen } from "@mobile/components";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const App = () => {
  const list = [...Array(4).keys()].map((m) => m);
  const item = (i: number) => {
    return (
      <View key={i} style={styles.item}>
        <Text style={styles.item_text}>{i}</Text>
      </View>
    );
  };
  return (
    <Screen>
      <ScrollView stickyHeaderIndices={[1]} style={styles.scrollView}>
        <View style={styles.block} />
        <View style={styles.header}>
          <TextInput placeholder="Search" style={styles.search_input} />
        </View>
        {list.length !== 0 &&
          list.map((m) => {
            return item(m);
          })}
      </ScrollView>
    </Screen>
  );
};

export default App;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "white",
  },
  block: {
    height: 200,
    marginBottom: 10,
    backgroundColor: "tan",
  },
  header: {
    padding: 10,
    backgroundColor: "white",
  },
  search_input: {
    padding: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 50,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    padding: 10,
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    borderColor: "white",
    backgroundColor: "lavender",
  },
  item_text: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
  },
});
