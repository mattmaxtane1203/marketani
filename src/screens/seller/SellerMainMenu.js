import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TokoSaya from "./TokoSaya";
import ProdukGateway from "./product/ProdukGateway";
import PusatBantuanGateway from "./pusatbantuan/PusatBantuanGateway";
import ChatGateway from "./chat/ChatGateway";
import Icon from "react-native-vector-icons/FontAwesome5";
import PesananGateway from "./pesanan/PesananGateway";
import PreloginGateway from "../prelogin/PreloginGateway";

// TODO: Fix navigation into subsequent pages
// TODO: Remove Pusat Bantuan and Ulasan and move to respective pages
// TODO: Put Toko Saya on most-right of the tab but make directories enter to this page first
// TODO: Remove headers of each page
// ! TODO: Fix logout mechanism

const Tab = createBottomTabNavigator();

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const iconSize = screenWidth * 0.05;

const SellerMainMenu = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#46B244" }}>
      <Tab.Screen
        name="Toko Saya"
        component={TokoSaya}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="store-alt" size={iconSize} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Produk"
        component={ProdukGateway}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-basket" size={iconSize} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Pesanan"
        component={PesananGateway}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="file-invoice" size={iconSize} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatGateway}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="comments" size={iconSize} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default SellerMainMenu;
