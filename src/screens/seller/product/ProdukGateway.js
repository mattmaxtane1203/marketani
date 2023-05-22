import { SafeAreaView, KeyboardAvoidingView, Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Produk from "./Produk";
import TambahProduk from "./TambahProduk";
import Diskon from "./Diskon";

const Stack = createNativeStackNavigator();

const ProdukGateway = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Produk" component={Produk} />
        <Stack.Screen name="Tambah Produk" component={TambahProduk} />
        <Stack.Screen name="Beri Diskon" component={Diskon} />
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
  
})

export default ProdukGateway