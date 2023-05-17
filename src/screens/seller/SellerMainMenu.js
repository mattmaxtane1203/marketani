import { SafeAreaView, KeyboardAvoidingView, Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TokoSaya from "./TokoSaya";
import Produk from "./Produk";
import Ulasan from "./Ulasan";
import Pesanan from "./Pesanan";
import PusatBantuan from "./PusatBantuan";
import Chat from "./Chat";

const Tab = createBottomTabNavigator();

const SellerMainMenu = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Toko Saya" component={TokoSaya} options={{tabBarStyle: {display: "none"}}}/>
                <Tab.Screen name="Produk" component={Produk} options={{headerShown: false, tabBarStyle: {display: "none"}}}/>
                <Tab.Screen name="Ulasan" component={Ulasan} options={{headerShown: false, tabBarStyle: {display: "none"}}}/>
                <Tab.Screen name="Pesanan" component={Pesanan} options={{headerShown: false, tabBarStyle: {display: "none"}}}/>
                <Tab.Screen name="Pusat Bantuan" component={PusatBantuan} options={{headerShown: false, tabBarStyle: {display: "none"}}}/>
                <Tab.Screen name="Chat" component={Chat} options={{headerShown: false, tabBarStyle: {display: "none"}}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default SellerMainMenu 