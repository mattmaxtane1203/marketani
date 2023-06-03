import { SafeAreaView, KeyboardAvoidingView, Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchResult from "./SearchResult";
import ProductInfo from "./ProductInfo";
import ChatSeller from "./ChatSeller";
import ProductInfoCart from "./ProductInfoCart";

const Stack = createNativeStackNavigator();

const SearchResultGateway = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Search Result" component={SearchResult} />
        <Stack.Screen name="Product Information" component={ProductInfo}/>
        {/* <Stack.Screen name="Product Information Cart" component={ProductInfoCart}/> */}
        <Stack.Screen name="Chat Seller" component={ChatSeller}/>
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
  
})

export default SearchResultGateway