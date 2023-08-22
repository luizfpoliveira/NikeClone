import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ProductsScreens from "./src/screens/ProductsScreens";

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsScreens />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
