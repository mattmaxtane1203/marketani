import {
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import Images from "../../constants/Images";
import TextInputField from "../../components/input/TextInputField";
import SubtitleButton from "../../components/button/SubtitleButton";
import PrimaryButton from "../../components/button/PrimaryButton";

const Login = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.background && styles.keyboardAvoidingContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback>
        <SafeAreaView>
          <ScrollView>
            <Image source={Images.marketaniLogo} style={styles.logo} />

            <View style={styles.container}>
              <View>
                <TextInputField label={"Nomor Telepon"} />
              </View>

              <View>
                <TextInputField label={"Kata Sandi"} />
              </View>
            </View>

            <View style={styles.centered}>
              <PrimaryButton
                placeholder={"Masuk"}
                onPress={() => navigation.navigate("User Home")}
              />

              <Text style={styles.subtitle}>Belum Punya Akun?</Text>

              <SubtitleButton
                placeholder={"Daftar Akun"}
                onPress={() => navigation.navigate("Register")}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFFFF0",
  },

  logo: {
    alignSelf: "center",
    margin: 100,
    width: 200,
    height: 200,
  },

  keyboardAvoidingContainer: {
    flex: 1,
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
});

export default Login;
