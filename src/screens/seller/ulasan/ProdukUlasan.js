import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import SellerProduct from "../../../components/output/SellerProduct";

const ProdukUlasan = ({ navigation }) => {
  const sampleProductName = "Cabai Rawit";
  const sampleProductPrice = "Rp 15.000/g";
  const sampleStock = 20;
  const sampleAmountSold = 11;

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Daftar Ulasan")}>
          <SellerProduct
            productName={sampleProductName}
            productPrice={sampleProductPrice}
            stock={sampleStock}
            amountSold={sampleAmountSold}
            showButtons={false}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Daftar Ulasan")}>
          <SellerProduct
            productName={sampleProductName}
            productPrice={sampleProductPrice}
            stock={sampleStock}
            amountSold={sampleAmountSold}
            showButtons={false}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Daftar Ulasan")}>
          <SellerProduct
            productName={sampleProductName}
            productPrice={sampleProductPrice}
            stock={sampleStock}
            amountSold={sampleAmountSold}
            showButtons={false}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Daftar Ulasan")}>
          <SellerProduct
            productName={sampleProductName}
            productPrice={sampleProductPrice}
            stock={sampleStock}
            amountSold={sampleAmountSold}
            showButtons={false}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Daftar Ulasan")}>
          <SellerProduct
            productName={sampleProductName}
            productPrice={sampleProductPrice}
            stock={sampleStock}
            amountSold={sampleAmountSold}
            showButtons={false}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
});

export default ProdukUlasan;
