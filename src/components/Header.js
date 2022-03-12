import { Text, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.lightheader}>Grab you</Text>
      <Text style={styles.boldHeader}>delicious meal!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  lightheader: {
    fontSize: 35,
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
