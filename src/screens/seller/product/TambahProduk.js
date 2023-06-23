import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PrimaryButton from "../../../components/button/PrimaryButton";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { launchImageLibrary } from "react-native-image-picker";
import { RadioButton } from "react-native-paper";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductValidation from "../../../utils/ProductValidation";
import axios from "axios";

// TODO: Do not use LoginStyles later
// TODO: Fix KeyboardAvoidingView (it needs to avoid more)

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

// Matthew IP
// const currentIP = "192.168.18.6";

// Glennix IP
const currentIP = "192.168.0.158";

// // Bima IP
// const currentIP = "192.168.0.100";

// // Nadia IP
// const currentIP = "192.168.0.103";

const TambahProduk = ({ navigation }) => {
  // Behavioural Variables
  const [activeTextInput, setActiveTextInput] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Information Variables
  const [fotoProduk, setfotoProduk] = useState(null);
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [beratPerPesanan, setBeratPerPesanan] = useState(0);
  const [hargaPerPesanan, setHargaPerPesanan] = useState(0);
  const [stok, setStok] = useState(0);
  const [selectedAsalProduk, setSelectedAsalProduk] = useState("lokal");
  const [selectedMetodePengembangan, setSelectedMetodePengembangan] =
    useState("konvensional");
  const currentSeller = useSelector((state) => state.user.currentUser);

  // Information Methods
  const handleAsalProdukChange = (value) => {
    setSelectedAsalProduk(value);
  };

  const handleMetodePengembanganChange = (value) => {
    setSelectedMetodePengembangan(value);
  };

  // Behavioural Methods
  useEffect(() => {
    // Log current seller information
    console.log(currentSeller);

    // Empty fields
    setErrorMessage("");
    setNama("");
    setDeskripsi("");
    setBeratPerPesanan(0);
    setHargaPerPesanan(0);
    setStok(0);
    setSelectedAsalProduk("lokal");
    setSelectedMetodePengembangan("konvensional");
  }, []);

  const handleTextInputFocus = (textInputKey) => {
    setActiveTextInput(textInputKey);
  };

  // const handleChoosePhoto = async () => {
  //   const result = await launchImageLibrary({ mediaType: "photo" });
  //   setfotoProduk(result.assets[0].uri);
  // };

  const handleValidation = async () => {
    // Empty error messages
    setErrorMessage("");

    // Log information
    console.log("NEW PRODUCT ADDITION ATTEMPT");
    console.log("============================");
    console.log("Product Name: " + nama);
    console.log("Product Description: " + deskripsi);
    console.log("Berat per Pesanan: " + beratPerPesanan);
    console.log("Harga per pesanan: " + hargaPerPesanan);
    console.log("Stok: " + stok);
    console.log("Asal Produk: " + selectedAsalProduk);
    console.log("Metode Pengembangan: " + selectedMetodePengembangan);

    // Validate Data
    const nameError = ProductValidation.validNameLength(nama);
    if (nameError) {
      setErrorMessage(nameError);
      return;
    }

    const deskripsiError = ProductValidation.validDescriptionLength(deskripsi);
    if (deskripsiError) {
      setErrorMessage(deskripsiError);
      return;
    }

    const beratPerPesananError =
      ProductValidation.validBeratPerPesanan(beratPerPesanan);
    if (beratPerPesananError) {
      setErrorMessage(beratPerPesananError);
      return;
    }

    const hargaPerPesananError =
      ProductValidation.validHargaPerPesanan(hargaPerPesanan);
    if (hargaPerPesananError) {
      setErrorMessage(hargaPerPesananError);
      return;
    }

    const stokError = ProductValidation.validStok(stok);
    if (stokError) {
      setErrorMessage(stokError);
      return;
    }

    console.log("Error Message: " + errorMessage);

    // Post new product
    const currentSellerID = currentSeller.id;
    console.log("Current Seller ID: " + currentSellerID);

    // Figure out why most of the fields were not inserted properly
    try {
      const response = await axios.post(
        `http://${currentIP}:8081/product/insert`,
        {
          nama_produk: nama,
          deskripsi,
          berat_per_pesanan: beratPerPesanan,
          harga_per_pesanan: hargaPerPesanan,
          stok,
          asal_produk: selectedAsalProduk,
          metode_pengembangan: selectedMetodePengembangan,
          seller_id: currentSellerID,
        }
      );
      console.log("Response Message: " + response.data);
    } catch (err) {
      console.log("Post Error Message: " + err);
    }

    // Navigate back to product page
    navigation.navigate("Produk");
  };

  return (
    <KeyboardAvoidingView
      style={styles.background && styles.keyboardAvoidingContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100}
    >
      <TouchableWithoutFeedback>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            flexDirection: "column",
            alignItems: "center",
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Foto Produk Field */}
          {/* <View style={styles.productPhotoField}>
            <Text
              style={[
                styles.fieldLabel,
                { alignSelf: "flex-start", marginBottom: 32 },
              ]}
            >
              Foto Produk
            </Text>
            <TouchableOpacity
              onPress={handleChoosePhoto}
              style={styles.touchable}
            >
              <View style={styles.iconContainer}>
                <AntDesign name="plus" size={24} color="white" />
              </View>
            </TouchableOpacity>
          </View> */}

          {/* Nama Field */}
          <View style={styles.textInputField}>
            <Text style={styles.fieldLabel}>Nama</Text>
            <TextInput
              style={[
                styles.textInputBox,
                activeTextInput === "nama" && styles.inputFocused,
              ]}
              onChangeText={setNama}
              onFocus={() => handleTextInputFocus("nama")}
              onBlur={() => handleTextInputFocus(null)}
            />
          </View>

          {/* Deskripsi Field */}
          <View style={styles.textInputField}>
            <Text style={styles.fieldLabel}>Deskripsi</Text>
            <TextInput
              style={[
                styles.textInputBox,
                activeTextInput === "deskripsi" && styles.inputFocused,
              ]}
              onChangeText={setDeskripsi}
              onFocus={() => handleTextInputFocus("deskripsi")}
              onBlur={() => handleTextInputFocus(null)}
            />
          </View>

          {/* Berat per Pesanan Field */}
          <View style={styles.textInputField}>
            <Text style={styles.fieldLabel}>Berat/pesanan</Text>
            <TextInput
              style={[
                styles.textInputBox,
                activeTextInput === "beratPerPesanan" && styles.inputFocused,
              ]}
              onChangeText={setBeratPerPesanan}
              onFocus={() => handleTextInputFocus("beratPerPesanan")}
              onBlur={() => handleTextInputFocus(null)}
              keyboardType="numeric"
            />
          </View>

          {/* Harga per Pesanan Field */}
          <View style={styles.textInputField}>
            <Text style={styles.fieldLabel}>Harga/pesanan</Text>
            <TextInput
              style={[
                styles.textInputBox,
                activeTextInput === "hargaPerPesanan" && styles.inputFocused,
              ]}
              onChangeText={setHargaPerPesanan}
              onFocus={() => handleTextInputFocus("hargaPerPesanan")}
              onBlur={() => handleTextInputFocus(null)}
              keyboardType="numeric"
            />
          </View>

          {/* Stok Field */}
          <View style={styles.textInputField}>
            <Text style={styles.fieldLabel}>Stok</Text>
            <TextInput
              style={[
                styles.textInputBox,
                activeTextInput === "stok" && styles.inputFocused,
              ]}
              onChangeText={setStok}
              onFocus={() => handleTextInputFocus("stok")}
              onBlur={() => handleTextInputFocus(null)}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.radioContainer}>
            <Text style={styles.fieldLabel}>Asal Produk</Text>
            <RadioButton.Group
              onValueChange={handleAsalProdukChange}
              value={selectedAsalProduk}
            >
              <View style={styles.radioButton}>
                <RadioButton
                  value="lokal"
                  color="#48BD5B"
                  uncheckedColor="#000"
                />
                <Text style={styles.radioButtonLabel}>Lokal</Text>
              </View>
              <View style={styles.radioButton}>
                <RadioButton
                  value="impor"
                  color="#48BD5B"
                  uncheckedColor="#000"
                />
                <Text style={styles.radioButtonLabel}>Impor</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.radioContainer}>
            <Text style={styles.fieldLabel}>Metode Pengembangan</Text>
            <RadioButton.Group
              onValueChange={handleMetodePengembanganChange}
              value={selectedMetodePengembangan}
            >
              <View style={styles.radioButton}>
                <RadioButton
                  value="konvensional"
                  color="#48BD5B"
                  uncheckedColor="#000"
                />
                <Text style={styles.radioButtonLabel}>Konvensional</Text>
              </View>
              <View style={styles.radioButton}>
                <RadioButton
                  value="organik"
                  color="#48BD5B"
                  uncheckedColor="#000"
                />
                <Text style={styles.radioButtonLabel}>Organik</Text>
              </View>
              <View style={styles.radioButton}>
                <RadioButton
                  value="hidroponik"
                  color="#48BD5B"
                  uncheckedColor="#000"
                />
                <Text style={styles.radioButtonLabel}>Hidroponik</Text>
              </View>
            </RadioButton.Group>
          </View>

          {errorMessage != "" && (
            <View style={styles.errorMessageContainer}>
              <Icon
                name="exclamation-circle"
                size={0.04 * screenWidth}
                color={"#ff3333"}
              />
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
          )}

          <PrimaryButton placeholder={"Tambahkan"} onPress={handleValidation} />
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

  // Error Message Style
  errorMessageContainer: {
    width: 0.83 * screenWidth,
    height: 0.04 * screenHeight,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 0.01 * screenHeight,

    borderWidth: 1,
    borderColor: "#ff3333",
    backgroundColor: "#FFE1E1",
    borderRadius: 10,
    paddingHorizontal: 0.02 * screenWidth,
  },

  errorMessage: {
    color: "red",
    marginHorizontal: 0.03 * screenWidth,
  },

  // Product Photo Field
  productPhotoField: {
    width: 0.83 * screenWidth,
    height: 0.2 * screenHeight,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    // borderWidth: 1,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#48BD5B",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  // Text Input Field Styles
  textInputField: {
    marginVertical: 8,
    alignSelf: "center",
    // borderWidth: 1,
  },

  textInputBox: {
    width: 0.83 * screenWidth,
    height: 0.04 * screenHeight,

    borderColor: "black",
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 10,
  },

  fieldLabel: {
    fontSize: 16,
    marginBottom: 10,
    alignSelf: "flex-start",
  },

  inputFocused: {
    borderColor: "#48BD5B",
  },

  // Radio Button Styles
  radioContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: 350,
    marginVertical: 10,
    // borderWidth: 1,
    width: 0.83 * screenWidth,
  },

  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    // borderWidth: 1,
    width: "100%",
  },

  radioButtonLabel: {
    fontSize: 16,
    fontWeight: "normal",
    marginLeft: 10,
  },
});

export default TambahProduk;
