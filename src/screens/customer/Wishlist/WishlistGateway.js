import { SafeAreaView, KeyboardAvoidingView, Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Wishlist from "./Wishlist";
import TambahProduk from "../../seller/product/TambahProduk";
import Produk from "../../seller/product/Produk";


const Stack = createNativeStackNavigator();

const WishlistGateway = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Wishlist" component={Wishlist} />
        <Stack.Screen name="Produk" component={Produk} />
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
  
})

export default WishlistGateway