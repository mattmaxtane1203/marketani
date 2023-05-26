import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import SellerProduct from "../../../components/output/SellerProduct";
import TextInputField from "../../../components/input/TextInputField";
import PrimaryButton from "../../../components/button/PrimaryButton";
import DateInputField from "../../../components/input/DateInput";

const Diskon = ({ navigation }) => {
  const sampleProductName = "Cabai Rawit";
  const sampleProductPrice = "Rp 15.000/g";
  const sampleStock = 20;
  const sampleAmountSold = 11;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SellerProduct
          productName={sampleProductName}
          productPrice={sampleProductPrice}
          stock={sampleStock}
          amountSold={sampleAmountSold}
          showButtons={false}
        />
        <TextInputField label={"Harga Diskon (Rp)"} />
        <TextInputField label={"Tanggal Mulai Diskon"} />
        <TextInputField label={"Tanggal Akhir Diskon"} />
        <DateInputField label={"Tanggal"} />
        <PrimaryButton
          placeholder={"Konfirmasi"}
          onPress={() => navigation.navigate("Produk")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Diskon;
