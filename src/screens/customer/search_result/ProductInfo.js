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

const ProductInfo = ({ navigation }) => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const { productCount } = useContext(CartContext);

  const handleButtonPress = () => {
    setIsBoxVisible(!isBoxVisible);
  };

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
            placeholderName={"Tomat Hijau (500gr)"}
            placeholderSold={"5 rb+ terjual"}
            placeholderPrice={15000}
            productType1={"Konvensional"}
            productType1Color={"#EE1B1B"}
            productType2={"Import"}
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
                "Sayur Tomat Hijau memiliki kandungan zat gizi yang sama baiknya dengan tomat merah. Didatangkan dalam keadaan fresh dari tangan petani lokal. Dipanen diwaktu yang tepat dan disimpan dengan standart penjagaan mutu yang baik. Siap untuk diolah menjadi jus atau sebagai campuran sambal."
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
