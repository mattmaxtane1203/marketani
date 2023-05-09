import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Login";
import Register from "./Register";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Prelogin() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} options={{headerShown: false, tabBarStyle: {display: "none"}}} />
                <Tab.Screen name="Register" component={Register} options={{headerShown: false, tabBarStyle: {display: "none"}}} />
            </Tab.Navigator>
            {/* <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
            </Stack.Navigator> */}
        </NavigationContainer>
    )
}