import { useState } from "react";
import { FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

const categories = [
  { name: "Burger", src: require("../assets/images/burger.png") },
  { name: "Pizza", src: require("../assets/images/pizza.png") },
  { name: "Pasta", src: require("../assets/images/pasta.png") },
  { name: "Smoothies", src: require("../assets/images/smoothies.png") },
  { name: "Steak", src: require("../assets/images/steak.png") },
  { name: "Cake", src: require("../assets/images/cake.png") },
];

export default function Categories({ activeCategory, setActiveCategory}) {
  
  return (
    <FlatList
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <CategoryItem
              key={index}
              category={item}
              active={activeCategory === item.name}
              handlePress={() => setActiveCategory(item.name)}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
  )
}
