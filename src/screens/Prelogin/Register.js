import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import TextInputField from "../../components/input/TextInputField";
import PrimaryButton from "../../components/button/PrimaryButton";
import SubtitleButton from "../../components/button/SubtitleButton";
import { RegisterValidation } from "../../utils/RegisterValidation";
import RadioButtonInputField from "../../components/input/RadioButtonInputField";

// TODO: Fix TextInputField red highlighting mechanisms for errors

const Register = ({ navigation }) => {
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [kataSandi, setKataSandi] = useState("");
  const [kataSandiKonfirmasi, setKataSandiKonfirmasi] = useState("");

  function handleDaftar() {
    console.log(nomorTelepon);
    console.log(namaLengkap);
    console.log(kataSandi);
    console.log(kataSandiKonfirmasi);
    navigation.navigate("User Home");
  }

  function navigate() {
    navigation.navigate("Login");
  }

  return (
    <ScrollView>
      <View style={(styles.centered, styles.sigMargin)}>
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
            onPress={handleDaftar}
          ></PrimaryButton>
          <Text style={styles.subtext}>Sudah Punya Akun?</Text>
          <SubtitleButton placeholder={"Login"} onPress={navigate} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
    margin: 100,
    width: 200,
    height: 200,
  },

  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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

  sigMargin: {
    margin: 100,
  },
});

export default Register;
