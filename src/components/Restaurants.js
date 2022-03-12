import { View, Text, StyleSheet } from "react-native";
import useRestaurants from "../hooks/useRestaurants";

export default function Restaurants() {

  const [{data, loading, error}, searchRestaurants] = useRestaurants()

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurants</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    // flex: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});

// api.yelp.com/v3

// fuefE5XzFBOYQrWACxEa1NzsOuUyCd9iKXGlotUC-9H4l5WHkveHLsd5yk60F7KGX1Mj9hKZ4M7eZYlMg0UfxdtYpTexTmCHPvGlCfPtKbHgThE90LtoQYyRfIMbYnYx
