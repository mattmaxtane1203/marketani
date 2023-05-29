import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import { useState } from "react";
import TextInputField from "../../components/input/TextInputField";
import PrimaryButton from "../../components/button/PrimaryButton";
import SubtitleButton from "../../components/button/SubtitleButton";
import { RegisterValidation } from "../../utils/RegisterValidation";
import RadioButtonInputField from "../../components/input/RadioButtonInputField";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

// TODO: Disable PrimaryButton if TextInputField still has error messages displayed

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
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
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

        <View style={styles.container}>
          <View>
            <TextInputField
              label={"Nomor Telepon"}
              onChangeText={setNomorTelepon}
              validation={RegisterValidation.nomorTeleponIsValid}
            />
          </View>

          <View>
            <TextInputField
              label={"Nama Lengap"}
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
            ></PrimaryButton>
            <Text style={styles.subtext}>Sudah Punya Akun?</Text>
            <SubtitleButton
              placeholder={"Login"}
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
    margin: 100,
    width: 200,
    height: 200,
  },

  scrollViewContainer: {
    flexDirection: "column",
  },

  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
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
