import { SafeAreaView, KeyboardAvoidingView, Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HalamanToko_Product from "./HalamanToko_Produk";
import HalamanToko_Ulasan from "./HalamanToko_Ulasan";

const Stack = createNativeStackNavigator();

const HalamanTokoGateway = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Halaman Toko Produk" component={HalamanToko_Product}/>
        <Stack.Screen name="Halaman Toko Ulasan" component={HalamanToko_Ulasan}/>
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
  
})

export default HalamanTokoGateway