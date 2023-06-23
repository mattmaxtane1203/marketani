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
import { useDispatch } from "react-redux";
import {
  setCurrentUser,
  setCurrentUserId,
} from "../../redux/actions/userActions";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const squareLength = 0.6 * screenWidth;

// ! Change this according to the IP address of your machine
// Matthew IP
// const currentIP = "192.168.18.6";
// const currentIP = "172.20.10.2";

// Glennix IP
const currentIP = "192.168.0.158";

// Bima IP
// const currentIP = "192.168.0.100";

// const currentIP = "172.20.10.2";
// const currentIP = null;

// Nadia IP
// const currentIP = "192.168.0.103";

// Binus IP
// const currentIP = "10.20.147.108"

// TODO: Find a way to delete text input when logging out
const Login = ({ navigation }) => {
  // Behavioural Variables
  const [activeTextInput, setActiveTextInput] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Information Variables
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [kataSandi, setKataSandi] = useState("");

  const dispatch = useDispatch();

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
    console.log("NEW LOGIN ATTEMPT");
    console.log("=================");

    // Log credentials
    console.log("Nomor Telepon: " + nomorTelepon);
    console.log("Kata Sandi: " + kataSandi);
    console.log();

    // Validate credentials
    const teleponError = RegisterValidation.nomorTeleponIsValid(nomorTelepon);
    if (teleponError) {
      setErrorMessage(teleponError);
      return;
    }

    try {
      // Find phone number in database
      // ! FIX: Error 404. Possible problem with routing

      console.log("IP address: " + currentIP);

      const customerIdResponse = await axios.get(
        `http://${currentIP}:8081/customer/getId/${nomorTelepon}`
      );

      const sellerIdResponse = await axios.get(
        `http://${currentIP}:8081/seller/getId/${nomorTelepon}`
      );

      // Log ID Responses
      console.log("Customer ID Response: " + customerIdResponse.data.id);
      console.log("Seller ID Response: " + sellerIdResponse.data.id);
      console.log();

      if (!customerIdResponse.data.id && !sellerIdResponse.data.id) {
        setErrorMessage("Nomor telepon tidak terdaftar");
        return;
      }

      // Check password
      let userFullNameResponse = null;
      let passwordResponse = null;
      if (customerIdResponse.data.id && !sellerIdResponse.data.id) {
        userFullNameResponse = await axios.get(
          `http://${currentIP}:8081/customer/getName/${customerIdResponse.data.id}`
        );
        passwordResponse = await axios.get(
          `http://${currentIP}:8081/customer/getPassword/${customerIdResponse.data.id}`
        );
      } else {
        userFullNameResponse = await axios.get(
          `http://${currentIP}:8081/seller/getName/${sellerIdResponse.data.id}`
        );
        passwordResponse = await axios.get(
          `http://${currentIP}:8081/seller/getPassword/${sellerIdResponse.data.id}`
        );
      }

      console.log("Full Name: " + userFullNameResponse.data.full_name);
      console.log("Password: " + passwordResponse.data.password);

      if (passwordResponse.data.password !== kataSandi) {
        setErrorMessage("Kata sandi tidak cocok");
        return;
      }
      console.log("Password Match");

      // Set global variables
      let user = {
        id: null,
        name: null,
        role: null,
      };
      if (customerIdResponse.data.id && !sellerIdResponse.data.id) {
        user.id = customerIdResponse.data.id;
        user.name = userFullNameResponse.data.full_name;
        user.role = "customer";
      } else {
        user.id = sellerIdResponse.data.id;
        user.name = userFullNameResponse.data.full_name;
        user.role = "seller";
      }
      dispatch(setCurrentUser(user));

      // Empty fields
      setNomorTelepon("");
      setKataSandi("");
      setErrorMessage("");

      // Redirect to corresponding pages
      if (customerIdResponse.data.id && !sellerIdResponse.data.id) {
        navigation.navigate("User Home");
      } else if (sellerIdResponse.data.id && !customerIdResponse.data.id) {
        navigation.navigate("Seller Home");
      } else {
        console.log("Unexpected Error: User not found");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setErrorMessage("Error occurred. Please try again.");
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
