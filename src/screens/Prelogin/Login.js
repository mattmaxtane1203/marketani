import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Images from "../../constants/Images";
import TextInputField from "../../components/input/TextInputField";
import SubtitleButton from "../../components/input/SubtitleButton";
import LoginStyles from "../../styles/Prelogin/LoginStyles";

const Login = ({navigation}) => {
  
  return (
    <KeyboardAvoidingView style={LoginStyles.background && LoginStyles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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

            <Text style={LoginStyles.subtitle}>Belum Punya Akun?</Text>

            <SubtitleButton placeholder={"Daftar Akun"} onPress={() => navigation.navigate("Register")}/>

          </View>

        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default Login