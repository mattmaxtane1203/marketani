import {
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import ShopName from "./ShopName";
import Checkbox from "expo-checkbox";
import Images from "../../../constants/Images";
import { CartContext } from "../../../contexts/CartContext";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const ShopList = ({ onPress, productImage, title, price, quantity }) => {
  const [isChecked, setChecked] = useState(false);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.ShopListBox}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#48BD5B" : undefined}
        />
        <Image source={productImage} style={styles.Image} />
        <View style={styles.productInfo}>
          <Text numberOfLines={1} style={styles.productName}>
            {title}
          </Text>
          <Text style={styles.productPrice}>{price}</Text>
          <View style={styles.row}>
            <TouchableOpacity>
              <AntDesign name="minuscircleo" size={24} color="#48BD5B" />
            </TouchableOpacity>
            <Text marginHorizontal={20}>{quantity}</Text>
            <TouchableOpacity>
              <AntDesign name="pluscircleo" size={24} color="#48BD5B" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ShopListBox: {
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    paddingBottom: 25,
  },
  checkbox: {
    marginLeft: 20,
  },
  Image: {
    width: 80,
    height: 80,
    marginLeft: 20,
    marginRight: 10,
    borderRadius: 15,
  },
  productInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginStart: 12,
  },
  productPrice: {
    fontSize: 15,
    marginTop: 4,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    marginVertical: screenHeight * 0.015,
  },
});

export default ShopList;
