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
import { useNavigation } from "@react-navigation/native";
import Images from "../../constants/Images";
import TextInputField from "../../components/input/TextInputField";
import SubtitleButton from "../../components/input/SubtitleButton";

const Login = ({navigation}) => {
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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

            <Text style={styles.subtitle}>Belum Punya Akun?</Text>

            <SubtitleButton placeholder={"Daftar Akun"} onPress={() => navigation.navigate("Register")}/>

          </View>

        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

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

  centered: {
    alignItems: "center"
  },

  subtitle: {
    fontSize: 16
  }
});

export default Login