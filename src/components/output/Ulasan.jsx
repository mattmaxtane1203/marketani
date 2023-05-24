import { Image } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import Images from "../../constants/Images";
import StarRating from "react-native-star-rating";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Row } from "native-base";

const Ulasan = () => {
  const sampleRating = 4;
  const sampleReview =
    "Sip cabainya masih bagus-bagus Packingnya rapi Kurirnya juga ramah";
  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image
          source={Images.profilePictureSample}
          style={styles.profilePicture}
        />
        <View style={styles.ratingInformation}>
          <Text style={styles.username}>Matthew</Text>
          <Text style={{ color: "#808080" }}>{formattedDate}</Text>
        </View>
      </View>
      <View style={styles.reviewContainer}>
        <StarRating
          disabled
          maxStars={5}
          rating={sampleRating}
          fullStarColor={"#FFD700"}
          containerStyle={styles.starRating}
          starSize={15}
        />
        <Text>{sampleReview}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginVertical: 5,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  user: {
    flexDirection: "row",
    margin: 10,
  },

  ratingInformation: {
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  profilePicture: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },

  starRating: {
    width: 75,
    marginVertical: 10,
  },

  reviewContainer: {
    margin: 10,
  },

  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Ulasan;
