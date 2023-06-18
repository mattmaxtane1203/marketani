import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchResult from "./SearchResult";
import ProductInfo from "./ProductInfo";
import ChatSeller from "./ChatSeller";
import CartProvider from "../../../contexts/CartContext";

const Stack = createNativeStackNavigator();

const SearchResultGateway = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search Result" component={SearchResult} />
      <Stack.Screen name="Product Information">
        {(props) => (
          <CartProvider>
            <ProductInfo {...props} />
          </CartProvider>
        )}
      </Stack.Screen>
      <Stack.Screen name="Chat Seller" component={ChatSeller} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default SearchResultGateway;
