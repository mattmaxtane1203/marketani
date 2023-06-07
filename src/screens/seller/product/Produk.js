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
import { ScrollView } from "react-native";

const Produk = ({ navigation }) => {
  const sampleProductName = "Cabai Rawit";
  const sampleProductPrice = "Rp 15.000/g";
  const sampleStock = 20;
  const sampleAmountSold = 11;

  return (
    <SafeAreaView style={styles.container}>
      <SellerSearchBar placeholder={"Cari Produk"} />
      {/* TODO: Add filter button */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* TODO: Add variant of seller product when it is currently discounted */}
        <SellerProduct
          productName={sampleProductName}
          productPrice={sampleProductPrice}
          stock={sampleStock}
          amountSold={sampleAmountSold}
          beriDiskonOnPress={() => navigation.navigate("Beri Diskon")}
          ulasanOnPress={() => navigation.navigate("Ulasan")}
          ubahOnPress={() => navigation.navigate("Ubah Produk")}
          showButtons={true}
        />
        <PrimaryButton
          placeholder={"Tambah Produk"}
          onPress={() => navigation.navigate("Tambah Produk")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },

  scrollContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
});

export default Produk;
