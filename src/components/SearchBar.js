import { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../common/styles";

export default function SearchBar({setActiveCategory}) {
  const [input, setInput] = useState("");

  const handleEndEditing = () => {
    if(!input) return
    setActiveCategory(input)
    setInput("")
  }

  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={25} />
      <TextInput
        style={styles.input}
        placeholder="Restaurants, food"
        onChangeText={(text) => {
          setInput(text);
        }}
        onEndEditing={handleEndEditing}
        value={input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    ...elevation,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});
