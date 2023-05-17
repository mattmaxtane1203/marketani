import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BukaToko from "./BukaToko";
import AturAlamat from "./AturAlamat";
import SellerMainMenu from "./SellerMainMenu";

// TODO: Make BukaToko into own Stack Navigator; Turn this screen into a Tab Navigator

const Stack = createNativeStackNavigator();

export default function DaftarToko() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Buka Toko" component={BukaToko}/>
                <Stack.Screen name="Atur Alamat" component={AturAlamat}/>
                <Stack.Screen name="Seller Main Menu" component={SellerMainMenu}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}