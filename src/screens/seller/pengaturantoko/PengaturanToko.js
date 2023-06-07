import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import { useState } from "react";
import TextInputField from "../../../components/input/TextInputField";
import SettingButton from "../../../components/button/SettingButton";
import PrimaryButton from "../../../components/button/PrimaryButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AturAlamat from "./AturAlamat";

const Stack = createNativeStackNavigator();

const PengaturanToko = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Pengaturan Toko" component={PengaturanTokoMenu} />
      <Stack.Screen name="Atur Alamat" component={AturAlamat} />
    </Stack.Navigator>
  );
};

const PengaturanTokoMenu = ({ navigation }) => {
  const [namaToko, setNamaToko] = useState("");
  const [alamatToko, setAlamatToko] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInputField label={"Nama Toko"} />
      </View>

      <View>
        <SettingButton
          placeholder={"Atur Alamat"}
          OnPress={() => navigation.navigate("Atur Alamat")}
        />
      </View>

      <View style={styles.container}>
        <PrimaryButton
          placeholder={"Buka Toko"}
          onPress={() => navigation.navigate("Seller Main Menu")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    margin: 20,
  },
});

export default PengaturanToko;
