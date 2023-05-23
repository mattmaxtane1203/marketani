import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import PrimaryButton from "../../../components/button/PrimaryButton";
import SellerSearchBar from "../../../components/input/SellerSearchBar";
import SellerProduct from "../../../components/output/SellerProduct";

const Produk = ({ navigation }) => {
  const sampleProductName = "Cabai Rawit";
  const sampleProductPrice = "Rp 15.000/g";
  const sampleStock = 20;
  const sampleAmountSold = 11;

  return (
    <SafeAreaView style={styles.container}>
      <SellerSearchBar placeholder={"Cari Produk"} />
      {/* TODO: Insert store products here */}
      {/* Insert product component here */}
      <SellerProduct
        productName={sampleProductName}
        productPrice={sampleProductPrice}
        stock={sampleStock}
        amountSold={sampleAmountSold}
        beriDiskonOnPress={() => navigation.navigate("Beri Diskon")}
        // TODO: Make dedicated UbahProduk page
        ubahOnPress={() => navigation.navigate("Tambah Produk")}
      />
      <PrimaryButton
        placeholder={"Tambah Produk"}
        onPress={() => navigation.navigate("Tambah Produk")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default Produk;
