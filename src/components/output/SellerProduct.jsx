import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Images from "../../constants/Images";
import { Button } from "react-native";

// TODO: Dedicated props for price and units for mass

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const SellerProduct = ({
  productName,
  productPrice,
  stock,
  amountSold,
  beriDiskonOnPress = () => {},
  ulasanOnPress = () => {},
  ubahOnPress = () => {},
  showButtons,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.productInformation}>
        <View style={styles.headers}>
          <Image source={Images.cabaiSample} style={styles.productImage} />
          <View style={styles.productLabels}>
            <Text style={styles.heading}>{productName}</Text>
            <Text style={styles.subheading}>{productPrice}</Text>
          </View>
        </View>
        <View style={styles.stockInformation}>
          {/* TODO: Add icons */}
          <Text>Stok: {stock}</Text>
          <Text>Terjual: {amountSold}</Text>
        </View>
      </View>
      {showButtons && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={beriDiskonOnPress}>
            <Text style={{ fontSize: 12 }}>Beri Diskon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={ulasanOnPress}>
            <Text style={{ fontSize: 12 }}>Ulasan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={ubahOnPress}>
            <Text style={{ fontSize: 12 }}>Ubah</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 0.85 * screenWidth,
    height: 0.17 * screenHeight,
    borderWidth: 1,
    borderColor: "#DEDEDE",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  productImage: {
    width: 45,
    height: 45,
    borderRadius: 5,
    // marginRight: 10,
    // marginBottom: 10,
  },

  productInformation: {
    flexDirection: "column",
  },

  headers: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    // borderWidth: 1,
  },

  productLabels: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 10,
    // borderWidth: 1,
  },

  stockInformation: {},

  buttonsContainer: {
    justifyContent: "space-between",
  },

  button: {
    borderWidth: 1,
    borderColor: "#DEDEDE",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",

    width: 74,
    height: 29,
  },

  heading: {
    fontWeight: "bold",
    fontSize: 16,
  },

  subheading: {
    fontSize: 15,
  },
});

export default SellerProduct;
