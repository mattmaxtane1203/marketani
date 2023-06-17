import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  TextInput,
} from "react-native";
import { RadioButton } from "react-native-paper";
import PrimaryButton from "../../components/button/PrimaryButton";
import SubtitleButton from "../../components/button/SubtitleButton";
import { RegisterValidation } from "../../utils/RegisterValidation";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/actions/userActions";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

// ! Change this according to the IP address of your machine
const currentIP = "192.168.18.6";
// const currentIP = "172.20.10.2";
// const currentIP = null;

const Register = ({ navigation }) => {
  const [activeTextInput, setActiveTextInput] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const [nomorTelepon, setNomorTelepon] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [kataSandi, setKataSandi] = useState("");
  const [kataSandiKonfirmasi, setKataSandiKonfirmasi] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [userRole, setUserRole] = useState("Pelanggan");

  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
    }
  }, [errorMessage]);

  useEffect(() => {
    setErrorMessage("");
    setNomorTelepon("");
    setNamaLengkap("");
    setKataSandi("");
    setKataSandiKonfirmasi("");
  }, []);

  // ! BUG: User has to tap twice if there was an error to register their account
  // ? Try making the error update in real time instead

  // ! BUG: When logging out of the an account and then navigating to the registration page, the previous registration data still appears
  const handleValidation = async () => {
    setErrorMessage("");

    console.log("Nomor Telepon: " + nomorTelepon);
    console.log("Nama Lengkap: " + namaLengkap);
    console.log("Kata Sandi: " + kataSandi);
    console.log("Konfirmasi Kata Sandi: " + kataSandiKonfirmasi);
    console.log();

    const teleponError = RegisterValidation.nomorTeleponIsValid(nomorTelepon);
    if (teleponError) {
      setErrorMessage(teleponError);
      return;
    }

    // Check if phone number exists in database
    let customerIdResponse = null;
    let sellerIdResponse = null;
    try {
      customerIdResponse = await axios.get(
        `http://${currentIP}:8081/customer/getId/${nomorTelepon}`
      );

      sellerIdResponse = await axios.get(
        `http://${currentIP}:8081/seller/getId/${nomorTelepon}`
      );

      console.log("Customer ID Response: " + customerIdResponse.data.id);
      console.log("Seller ID Response: " + sellerIdResponse.data.id);
      console.log();

      if (customerIdResponse.data.id || sellerIdResponse.data.id) {
        setErrorMessage("Nomor telepon sudah terdaftar");
        return;
      }
    } catch (error) {
      console.log(error);
    }

    // Validate inputted credentials
    const namaError = RegisterValidation.nameIsValid(namaLengkap);
    if (namaError) {
      setErrorMessage(namaError);
      return;
    }

    const passwordError = RegisterValidation.passwordIsValid(kataSandi);
    if (passwordError) {
      setErrorMessage(passwordError);
      return;
    }

    const konfirmasiError = RegisterValidation.passwordMatches(
      kataSandi,
      kataSandiKonfirmasi
    );
    if (konfirmasiError) {
      setErrorMessage(konfirmasiError);
      return;
    }

    console.log("Form Validity: " + formIsValid);

    // Post Registration Form
    if (formIsValid) {
      try {
        const endpoint = userRole === "Pelanggan" ? "/customer" : "/seller";
        const response = await axios.post(
          `http://${currentIP}:8081${endpoint}/register`,
          {
            nomorTelepon,
            namaLengkap,
            kataSandi,
          }
        );

        console.log(response.data);

        if (userRole === "Pelanggan") {
          customerIdResponse = await axios.get(
            `http://${currentIP}:8081${endpoint}/getId/${nomorTelepon}`
          );
        } else {
          sellerIdResponse = await axios.get(
            `http://${currentIP}:8081${endpoint}/getId/${nomorTelepon}`
          );
        }

        let userNameResponse = null;
        if (customerIdResponse.data.id && !sellerIdResponse.data.id) {
          userNameResponse = await axios.get(
            `http://${currentIP}:8081${endpoint}/getName/${customerIdResponse.data.id}`
          );
        } else {
          userNameResponse = await axios.get(
            `http://${currentIP}:8081${endpoint}/getName/${sellerIdResponse.data.id}`
          );
        }

        console.log("Full Name Response: " + userNameResponse.data.full_name);

        let user = {
          id: null,
          name: userNameResponse.data.full_name,
          role: null,
        };
        if (customerIdResponse.data.id && !sellerIdResponse.data.id) {
          user.id = customerIdResponse.data.id;
          user.role = "Customer";
        } else {
          user.id = sellerIdResponse.data.id;
          user.role = "Seller";
        }
        dispatch(setCurrentUser(user));

        // Navigate
        if (userRole === "Pelanggan") {
          navigation.navigate("User Home");
        } else {
          navigation.navigate("Seller Home");
        }

        setNomorTelepon("");
        setNamaLengkap("");
        setKataSandi("");
        setKataSandiKonfirmasi("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleTextInputFocus = (textInputKey) => {
    setActiveTextInput(textInputKey);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={[
              styles.centered,
              {
                marginHorizontal: 0.025 * screenWidth,
                marginVertical: 0.04 * screenHeight,
              },
            ]}
          >
            <Text style={styles.header}>Daftar Akun</Text>
          </View>

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

          {/* Nama Lengkap Field */}
          <View style={styles.textInputField}>
            <Text style={styles.fieldLabel}>Nama Lengkap</Text>
            <TextInput
              style={[
                styles.textInputBox,
                activeTextInput === "namaLengkap" && styles.inputFocused,
              ]}
              onChangeText={setNamaLengkap}
              onFocus={() => handleTextInputFocus("namaLengkap")}
              onBlur={() => handleTextInputFocus(null)}
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
              secureTextEntry={true}
              onChangeText={setKataSandi}
              onFocus={() => handleTextInputFocus("kataSandi")}
              onBlur={() => handleTextInputFocus(null)}
            />
          </View>

          {/* Konfirmasi Kata Sandi Field */}
          <View style={styles.textInputField}>
            <Text style={styles.fieldLabel}>Konfirmasi Kata Sandi</Text>
            <TextInput
              style={[
                styles.textInputBox,
                activeTextInput === "konfirmasiKataSandi" &&
                  styles.inputFocused,
              ]}
              secureTextEntry={true}
              onChangeText={setKataSandiKonfirmasi}
              onFocus={() => handleTextInputFocus("konfirmasiKataSandi")}
              onBlur={() => handleTextInputFocus(null)}
            />
          </View>

          <View style={styles.radioButtonInputField}>
            <Text style={styles.fieldLabel}>Daftar sebagai:</Text>
            <RadioButton.Group onValueChange={setUserRole} value={userRole}>
              <View style={styles.radioButtonContainer}>
                <View style={styles.radioButton}>
                  <RadioButton value={"Pelanggan"} color="#48BD5B" />
                  <Text style={styles.radioButtonLabel}>Pelanggan</Text>
                </View>

                <View style={styles.radioButton}>
                  <RadioButton value={"Penjual"} color="#48BD5B" />
                  <Text style={styles.radioButtonLabel}>Penjual</Text>
                </View>
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

          <View style={styles.centered}>
            <PrimaryButton placeholder={"Daftar"} onPress={handleValidation} />
            <Text style={styles.subtext}>Sudah Punya Akun?</Text>
            <SubtitleButton
              placeholder={"Login"}
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollViewContainer: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },

  subtext: {
    fontSize: 16,
  },

  centered: {
    alignItems: "center",
  },

  // Error Message Style
  errorMessageContainer: {
    width: 0.83 * screenWidth,
    height: 0.04 * screenHeight,
    flexDirection: "row",
    alignItems: "center",

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

  // Radio Button Styles
  radioButtonInputField: {
    marginVertical: 8,
    // borderWidth: 1,
    width: 0.83 * screenWidth,
  },

  radioButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: 0,
    // borderWidth: 1,
  },

  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 4,
    // borderWidth: 1,
  },

  radioButtonLabel: {
    marginLeft: 8,
  },
});

export default Register;
