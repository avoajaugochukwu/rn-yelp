import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useRestaurant from "../hooks/useRestaurant";

function RestaurantScreen({ navigation }) {
  const id = navigation.getParam("id");
  const [{ data, loading, error }, searchRestaurant] = useRestaurant();

  useEffect(() => {
    searchRestaurant(id);
  }, []);

  console.log(data.length, loading, error)

  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = dimensions.width;

  if (loading)
    return (
      <View>
        <Text>Inside loading</Text>
      </View>
    );

  if (error)
    return (
      <View>
        <Text>Inside error</Text>
      </View>
    );

  return (
    <View>
      {/* {results.data && (
        <FlatList
          data={results.data.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            console.log({ item });
            return (
              <Image
                style={{ height: imageHeight, width: imageWidth }}
                source={{ uri: item }}
              />
            );
          }}
        />
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default RestaurantScreen;