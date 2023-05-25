import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TokoSaya from "./TokoSaya";
import ProdukGateway from "./product/ProdukGateway";
import Pesanan from "./Pesanan";
import PusatBantuan from "./PusatBantuan";
import UlasanGateway from "./ulasan/UlasanGateway";
import ChatGateway from "./ChatGateway";

// TODO: Fix navigation into subsequent pages

const Tab = createBottomTabNavigator();

const SellerMainMenu = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Toko Saya"
        component={TokoSaya}
        options={{ tabBarStyle: { display: "none" } }}
      />
      <Tab.Screen
        name="Produk"
        component={ProdukGateway}
        options={{ headerShown: false, tabBarStyle: { display: "none" } }}
      />
      <Tab.Screen
        name="Ulasan"
        component={UlasanGateway}
        options={{ headerShown: false, tabBarStyle: { display: "none" } }}
      />
      <Tab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{ headerShown: false, tabBarStyle: { display: "none" } }}
      />
      <Tab.Screen
        name="Pusat Bantuan"
        component={PusatBantuan}
        options={{ headerShown: false, tabBarStyle: { display: "none" } }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatGateway}
        options={{ headerShown: false, tabBarStyle: { display: "none" } }}
      />
    </Tab.Navigator>
  );
};

export default SellerMainMenu;
