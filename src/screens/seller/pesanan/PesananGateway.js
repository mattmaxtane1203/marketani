import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import Pesanan from "../Pesanan";
import PesananListItem from "../../../components/output/PesananListItem";
import Images from "../../../constants/Images";

const Stack = createNativeStackNavigator();

const PesananGateway = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pesanan List" component={PesananList} />
      <Stack.Screen name="Pesanan" component={Pesanan} />
    </Stack.Navigator>
  );
};

const PesananList = ({ navigation }) => {
  const productName = "Cabe Rawit";
  const productPrice = "Rp 15.000/300gr";
  const quantity = "2";
  const productPhoto = Images.cabaiSample;
  const username = "Matthew";
  const userPhoto = Images.profilePictureSample;

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
          onPress={() => navigation.navigate(Pesanan)}
        />
        <PesananListItem
          productName={productName}
          productPrice={productPrice}
          quantity={quantity}
          productPhoto={productPhoto}
          username={username}
          userPhoto={userPhoto}
          onPress={() => navigation.navigate(Pesanan)}
        />
        <PesananListItem
          productName={productName}
          productPrice={productPrice}
          quantity={quantity}
          productPhoto={productPhoto}
          username={username}
          userPhoto={userPhoto}
          onPress={() => navigation.navigate(Pesanan)}
        />
        <PesananListItem
          productName={productName}
          productPrice={productPrice}
          quantity={quantity}
          productPhoto={productPhoto}
          username={username}
          userPhoto={userPhoto}
          onPress={() => navigation.navigate(Pesanan)}
        />
        <PesananListItem
          productName={productName}
          productPrice={productPrice}
          quantity={quantity}
          productPhoto={productPhoto}
          username={username}
          userPhoto={userPhoto}
          onPress={() => navigation.navigate(Pesanan)}
        />
        <PesananListItem
          productName={productName}
          productPrice={productPrice}
          quantity={quantity}
          productPhoto={productPhoto}
          username={username}
          userPhoto={userPhoto}
          onPress={() => navigation.navigate(Pesanan)}
        />
        <PesananListItem
          productName={productName}
          productPrice={productPrice}
          quantity={quantity}
          productPhoto={productPhoto}
          username={username}
          userPhoto={userPhoto}
          onPress={() => navigation.navigate(Pesanan)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default PesananGateway;
