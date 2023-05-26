import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProdukUlasan from "./ProdukUlasan";
import DaftarUlasan from "./DaftarUlasan";

const Stack = createNativeStackNavigator();

const UlasanGateway = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ulasan" component={ProdukUlasan} />
      <Stack.Screen name="Daftar Ulasan" component={DaftarUlasan} />
    </Stack.Navigator>
  );
};

export default UlasanGateway;
