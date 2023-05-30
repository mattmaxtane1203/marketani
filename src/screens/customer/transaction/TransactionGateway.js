import { SafeAreaView, KeyboardAvoidingView, Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionPage from "./TransactionPage";
import DetailPesananSelesai from "./DetailPesananSelesai";
import DetailPesananOTW from "./DetailPesananOTW";


const Stack = createNativeStackNavigator();

const TransactionGateway = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Transaction" component={TransactionPage} />
      <Stack.Screen name="Detail Pesanan Selesai" component={DetailPesananSelesai} />
      <Stack.Screen name="Detail Pesanan Dalam Pengiriman" component={DetailPesananOTW} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

})

export default TransactionGateway