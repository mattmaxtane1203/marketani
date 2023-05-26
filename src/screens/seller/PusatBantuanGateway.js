import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dimensions } from "react-native";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import WishlistSearchBar from "../../components/input/WishlistSearchBar";
import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import SettingButton from "../../components/button/SettingButton";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const Stack = createNativeStackNavigator();

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const PusatBantuanGateway = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pusat Bantuan" component={PusatBantuan} />
    </Stack.Navigator>
  );
};

const PusatBantuan = () => {
  const sampleQuestion1 =
    "Apakah saya dapat menghubungi kurir secara langsung?";
  const sampleQuestion2 = "Dapatkah batas waktu proses pesanan diperpanjang?";
  const sampleQuestion3 =
    "Kurir belum melakukan pick up sampai batas waktu ditentukan";
  const sampleQuestion4 = "Bagaimana cara mendaftarkan toko di Marketani?";

  return (
    <SafeAreaView style={{ height: screenHeight }}>
      <View style={styles.sections}>
        <Text style={styles.headers}>Ada yang bisa dibantu?</Text>
        <WishlistSearchBar placeholder={"e.g. Cara ganti password"} />
      </View>
      <View style={styles.separator}></View>
      <View style={styles.sections}>
        <Text style={styles.headers}>FAQ</Text>
        <SettingButton placeholder={sampleQuestion1} />
        <SettingButton placeholder={sampleQuestion2} />
        <SettingButton placeholder={sampleQuestion3} />
        <SettingButton placeholder={sampleQuestion4} />
      </View>
      <View style={styles.separator}></View>
      <View style={styles.sections}>
        <Text style={styles.headers}>Topik Kendala</Text>
        <View style={styles.picBtnContainer}>
          <TouchableOpacity style={styles.picBtn}>
            <Icon
              name="user-circle"
              size={screenWidth * 0.1}
              color={"#48BD5B"}
              style={styles.icons}
            />
            <Text style={styles.picBtnLabels}>Akun & Toko</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.picBtn}>
            <Icon
              name="shopping-bag"
              size={screenWidth * 0.1}
              color={"#48BD5B"}
              style={styles.icons}
            />
            <Text style={styles.picBtnLabels}>Proses Pemesanan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.picBtn}>
            <Icon
              name="truck"
              size={screenWidth * 0.1}
              color={"#48BD5B"}
              style={styles.icons}
            />
            <Text style={styles.picBtnLabels}>Pengiriman</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.picBtn}>
            <Icon
              name="exclamation-circle"
              size={screenWidth * 0.1}
              color={"#48BD5B"}
              style={styles.icons}
            />
            <Text style={styles.picBtnLabels}>Komplain</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.picBtn}>
            <Icon
              name="money-check-alt"
              size={screenWidth * 0.1}
              color={"#48BD5B"}
              style={styles.icons}
            />
            <Text style={styles.picBtnLabels}>Akun & Toko</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#FFFFF0",
    height: screenHeight,
  },

  sections: {
    marginVertical: 18,
  },

  headers: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 0.05 * screenWidth,
    marginVertical: 0.01 * screenHeight,
  },

  separator: {
    width: screenWidth,
    height: 0.02 * screenHeight,
    backgroundColor: "#CDCDCD",
  },

  picBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },

  picBtn: {
    flexDirection: "column",
    alignItems: "center",
  },

  picBtnLabels: {
    fontSize: 12,
    width: 0.17 * screenWidth,
    textAlign: "center",
  },

  icons: {
    margin: 0.02 * screenWidth,
  },
});

export default PusatBantuanGateway;
