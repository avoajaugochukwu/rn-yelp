import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { elevation } from "../common/styles";

export default function CategoryItem({ category: { name, src }, active, handlePress }) {
  
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[styles.container, active ? styles.active : styles.notActive]}
      >
        <View style={styles.imageContainer}>
          <Image source={src} style={styles.image} />
        </View>

        <Text style={styles.header}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 25,
    ...elevation,
  },
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginBottom: 10,
  },
  header: { fontWeight: "bold" },
  active: { backgroundColor: "rgb(241,186,87)" },
  notActive: { backgroundColor: "#fff" },
});
