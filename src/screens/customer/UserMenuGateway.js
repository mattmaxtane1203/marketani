import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home/Home";
import WishlistScreen from "./wishlist/WishlistGateway";
import TransactionScreen from "./transaction/TransactionGateway";
import LoginScreen from "../prelogin/PreloginGateway";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "../prelogin/PreloginGateway";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Screens names
const homeName = "Home";
const wishlistName = "Wishlist";
const cartName = "Cart";
const TransactionName = "Transaction";
const profileName = "Profile";
const navColor = "#FFFFFF";

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

// const NavBar = () => {
//     return (
//         <Tab.Navigator
//             initialRouteName={homeName}
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused, color, size }) => {
//                     let iconName;
//                     let rn = route.name;

//                     if (rn === homeName) {
//                         iconName = focused ? 'home' : 'home-outline'
//                     } else if (rn === detailsName) {
//                         iconName = focused ? 'list' : 'list-outline'
//                     } else if (rn === settingsName) {
//                         iconName = focused ? 'transaction' : 'transaction-outline'
//                     }

//                     return <Ionicons name={iconName} size={size} color={color}/>
//                 },
//             })}
//         >
//             <Tab.Screen name={homeName} component={HomeScreen}/>

//         </Tab.Navigator>
//     )
// }

const UserMenuGateway = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      inactiveColor="#7B7B7C"
      barStyle={{ backgroundColor: "#ffff", marginBottom: -25 }}
      // labelStyle={{ fontSize: 12 }}
      activeColor="#46B244"
    >
      <Tab.Screen
        name={homeName}
        component={HomeScreen}
        options={{
          // tabBarIcon: ({ focused }) => (
          //     <View>
          //         <MaterialCommunityIcons
          //             name="home"
          //             color={'#7B7B7C'}
          //             size={26}
          //             resizeMode="contain"
          //             style={{
          //                 width: 25,
          //                 height: 25,
          //                 tintColor: focused ? "#46B244" : "#7B7B7C",
          //             }}
          //         />
          //     </View>
          // )

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name={wishlistName}
        component={WishlistScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite" size={23} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={TransactionName}
        component={TransactionScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper-sharp" size={23} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={profileName}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={23} />
          ),
        }}
      />
    </Tab.Navigator>
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
