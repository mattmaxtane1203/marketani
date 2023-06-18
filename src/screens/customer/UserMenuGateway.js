import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home/Home";
import WishlistGateway from "./wishlist/WishlistGateway";
import TransactionGateway from "./transaction/TransactionGateway";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Profile from "./profile/Profile";
import ChatGateway from "../seller/chat/ChatGateway";
import HomeGateway from "./home/HomeGateway";
import PreloginGateway from "../prelogin/PreloginGateway";
import CartGateway from "./cart/CartGateway";
import CartPage from "./cart/CartPage";
import CartProvider from "../../contexts/CartContext";

const Tab = createBottomTabNavigator();

const UserMenuGateway = () => {
  return (
    <CartProvider>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarActiveTintColor: "#46B244" }}
        barStyle={{ backgroundColor: "#ffff", marginBottom: -25 }}
      >
        <Tab.Screen
          name="Home"
          component={HomeGateway}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={23} />
            ),
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={WishlistGateway}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="favorite" size={23} color={color} />
            ),
          }}
        />
        <Tab.Screen
        name="Cart"
        component={CartPage}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" size={23} color={color} />
          ),
        }}
      />
        <Tab.Screen
          name="Transactions"
          component={TransactionGateway}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="newspaper-sharp" size={23} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={23} />
            ),
          }}
        />
      </Tab.Navigator>
    </CartProvider>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabNav: {
    position: "absolute",
    bottom: 100,
    left: 200,
    right: 50,
    elevation: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    height: 90,
  },
});

export default UserMenuGateway;
