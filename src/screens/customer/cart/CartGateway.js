import { SafeAreaView, KeyboardAvoidingView, Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartPage from "./CartPage";


const Stack = createNativeStackNavigator();

const CartGateway = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cart" component={CartPage}/>
        </Stack.Navigator>
    );
}

export default CartGateway;