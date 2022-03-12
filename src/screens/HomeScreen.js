import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Restaurants from "../components/Restaurants";
import SearchBar from "../components/SearchBar";

export default function HomeScreen({ activeCategory, setActiveCategory }) {
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