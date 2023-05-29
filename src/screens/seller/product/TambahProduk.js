import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import TextInputField from "../../../components/input/TextInputField";
import SettingButton from "../../../components/button/SettingButton";
import PhotoInputField from "../../../components/input/PhotoInput";
import WeightInput from "../../../components/input/WeightInput";
import PrimaryButton from "../../../components/button/PrimaryButton";

// TODO: Do not use LoginStyles later
// TODO: Fix KeyboardAvoidingView (it needs to avoid more)

const TambahProduk = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.background && styles.keyboardAvoidingContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <PhotoInputField label={"Foto Produk"} />
              <TextInputField label={"Nama"} />
              <TextInputField label={"Deskripsi"} />
              <WeightInput label={"Berat/pesanan"} />
              <TextInputField label={"Harga/pesanan"} />
              <TextInputField label={"Stok"} />
            </View>
            <View style={styles.bordered}>
              <SettingButton
                placeholder={"Pilih Tag Produk"}
                OnPress={() => navigation.navigate("Tag Produk")}
              />
            </View>
            <PrimaryButton
              placeholder={"Tambahkan"}
              onPress={() => navigation.goBack()}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFFFF0",
  },

  keyboardAvoidingContainer: {
    flex: 1,
  },

  container: {
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
  },

  bordered: {
    // borderWidth: 2,
    // borderColor: "red",
    width: "100%",
  },
});

export default TambahProduk;
