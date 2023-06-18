import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Produk from "./Produk";
import TambahProduk from "./TambahProduk";
import Diskon from "./Diskon";
import UbahProduk from "./UbahProduk";
import DaftarUlasan from "./DaftarUlasan";

const Stack = createNativeStackNavigator();

const ProdukGateway = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Produk"
        component={Produk}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Tambah Produk" component={TambahProduk} />
      <Stack.Screen name="Ubah Produk" component={UbahProduk} />
      <Stack.Screen name="Ulasan" component={DaftarUlasan} />
      <Stack.Screen name="Beri Diskon" component={Diskon} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ProdukGateway;
