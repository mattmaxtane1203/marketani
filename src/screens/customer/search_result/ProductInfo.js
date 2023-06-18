import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useContext } from "react";
import Icons from "../../../constants/Icons";
import Images from "../../../constants/Images";
import BackButton from "../../../components/button/BackButton";
import SearchResultBar from "../../../components/input/SearchResultBar";
import ProductInformation from "../../../components/button/ProductInformation";
import ProductShop from "../../../components/button/ProductShop";
import ProductDescription from "../../../components/button/ProductDescription";
import ProductReview from "../../../components/button/ProductReview";
import ChatAndCartFooter from "../../../components/button/ChatAndCartFooter";
import { CartContext } from "../../../contexts/CartContext";
import numeral from "numeral";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect } from "react";

// Matthew IP
const currentIP = "192.168.18.6";

// Glennix IP
// const currentIP = "192.168.0.158";

// Bima IP
// const currentIP = "192.168.0.100";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const ProductInfo = ({ navigation }) => {
  const route = useRoute();
  const { productId } = route.params;

  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `http://${currentIP}:8081/product/getProduct/${productId}`
      );
      setProduct(response.data.product);
    } catch (error) {
      console.error("Error occurred while fetching product:", error.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId, navigation]);

  // Handle adding the current product to the cart
  const handleAddToCart = () => {
    addToCart(productId, 1, product.sellerId); // Add the product to the cart with a quantity of 1
    setQuantity(1); // Set the quantity to 1
  };

  // Handle removing the current product from the cart
  const handleRemoveFromCart = () => {
    removeFromCart(productId); // Remove the product from the cart
    setQuantity(0); // Set the quantity to 0
  };

  // Handle increasing the quantity of the current product in the cart
  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1;
    if (newQuantity <= product.stok) {
      addToCart(productId, 1, product.sellerId);
      setQuantity(newQuantity);
      console.log(`Quantity increased to ${newQuantity}`);
    } else {
      Alert.alert("Stok tidak cukup");
    }
  };

  // Handle decreasing the quantity of the current product in the cart
  const handleDecreaseQuantity = () => {
    if (quantity === 1) {
      handleRemoveFromCart(); // If the quantity is 1, remove the product from the cart
    } else {
      addToCart(productId, -1, product.sellerId); // Decrease the quantity of the product in the cart by 1
      setQuantity(quantity - 1); // Update the quantity state
      console.log(`Quantity decreased to ${quantity - 1}`);
    }
  };

  // Check if the current product is already in the cart
  const isInCart = cartItems.some((item) => item.productId === productId);

  return (
    <View style={ProductInfoStyle.background}>
      <SafeAreaView>
        <View style={ProductInfoStyle.header}>
          <BackButton onPress={() => navigation.goBack()}></BackButton>
          <SearchResultBar
            placeholder={"Cari disini"}
            onPress={() => navigation.navigate()}
          />
        </View>
        <View style={ProductInfoStyle.filterMenu}>
          <Text style={ProductInfoStyle.filter}>Filter</Text>
        </View>

        <ScrollView stickyHeaderIndices={[]}>
          <ProductInformation
            productImage={Images.tomatHijau}
            placeholderName={product.nama_produk}
            placeholderSold={product.amount_sold}
            placeholderPrice={product.harga_per_pesanan}
            placeholderBerat={product.berat_per_pesanan}
            productType1={product.metode_pengembangan}
            productType1Color={"#EE1B1B"}
            productType2={product.asal_produk}
            productType2Color={"#FFB800"}
            star1={Icons.starFull}
            star2={Icons.starFull}
            star3={Icons.starFull}
            star4={Icons.starEmpty}
            star5={Icons.starEmpty}
          />

          <View style={ProductInfoStyle.shopContainer}>
            <ProductShop
              onPress={() => navigation.navigate()}
              shopPicture={Images.shopPictureSample}
              placeholderShopName={"Fresh Shop"}
              placeholderLocation={"Kota Depok"}
              star1={Icons.starFull}
              star2={Icons.starFull}
              star3={Icons.starFull}
              star4={Icons.starFull}
              star5={Icons.starEmpty}
            />
          </View>

          <View style={ProductInfoStyle.productDescription}>
            <ProductDescription placeholderDescription={product.deskripsi} />
          </View>

          <View style={ProductInfoStyle.productReview}>
            <View style={ProductInfoStyle.reviewHeader}>
              <Text style={ProductInfoStyle.titleReview}>Penilaian Produk</Text>
              <View style={ProductInfoStyle.border}>
                <Text style={ProductInfoStyle.totalReview}>10 rb+ ulasan</Text>
              </View>
            </View>
            <View style={ProductInfoStyle.userReview}>
              <ProductReview
                userPicture={Images.profilePicture1}
                placeholderName={"Dono"}
                placeholderComment={"Enggak Enak ..."}
                star1={Icons.starFull}
                star2={Icons.starEmpty}
                star3={Icons.starEmpty}
                star4={Icons.starEmpty}
                star5={Icons.starEmpty}
              />
              <ProductReview
                userPicture={Images.profilePicture2}
                placeholderName={"Kasino"}
                placeholderComment={"Mantap ... masih fresh"}
                star1={Icons.starFull}
                star2={Icons.starFull}
                star3={Icons.starFull}
                star4={Icons.starFull}
                star5={Icons.starEmpty}
              />
            </View>
          </View>

          {isInCart ? ( // Render plus/minus buttons and quantity if the product is in the cart
            <View style={ProductInfoStyle.stickyButtonContainer}>
              <TouchableOpacity onPress={handleDecreaseQuantity}>
                <Text style={ProductInfoStyle.textStyle1}>-</Text>
              </TouchableOpacity>
              <View style={ProductInfoStyle.totalProduct}>
                <Text style={ProductInfoStyle.textStyle2}>{quantity}</Text>
              </View>
              <TouchableOpacity onPress={handleIncreaseQuantity}>
                <Text style={ProductInfoStyle.textStyle1}>+</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={ProductInfoStyle.stickyButtonContainer}
              onPress={handleAddToCart}
            >
              <Text style={ProductInfoStyle.text}>Add to Cart</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const ProductInfoStyle = StyleSheet.create({
  background: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    paddingBottom: screenHeight * 0.135,
  },

  scrollViewContent: {
    paddingBottom: screenHeight * 0.135,
  },

  stickyButtonContainer: {
    backgroundColor: "#FFB800",
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  header: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomColor: "#CFCFCF",
    borderBottomWidth: 0.5,
    backgroundColor: "white",
  },

  filterMenu: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomColor: "#CFCFCF",
    borderBottomWidth: 0.5,
    backgroundColor: "white",
  },

  filter: {
    fontSize: 16,
    color: "#009BB9",
  },

  shopContainer: {
    marginTop: 20,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    borderTopColor: "#CFCFCF",
    borderTopWidth: 0.5,
  },

  productDescription: {
    marginTop: 20,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopColor: "#CFCFCF",
    borderTopWidth: 0.5,
    borderBottomColor: "#CFCFCF",
    borderBottomWidth: 0.5,
  },

  productReview: {
    marginTop: 20,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopColor: "#CFCFCF",
    borderTopWidth: 0.5,
  },

  reviewHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  titleReview: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },

  border: {
    borderRadius: 10,
    backgroundColor: "#CFCFCF",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  totalReview: {
    fontSize: 12,
    color: "#000000",
  },

  userReview: {
    marginTop: 10,
  },

  productInCart: {
    backgroundColor: "#FFB800",
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  totalProduct: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  textStyle1: {
    color: "white",
    fontSize: 20,
    paddingHorizontal: 10,
  },

  textStyle2: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },

  cartButton: {
    backgroundColor: "#FFB800",
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductInfo;
