import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import Icons from "../../constants/Icons";
import StarRating from "react-native-star-rating";
import PictureButton from "../../components/button/PictureButton";

// TODO: Change profile picture into a view that is circular in shape
// TODO: Put pictures for each picture button
// TODO: Add pulldown to refresh

const TokoSaya = ({ navigation }) => {
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

      <View style={styles.directoryContainer}>
        <View style={styles.buttonsRow}>
          <View style={styles.button}>
            <PictureButton
              label={"Produk"}
              imageSource={Icons.product}
              color={"#48BD5B"}
              onPress={() => navigation.navigate("Produk")}
            />
          </View>

          <View style={styles.button}>
            <PictureButton
              label={"Ulasan"}
              imageSource={Icons.product}
              color={"#FFE600"}
              onPress={() => navigation.navigate("Ulasan")}
            />
          </View>

          <View style={styles.button}>
            <PictureButton
              label={"Pesanan"}
              imageSource={Icons.product}
              color={"#FFB800"}
              onPress={() => navigation.navigate("Pesanan")}
            />
          </View>
        </View>

        <View style={styles.buttonsRow}>
          <View style={styles.button}>
            <PictureButton
              label={"Pusat Bantuan"}
              imageSource={Icons.product}
              color={"#1BC2E7"}
              onPress={() => navigation.navigate("Pusat Bantuan")}
            />
          </View>

          <View style={styles.button}>
            <PictureButton
              label={"Chat"}
              imageSource={Icons.product}
              color={"#FF7A00"}
              onPress={() => navigation.navigate("Chat")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#FFFFF0",
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
    paddingLeft: 20,
    // borderColor: "brown",
    // borderWidth: 1,
  },

  storeContainer: {
    flexDirection: "row",
    margin: 20,
    paddingBottom: 20,
    // borderBottomWidth: 1,
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
