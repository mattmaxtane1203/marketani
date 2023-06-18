import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
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

// // Matthew IP
// const currentIP = "192.168.18.6";

// Glennix IP
const currentIP = "192.168.0.158";

// // Bima IP
// const currentIP = "192.168.0.100";

const ProductInfo = ({ navigation }) => {
  const route = useRoute();
  const { productId } = route.params;

  const [product, setProduct] = useState([]);
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const { productCount } = useContext(CartContext);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `http://${currentIP}:8081/product/getProduct/${productId}`
      );
      setProduct(response.data.product);
      // console.log(product.nama_produk);
    } catch (error) {
      console.error('Error occurred while fetching product:', error.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    console.log(product);
  }, [product]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        // Clean up the effect when the screen loses focus
        setProduct([]);
      };
    }, [])
  );

  const handleButtonPress = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  console.log("Product being Viewed: " + productId);

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
            <ProductDescription
              placeholderDescription={
                product.deskripsi
              }
            />
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
      {isBoxVisible && (
        <TouchableOpacity onPress={() => navigation.navigate()}>
          <View style={ProductInfoStyle.productInCart}>
            <View style={ProductInfoStyle.totalProduct}>
              <Text style={ProductInfoStyle.textStyle1}>Total</Text>
              <Text style={ProductInfoStyle.textStyle2}>
                {productCount} Produk
              </Text>
            </View>
            <View style={ProductInfoStyle.totalPrice}>
              <Text style={ProductInfoStyle.textStyle2}>
                Rp{numeral(productCount * 15000).format("0,0")}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      <View style={ProductInfoStyle.footerContainer}>
        <ChatAndCartFooter
          onPress1={() => navigation.navigate("Chat Seller")}
          onPress2={handleButtonPress}
        />
      </View>
    </View>
  );
};

const ProductInfoStyle = StyleSheet.create({
  background: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    paddingBottom: 190,
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
    color: "#48BD5B",
    fontWeight: "500",
  },

  shopContainer: {
    marginTop: 10,
  },

  productDescription: {
    marginVertical: 10,
  },

  productReview: {
    display: "flex",
    backgroundColor: "white",
    marginBottom: 200,
  },

  reviewHeader: {
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

  border: {
    display: "flex",
    flexDirection: "row",
  },

  totalReview: {
    fontSize: 12,
    color: "white",
    backgroundColor: "#0194D4",
    paddingHorizontal: 10,
    borderRadius: 30,
  },

  userReview: {
    display: "flex",
  },

  productInCart: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    marginBottom: 23,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#48BD5B",
    marginHorizontal: 15,
    paddingHorizontal: 25,
    paddingVertical: 7,
    borderRadius: 30,
  },

  totalProduct: {
    display: "flex",
    flexDirection: "column",
  },

  totalPrice: {
    display: "flex",
  },

  textStyle1: {
    fontSize: 14,
    color: "white",
  },

  textStyle2: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});

export default ProductInfo;
