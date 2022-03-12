import { useState } from "react";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Burger");
  return (
    <HomeScreen
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
    />
  );
}


