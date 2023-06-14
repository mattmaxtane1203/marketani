import {
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import Images from "../../constants/Images";
import SubtitleButton from "../../components/button/SubtitleButton";
import PrimaryButton from "../../components/button/PrimaryButton";
import { RegisterValidation } from "../../utils/RegisterValidation";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome5";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const squareLength = 0.6 * screenWidth;

// ! Change this according to the IP address of your machine
const currentIP = "192.168.18.6";
// const currentIP = "172.20.10.2";
// const currentIP = null;

// TODO: Find a way to delete text input when logging out
const Login = ({ navigation }) => {
  // Behavioural Variables
  const [activeTextInput, setActiveTextInput] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Information Variables
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [kataSandi, setKataSandi] = useState("");

  // Behavioural Methods
  useEffect(() => {
    setErrorMessage("");
    setNomorTelepon("");
    setKataSandi("");
  }, []);

  const handleTextInputFocus = (textInputKey) => {
    setActiveTextInput(textInputKey);
  };

  const handleValidation = async () => {
    setErrorMessage("");

    // Log credentials
    console.log("Nomor Telepon: " + nomorTelepon);
    console.log("Kata Sandi: " + kataSandi);

    // Validate credentials
    const teleponError = RegisterValidation.nomorTeleponIsValid(nomorTelepon);
    if (teleponError) {
      setErrorMessage(teleponError);
      return;
    }
    try {
      const phoneNumberResponse = await axios.get(
        `http://${currentIP}:8081/checkPhoneNumber/${nomorTelepon}`
      );

      console.log(
        "Phone Number Response: " + phoneNumberResponse.data.phoneNumber
      );

      if (!phoneNumberResponse.data.phoneNumber.length === 0) {
        setErrorMessage("Nomor telepon tidak terdaftar");
        return;
      }

      // Check password
      const passwordResponse = await axios.get(
        `http://${currentIP}:8081/checkPassword/${nomorTelepon}/${kataSandi}`
      );

      if (!passwordResponse.data.valid) {
        setErrorMessage("Kata sandi tidak cocok");
        return;
      }

      // Find user role in Customer
      let userRoleResponse = await axios.get(
        `http://${currentIP}:8081/checkIfCustomer/${nomorTelepon}`
      );

      console.log("User Role Response: " + userRoleResponse.data.customerId);

      // If found, empty fields and redirect
      setNomorTelepon("");
      setKataSandi("");
      setErrorMessage("");
      if (userRoleResponse.data.customerId != null) {
        navigation.navigate("User Home");
      } else if (userRoleResponse.data.customerId == null) {
        navigation.navigate("Seller Home");
      } else {
        console.log("Unexpected Error: User not found");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage("Nomor telepon tidak terdaftar");
      } else {
        console.error(error);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100}
    >
      {/* TODO: Reduce delay when avoiding keyboard */}
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Image source={Images.marketaniLogo} style={styles.logo} />

          {/* Nomor Telepon Field */}
          <View style={styles.textInputField}>
            <Text style={styles.fieldLabel}>Nomor Telepon</Text>
            <TextInput
              style={[
                styles.textInputBox,
                activeTextInput === "nomorTelepon" && styles.inputFocused,
              ]}
              onChangeText={setNomorTelepon}
              onFocus={() => handleTextInputFocus("nomorTelepon")}
              onBlur={() => handleTextInputFocus(null)}
              keyboardType="numeric"
            />
          </View>

          {/* Kata Sandi Field */}
          <View style={styles.textInputField}>
            <Text style={styles.fieldLabel}>Kata Sandi</Text>
            <TextInput
              style={[
                styles.textInputBox,
                activeTextInput === "kataSandi" && styles.inputFocused,
              ]}
              onChangeText={setKataSandi}
              onFocus={() => handleTextInputFocus("kataSandi")}
              onBlur={() => handleTextInputFocus(null)}
              secureTextEntry={true}
            />
          </View>

          {/* Error Message Container */}
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

          <View style={styles.centered}>
            <PrimaryButton placeholder={"Masuk"} onPress={handleValidation} />

            <Text style={styles.subtitle}>Belum Punya Akun?</Text>

            <SubtitleButton
              placeholder={"Daftar Akun"}
              onPress={() => navigation.navigate("Register")}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
    marginVertical: 0.15 * screenHeight,
    width: squareLength,
    height: squareLength,
    // borderWidth: 1,
  },

  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  centered: {
    alignItems: "center",
  },

  subtitle: {
    fontSize: 16,
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

  // Text Input Field Styles
  textInputField: {
    marginVertical: 8,
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
  },

  inputFocused: {
    borderColor: "#48BD5B",
  },
});

export default Login;
