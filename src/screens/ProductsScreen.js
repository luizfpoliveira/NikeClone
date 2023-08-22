import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../store/productsSlice";

function ProductsScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const products = useSelector((state) => state.products.products);
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            // Update Selected Product
            dispatch(productsSlice.actions.setSelectedProduct(item.id));
            navigation.navigate("Products Details");
          }}
          style={styles.itemConteiner}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  ); 
}

const styles = StyleSheet.create({
  itemConteiner: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductsScreen;
