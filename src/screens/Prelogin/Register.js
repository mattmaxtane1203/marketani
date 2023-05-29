import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
} from "react-native";
import { useState } from "react";
import TextInputField from "../../components/input/TextInputField";
import PrimaryButton from "../../components/button/PrimaryButton";
import SubtitleButton from "../../components/button/SubtitleButton";
import { RegisterValidation } from "../../utils/RegisterValidation";
import RadioButtonInputField from "../../components/input/RadioButtonInputField";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

// TODO: Fix PrimaryButton and how it validates the inputs
// TODO: Fix invisible area at the bottom that covers some area of the screen (KeyboardAvoidingView)

const Register = ({ navigation }) => {
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [kataSandi, setKataSandi] = useState("");
  const [kataSandiKonfirmasi, setKataSandiKonfirmasi] = useState("");
  const [formIsValid, setFormIsValid] = useState(false); // New state variable

  function handleDaftar() {
    console.log(nomorTelepon);
    console.log(namaLengkap);
    console.log(kataSandi);
    console.log(kataSandiKonfirmasi);
    navigation.navigate("User Home");
  }

  // Function to handle validation and update form validity
  const handleValidation = () => {
    const isFormValid =
      RegisterValidation.nomorTeleponIsValid(nomorTelepon) == null &&
      RegisterValidation.nameIsValid(namaLengkap) == null &&
      RegisterValidation.passwordIsValid(kataSandi) == null &&
      RegisterValidation.passwordMatches(kataSandi, kataSandiKonfirmasi) ==
        null;

    setFormIsValid(isFormValid);

    if (formIsValid) {
      handleDaftar();
    }
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

          <View>
            <TextInputField
              label={"Nomor Telepon"}
              onChangeText={setNomorTelepon}
              validation={RegisterValidation.nomorTeleponIsValid}
            />
          </View>

          <View>
            <TextInputField
              label={"Nama Lengkap"}
              onChangeText={setNamaLengkap}
              validation={RegisterValidation.nameIsValid}
            />
          </View>

          <View>
            <TextInputField
              label={"Kata Sandi"}
              onChangeText={setKataSandi}
              validation={RegisterValidation.passwordIsValid}
            />
          </View>

          <View>
            <TextInputField
              label={"Konfirmasi Kata Sandi"}
              onChangeText={setKataSandiKonfirmasi}
              validation={RegisterValidation.passwordMatches}
            />
          </View>

          <View>
            <RadioButtonInputField
              placeholder={"Daftar sebagai:"}
              choice1={"Pelanggan"}
              choice2={"Penjual"}
            />
          </View>

          <View style={styles.centered}>
            <PrimaryButton
              placeholder={"Daftar"}
              onPress={handleValidation}
              disabled={formIsValid}
            />
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
});

export default Register;
