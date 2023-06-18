import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import ChatGateway from "../../seller/chat/ChatGateway";
import ProductInfo from "../search_result/ProductInfo";

const Stack = createNativeStackNavigator();

const HomeGateway = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={ChatGateway} />
      <Stack.Screen name="Produk" component={ProductInfo} />
    </Stack.Navigator>
  );
};

export default HomeGateway;
