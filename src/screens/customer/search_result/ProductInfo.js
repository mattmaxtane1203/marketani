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
// const currentIP = "192.168.18.6";

// Glennix IP
// const currentIP = "192.168.0.158";

// Bima IP
// const currentIP = "192.168.0.100";

// Nadia IP
const currentIP = "192.168.0.103";

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
        </ScrollView>
      </SafeAreaView>
      {isInCart ? ( // Render plus/minus buttons and quantity if the product is in the cart
            <View style={ProductInfoStyle.stickyButtonContainer2}>
              <TouchableOpacity onPress={handleDecreaseQuantity}>
                <View style={ProductInfoStyle.border}>
                <Text style={ProductInfoStyle.textStyle1}>-</Text>
                </View>
              </TouchableOpacity>
              <View style={ProductInfoStyle.totalProduct}>
                <Text style={ProductInfoStyle.textStyle2}>{quantity}</Text>
              </View>
              <TouchableOpacity onPress={handleIncreaseQuantity}>
                <View style={ProductInfoStyle.border}>
                <Text style={ProductInfoStyle.textStyle1}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={ProductInfoStyle.stickyButtonContainer}>
              <TouchableOpacity>
              <View style={ProductInfoStyle.chatContainer}>
                  <Image source={Icons.chatSeller} style={ProductInfoStyle.iconChat}></Image>
              </View>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={handleAddToCart}>
                <View style={ProductInfoStyle.keranjangContainer}>
                  <Text style={ProductInfoStyle.text}>+ Keranjang</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
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

  footerContainer: {
    display: "flex",
    flexDirection: "row",
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
    marginTop: 10,
    backgroundColor: "white",
  },

  productDescription: {
    marginTop: 10,
    backgroundColor: "white",
    paddingBottom: 20
  },

  productReview: {
    marginTop: 10,
    backgroundColor: "white",
    marginBottom: 200
  },

  reviewHeader:{
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 20,
    marginTop: 10,
    paddingBottom: 20,
    gap: 5,
    borderBottomColor: "#CFCFCF",
    borderBottomWidth: 0.5,
},

  titleReview: {
    fontSize: 16,

  },

  border:{
    display: "flex",
    flexDirection: "row"
},
totalReview:{
    fontSize: 12,
    color: "white",
    backgroundColor: '#0194D4',
    paddingHorizontal: 10,
    borderRadius: 30
},
userReview:{
    display: "flex"
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
    color: "#48BD5B",
    fontSize: 30,
    paddingHorizontal: 10,
  },

  textStyle2: {
    color: "black",
    fontSize: 20,
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

  text:{
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },

  iconChat:{
    width: 35,
    height: 35,
    marginHorizontal: 45,
    marginVertical: 15,
  },

  chatContainer:{
    display: "flex",
    borderRightColor: "#48BD5B",
    borderRightWidth: 1,
  },

  keranjangContainer:{
    backgroundColor: '#48BD5B',
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16.5,
    width: 300
  },

  stickyButtonContainer: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: "#48BD5B",
    width: "100%"
  },

  stickyButtonContainer2: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: "#48BD5B",
    width: "100%"
  },

//   border:{
//     width: 50,
//     height: 50,
//     display: "flex",
//     alignItems: "center",
//     borderRadius: 100,
//     borderWidth: 1,
//     borderColor: "#48BD5B"
// },


});

export default ProductInfo;
