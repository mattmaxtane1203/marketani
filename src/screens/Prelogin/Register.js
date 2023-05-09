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
import PrimaryButton from "../../components/input/PrimaryButton";
import SubtitleButton from "../../components/input/SubtitleButton";

const Register = ({navigation}) => {
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [kataSandi, setKataSandi] = useState("");

  const handleDaftar = () => {
    console.log(nomorTelepon);
    console.log(namaLengkap);
    console.log(kataSandi);
  };

  return (
    <KeyboardAvoidingView>
      <SafeAreaView>
        <ScrollView>

          <View style={(styles.centered, styles.sigMargin)}>
            <Text style={styles.header}>Daftar Akun</Text>
          </View>

          <View style={styles.container}>
            <View>
              <TextInputField
                label={"Nomor Telepon"}
                OnChange={setNomorTelepon}
              />
            </View>

            <View>
              <TextInputField label={"Nama Lengap"} OnChange={setNamaLengkap} />
            </View>

            <View>
              <TextInputField label={"Kata Sandi"} />
            </View>

            <View>
              <TextInputField
                label={"Konfirmasi Kata Sandi"}
                OnChange={setKataSandi}
              />
            </View>

            <View style={styles.centered}>
              <PrimaryButton
                placeholder={"Masuk"}
              ></PrimaryButton>
              <Text>Sudah Punya Akun?</Text>
              <SubtitleButton placeholder={"Login"} />
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
