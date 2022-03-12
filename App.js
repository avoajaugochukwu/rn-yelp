import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Header from "./src/components/Header";
import SearchBar from "./src/components/SearchBar";
import Categories from "./src/components/Categories";
import Restaurants from "./src/components/Restaurants";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Burger");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <SearchBar setActiveCategory={setActiveCategory} />
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Restaurants activeCategory={activeCategory} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
