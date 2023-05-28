import { Dimensions } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const PesananListItem = ({
  productName,
  productPrice,
  quantity,
  productPhoto,
  username,
  userPhoto,
  OnPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={OnPress}>
      <View style={[styles.userContainer, styles.margined]}>
        <Image style={styles.userPhoto} source={userPhoto} />
        <Text style={styles.label}>{username}</Text>
      </View>
      <View style={[styles.productContainer, styles.margined]}>
        <Image style={styles.productPhoto} source={productPhoto} />
        <View style={styles.productInformation}>
          <Text style={styles.productLabel}>{productName}</Text>
          <Text style={styles.productLabel}>{productPrice}</Text>
          <Text style={styles.productLabel}>Kuantitas: {quantity}x</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  margined: {
    margin: 0.02 * screenWidth,
  },

  container: {
    flexDirection: "column",
    borderWidth: 1,
    marginVertical: 0.02 * screenWidth,
    marginHorizontal: 0.03 * screenWidth,
    borderRadius: 10,
    borderColor: "#DEDEDE",
  },

  productInformation: {
    flexDirection: "column",
  },

  productContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  productPhoto: {
    width: 0.1 * screenWidth,
    height: 0.1 * screenWidth,
    borderRadius: 5,
  },

  userPhoto: {
    width: 0.1 * screenWidth,
    height: 0.1 * screenWidth,
    borderRadius: 40,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 8,
  },

  productLabel: {
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 8,
  },
});

export default PesananListItem;
