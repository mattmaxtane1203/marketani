import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import Icons from "../../constants/Icons";
import StarRating from "react-native-star-rating";
import LargeIconButton from "../../components/button/LargeIconButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PengaturanToko from "./pengaturantoko/PengaturanToko";
import PusatBantuanGateway from "./pusatbantuan/PusatBantuanGateway";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// TODO: Change profile picture into a view that is circular in shape
// TODO: End session if log out
// TODO: Fetch store name, profile picture, rating and location from database on load

const Stack = createNativeStackNavigator();

const TokoSaya = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main Menu" component={TokoSayaMenu} />
      <Stack.Screen
        name="Pengaturan Toko"
        component={PengaturanToko}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Pusat Bantuan"
        component={PusatBantuanGateway}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

const TokoSayaMenu = ({ navigation }) => {
  const currentSeller = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    console.log(currentSeller);
  }, []);

  const sampleRating = 3;
  const sampleNamaToko = "Sayur Segar";
  const sampleLocation = "Jakarta Barat";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.storeContainer}>
        <Image
          source={Icons.profilePicture}
          style={styles.storeProfilePicture}
        />
        <View style={styles.storeInformationContainer}>
          <Text style={styles.label}>{sampleNamaToko}</Text>
          <StarRating
            disabled
            maxStars={5}
            rating={sampleRating}
            fullStarColor={"#FFD700"}
            containerStyle={styles.starRating}
            starSize={15}
          />

          <View style={styles.row}>
            <Image source={Icons.locationPin} style={styles.locationPin} />
            <Text style={styles.label}>{sampleLocation}</Text>
          </View>
        </View>
      </View>

      <View>
        <LargeIconButton
          iconName={"cog"}
          placeholder={"Pengaturan Toko"}
          onPress={() => navigation.navigate("Pengaturan Toko")}
        />
        <LargeIconButton
          iconName={"info-circle"}
          placeholder={"Pusat Bantuan"}
          onPress={() => navigation.navigate("Pusat Bantuan")}
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

export default TokoSaya;
