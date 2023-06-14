import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import Icons from "../../../constants/Icons";
import LargeIconButton from "../../../components/button/LargeIconButton";
import PreloginGateway from "../../prelogin/PreloginGateway";

const Stack = createNativeStackNavigator();

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Profile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileMenu" component={ProfileMenu} />
      {/* TODO: Add Pengaturan Akun and Pusat Bantuan */}
    </Stack.Navigator>
  );
};

const ProfileMenu = ({ navigation }) => {
  // TODO: Fetch Customer Information on load
  const sampleName = "Matthew Maximillian Tane";
  const sampleLocation = "Jakarta Barat";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.storeContainer}>
        <Image
          source={Icons.profilePicture}
          style={styles.storeProfilePicture}
        />
        <View style={styles.storeInformationContainer}>
          <Text style={styles.label}>{sampleName}</Text>

          <View style={styles.row}>
            <Image source={Icons.locationPin} style={styles.locationPin} />
            <Text style={styles.label}>{sampleLocation}</Text>
          </View>
        </View>
      </View>

      {/* Account Buttons */}
      <View>
        <LargeIconButton
          iconName={"cog"}
          placeholder={"Pengaturan Toko"}
          // onPress={() => navigation.navigate("Pengaturan Akun")}
        />
        <LargeIconButton
          iconName={"info-circle"}
          placeholder={"Pusat Bantuan"}
          // onPress={() => navigation.navigate("Pusat Bantuan")}
        />
        <LargeIconButton
          iconName={"sign-out-alt"}
          placeholder={"Keluar Akun"}
          isRed={true}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  storeInformationContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginLeft: 20,
    // borderColor: "brown",
    // borderWidth: 1,
  },

  storeContainer: {
    flexDirection: "row",
    margin: 20,
    paddingBottom: 20,
    // borderWidth: 1,
  },

  storeProfilePicture: {
    height: 75,
    width: 75,
  },

  label: {
    fontSize: 16,
  },

  starRating: {
    width: 75,
  },

  locationPin: {
    width: 12,
    height: 12,
  },

  directoryContainer: {
    flexDirection: "column",
  },

  buttonsRow: {
    flexDirection: "row",
    // flexWrap: "wrap",
    // paddingHorizontal: 20,
  },

  button: {
    paddingHorizontal: 40,
  },
});

export default Profile;
