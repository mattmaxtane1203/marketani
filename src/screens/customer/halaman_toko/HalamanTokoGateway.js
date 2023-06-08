import { SafeAreaView, KeyboardAvoidingView, Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HalamanToko from "./HalamanToko";

const Stack = createNativeStackNavigator();

const HalamanTokoGateway = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Halaman Toko" component={HalamanToko}/>
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
  
})

export default HalamanTokoGateway