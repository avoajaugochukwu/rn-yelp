import { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantItem from "./RestaurantItem";

export default function Restaurants({ activeCategory }) {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();

  useEffect(() => {
    searchRestaurants(activeCategory);
  }, [activeCategory]);

  if (loading) return <ActivityIndicator size="large" marginVertical={30} />;
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Something went wrong</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurants</Text>

      <FlatList
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Restaurant", { id: item.id })}
          >
            <RestaurantItem restaurant={item} />
          </TouchableOpacity>
        )}
      />
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
