import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icons from "../../../constants/Icons";
import Images from "../../../constants/Images";
import BackButton from "../../../components/button/BackButton";
import CartSearchBar from "../../../components/input/CartSearchBar";
import ListToko from "./ShopList";
import ShopList from "./ShopList";
import ShopName from "./ShopName";
import { CartContext } from "../../../contexts/CartContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

// Steps
// Nge-fetch items yang ada di Cart Context
// Map semua items di custom component "ShopList"
// Di component ShopList, bikin function di mana kalo pencet plus dan minus button, quantity dari item tersebut di Cart bisa ganti (tambah atau kurangin)
// Bikin button Checkout untuk bikin Transaction Header dan Details
    // Ingat kalo setiap Transaction Header itu per Seller
    // Kalo misalkan ada dua item dari beda seller, harus dua transaction yang berbeda
// Kalo checkout
    // Post semua item yang ada di cart ke transaction masing-masing
    // Display transactionnya di daftar transaction di customer dan seller
    // Cartnya di-empty


const CartPage = ({ navigation }) => {
  const [product, setProduct] = useState([]);
  const { cartItems } = useContext(CartContext);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `http://${currentIP}:8081/product/getProduct/${item.productId}`
      );
      setProduct(response.data.product);
    } catch (error) {
      console.error("Error occurred while fetching product:", error.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <View style={style.background}>
      <SafeAreaView>
        <View style={style.header}>
          <BackButton onPress={() => navigation.navigate()} />
          <CartSearchBar placeholder={"Cari Produk"} />
        </View>

        <ScrollView>
          {cartItems.map((item) => (
            <View style={style.container} key={item.productId}>
              <View>
                <ShopName ShopText={"Seller ID: " + item.sellerId} />
                <ShopList
                  productImage={Images.tomatHijau}
                  title={item.productId}
                  price={item.productId}
                  quantity={item.quantity}
                />
              </View>
            </View>
          ))}

          {/* <View style={style.container}>
                        <View>
                            <ShopName ShopText="Fresh Shop" />
                            <ShopList
                                productImage={Images.tomatHijau}
                                title={"Tomat Hijau (500gr)"}
                                price={"Rp15.000"}
                            />
                        </View>
                    </View> */}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  background: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  headerBackground: {
    backgroundColor: "#F1F1F1",
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomColor: "#CFCFCF",
    borderBottomWidth: 0.5,
  },
  container: {
    paddingTop: 10,
    borderColor: "#F1F1F1",
    borderTopWidth: 10,
  },
});

export default CartPage;
