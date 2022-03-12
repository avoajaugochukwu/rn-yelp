// import { useState } from "react";
// import HomeScreen from "./src/screens/HomeScreen";

// export default function App() {
//   const [activeCategory, setActiveCategory] = useState("Burger");
//   return (
//     <HomeScreen
//       activeCategory={activeCategory}
//       setActiveCategory={setActiveCategory}
//     />
//   );
// }

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Restaurant: RestaurantScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Yelp Restaurant Search",
    },
  }
);

export default createAppContainer(navigator);
