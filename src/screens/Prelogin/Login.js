import {
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback
} from "react-native";
import Images from "../../constants/Images";
import TextInputField from "../../components/input/TextInputField";
import SubtitleButton from "../../components/button/SubtitleButton";
import LoginStyles from "../../styles/Prelogin/LoginStyles";
import PrimaryButton from "../../components/button/PrimaryButton";

// TODO: Fix KeyboardAvoidingView

const Login = ({ navigation }) => {

  return (
    <KeyboardAvoidingView
      style={LoginStyles.background && LoginStyles.keyboardAvoidingContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback>
        <SafeAreaView>
          <ScrollView>
            <Image source={Images.marketaniLogo} style={LoginStyles.logo} />

            <View style={LoginStyles.container}>
              <View>
                <TextInputField label={"Nomor Telepon"} />
              </View>

              <View>
                <TextInputField label={"Kata Sandi"} />
              </View>
            </View>

            <View style={LoginStyles.centered}>
              <PrimaryButton placeholder={"Masuk"} onPress={() => navigation.navigate("User Home")}/>

              <Text style={LoginStyles.subtitle}>Belum Punya Akun?</Text>

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

export default Login;
