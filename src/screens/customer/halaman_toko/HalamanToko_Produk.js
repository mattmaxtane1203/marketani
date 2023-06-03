import {
    ScrollView,
    Text,
    StyleSheet,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity
  } from "react-native";
  import Icons from "../../../constants/Icons";
  import Images from "../../../constants/Images";
  import BackButton from "../../../components/button/BackButton";
  import WishlistSearchBar from "../../../components/input/WishlistSearchBar";
import WishlistBox from "../../../components/button/WishlistBox";
import WishlistBoxDiscount from "../../../components/button/WishlistBoxDiscount";
import SearchResultBar from "../../../components/input/SearchResultBar";
import ProductInformation from "../../../components/button/ProductInformation";
import ProductShop from "../../../components/button/ProductShop";
import ProductDescription from "../../../components/button/ProductDescription";
import ProductReview from "../../../components/button/ProductReview";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HalamanTokoProduk from "../../../components/button/HalamanTokoProduk";
import HalamanToko_Ulasan from "./HalamanToko_Ulasan";
import { Component } from "react";

const HalamanToko_Product = ({navigation}) => {
    return(
        <View style={HalamanTokoStyle.background}>
            <SafeAreaView>
                <View style={HalamanTokoStyle.header}>
                    <BackButton onPress={() => navigation.navigate()}></BackButton>
                    <SearchResultBar placeholder={"Cari disini"} onPress={() => navigation.navigate()}/>
                </View>
                <ScrollView>
                    <View style={HalamanTokoStyle.container}>
                        <View style={HalamanTokoStyle.shopContainer}>
                            <HalamanTokoProduk
                                onPress1={() => navigation.navigate()}
                                shopPicture={Images.shopPictureSample}
                                placeholderShopName={"Fresh Shop"}
                                placeholderLocation={"Kota Depok"}
                                star1={Icons.starFull}
                                star2={Icons.starFull}
                                star3={Icons.starFull}
                                star4={Icons.starFull}
                                star5={Icons.starEmpty}
                                onPress2={() => navigation.navigate()}
                                onPress3={() => navigation.navigate()}
                            />
                        </View>
                        <View style={HalamanTokoStyle.produkAndUlasan}>
                            <View style={HalamanTokoStyle.chooseProduct}>
                                <TouchableOpacity>
                                    <Text style={HalamanTokoStyle.produkButton}>Produk</Text>
                                </TouchableOpacity>
                                <View style={HalamanTokoStyle.greenLine}></View>
                            </View>
                            <View style={HalamanTokoStyle.chooseProduct}>
                                <TouchableOpacity onPress={() => navigation.navigate("Halaman Toko Ulasan")}>
                                    <Text style={HalamanTokoStyle.ulasanButton}>Ulasan</Text>
                                </TouchableOpacity>
                                {/* <View style={HalamanTokoStyle.greenLine}></View> */}
                            </View>
                        </View>
                        <View style={HalamanTokoStyle.productContainer}>
                            <WishlistBox
                                onPress={() => navigation.navigate()}
                                productImages={Images.tomatMerah}
                                placeholderName={"Tomat Merah (500gr)"}
                                productType1={"Konvensional"}
                                productType1Color={'#EE1B1B'}
                                productType2={"Lokal"}
                                productType2Color={'#9747FF'}
                                placeholderPrice={"Rp10.000"}
                                placeholderLocation={"Bekasi"}
                                star1={Icons.starFull}
                                star2={Icons.starFull}
                                star3={Icons.starFull}
                                star4={Icons.starFull}
                                star5={Icons.starEmpty}
                            />

                            <WishlistBox
                                onPress={() => navigation.navigate()}
                                productImages={Images.tomatHijau}
                                placeholderName={"Tomat Hijau (500gr)"}
                                productType1={"Konvensional"}
                                productType1Color={'#EE1B1B'}
                                productType2={"Import"}
                                productType2Color={'#FFB800'}
                                placeholderPrice={"Rp15.000"}
                                placeholderLocation={"Depok"}
                                star1={Icons.starFull}
                                star2={Icons.starFull}
                                star3={Icons.starFull}
                                star4={Icons.starEmpty}
                                star5={Icons.starEmpty}
                            />

                            <WishlistBoxDiscount
                                onPress={() => navigation.navigate()}
                                productImages={Images.tomatCherry}
                                placeholderName={"Tomat Cherry (300gr)"}
                                productType1={"Konvensional"}
                                productType1Color={'#EE1B1B'}
                                productType2={"Import"}
                                productType2Color={'#FFB800'}
                                placeholderNormalPrice={"Rp20.000"}
                                placeholderDiscountPrice={"Rp15.000"}
                                placeholderLocation={"Bekasi"}
                                star1={Icons.starFull}
                                star2={Icons.starFull}
                                star3={Icons.starFull}
                                star4={Icons.starFull}
                                star5={Icons.starEmpty}
                            />

                            <WishlistBox
                                onPress={() => navigation.navigate()}
                                productImages={Images.tomatManis}
                                placeholderName={"Tomat Manis (300gr)"}
                                productType1={"Hidroponik"}
                                productType1Color={'#00B0FC'}
                                productType2={"Lokal"}
                                productType2Color={'#9747FF'}
                                placeholderPrice={"Rp12.000"}
                                placeholderLocation={"Bekasi"}
                                star1={Icons.starFull}
                                star2={Icons.starFull}
                                star3={Icons.starFull}
                                star4={Icons.starFull}
                                star5={Icons.starEmpty}
                            />

                            <WishlistBoxDiscount
                                onPress={() => navigation.navigate()}
                                productImages={Images.tomatMerah2}
                                placeholderName={"Tomat Merah (500gr)"}
                                productType1={"Organik"}
                                productType1Color={'#48BD5B'}
                                productType2={"Lokal"}
                                productType2Color={'#9747FF'}
                                placeholderNormalPrice={"Rp20.000"}
                                placeholderDiscountPrice={"Rp15.000"}
                                placeholderLocation={"Bekasi"}
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
        </View>
    )
}

const HalamanTokoStyle = StyleSheet.create({
    background:{
        backgroundColor:"white"
    },

    header:{
        display: "flex",
        justifyContent:"flex-start",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomColor: "#CFCFCF",
        borderBottomWidth: 0.5,
        backgroundColor: "white"
    },

    container:{
        display: "flex",
        flexDirection: "column"
    },

    shopContainer:{
        marginTop: 10,

    },

    produkAndUlasan:{
        display: "flex",
        flexDirection: "row",
        marginStart: 20
    },

    chooseProduct:{
        display: "flex",
        flexDirection: "column",
        gap: 5
    },

    greenLine:{
        width: "100%",
        height: 3,
        backgroundColor: '#48BD5B',
        borderRadius: 100
    },

    produkButton:{
        fontSize: 16,
        color: '#48BD5B',
        fontWeight: "bold",
        paddingHorizontal: 10
    },

    ulasanButton:{
        fontSize: 16,
        fontWeight: "bold",
        paddingHorizontal: 10
    },

    productContainer:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        rowGap: 15,
        marginHorizontal: 18,
        marginTop: 20,
        marginBottom: 300
    },
})

export default HalamanToko_Product