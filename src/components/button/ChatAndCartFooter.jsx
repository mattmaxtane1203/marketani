import {
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { placeholder } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
import ProductType from "./ProductType";
import Icons from "../../constants/Icons";
import Images from "../../constants/Images";
import React, { useState, useContext, useReducer } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartProvider from "../../contexts/CartContext";

const ChatAndCartFooter = ({ onPress1, onPress2 }) => {
  const [contentToShow, setContentToShow] = useState("addToCart");
  const { productCount, setProductCount } = useContext(CartContext);

  const showAddToCart = () => {
    setContentToShow("addToCart");
    onPress2(true);
  };

  const showRemoveFromCart = () => {
    setContentToShow("removeFromCart");
    onPress2(false);
  };

  const decrementCount = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    } else {
      showAddToCart();
    }
  };

  const incrementCount = () => {
    setProductCount(productCount + 1);
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress1}>
          <View style={styles.chat}>
            <Image source={Icons.chatSeller} style={styles.iconChat}></Image>
          </View>
        </TouchableOpacity>
        {contentToShow === "addToCart" && (
          <>
            <TouchableOpacity onPress={showAddToCart}>
              <View style={styles.cartButton}>
                <Text style={styles.text}>+ Keranjang</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
        {contentToShow === "removeFromCart" && (
          <>
            <View style={styles.howManyProduct}>
              <TouchableOpacity onPress={decrementCount}>
                <View style={styles.border}>
                  <Text style={styles.minButton}>-</Text>
                </View>
              </TouchableOpacity>
              <Text style={styles.text2}>{productCount}</Text>
              <TouchableOpacity onPress={incrementCount}>
                <View style={styles.border}>
                  <Text style={styles.plusButton}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#48BD5B",
  },

  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  chat: {
    paddingHorizontal: 45,
  },

  iconChat: {
    width: 35,
    height: 35,
  },

  cartButton: {
    backgroundColor: "#48BD5B",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    width: 300,
  },

  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },

  howManyProduct: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    width: 300,
    gap: 30,
    borderLeftWidth: 2,
    borderLeftColor: "#48BD5B",
  },

  border: {
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#48BD5B",
  },

  minButton: {
    fontSize: 25,
    color: "#48BD5B",
  },

  text2: {
    fontSize: 20,
    color: "black",
  },

  plusButton: {
    fontSize: 25,
    color: "#48BD5B",
  },
});

export default ChatAndCartFooter;
