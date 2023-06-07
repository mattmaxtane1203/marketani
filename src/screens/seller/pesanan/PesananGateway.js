import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import PesananListItem from "../../../components/output/PesananListItem";
import Images from "../../../constants/Images";
import Pesanan from "./Pesanan";

const Stack = createNativeStackNavigator();

const PesananGateway = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Daftar Pesanan" component={PesananList} />
      <Stack.Screen name="Pesanan" component={Pesanan} />
    </Stack.Navigator>
  );
};

const PesananList = ({ navigation }) => {
  const productName = "Cabe Rawit";
  const productPrice = "Rp 15.000/300gr";
  const quantity = "2";
  const dateOrdered = new Date();
  const productPhoto = Images.cabaiSample;
  const username = "Matthew";
  const telephoneNumber = "+6281283762959";
  const address =
    "Jl. Cempaka 1 no. 22\nBintaro, Pesanggrahan\nJakarta Selatan, DKI Jakarta\n12330";
  const userPhoto = Images.profilePictureSample;

  function handlePress() {
    navigation.navigate("Pesanan", {
      productName: productName,
      productPrice: productPrice,
      quantity: quantity,
      dateOrdered: dateOrdered,
      productPhoto: productPhoto,
      username: username,
      telephoneNumber: telephoneNumber,
      address: address,
      userPhoto: userPhoto,
    });
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <PesananListItem
          productName={productName}
          productPrice={productPrice}
          quantity={quantity}
          productPhoto={productPhoto}
          username={username}
          userPhoto={userPhoto}
          OnPress={handlePress}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default PesananGateway;
