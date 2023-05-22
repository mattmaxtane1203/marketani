import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Login";
import Register from "./Register";
import Home from "../customer/Home/Home";

// TODO: Add a cookie to detect if there is already an account (Check if it's a customer or a seller)

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function PreloginGateway() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false, tabBarStyle: { display: "none" } }}
        />
        <Tab.Screen
          name="User Home"
          component={Home}
          options={{ headerShown: false, tabBarStyle: { display: "none" } }}
        ></Tab.Screen>
      </Tab.Navigator>
    );
}