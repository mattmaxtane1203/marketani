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
import { TouchableHighlight } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import HalamanTokoUlasan from "../../../components/button/HalamanTokoUlasan";

const HalamanToko_Ulasan = ({navigation}) => {
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
                                <TouchableWithoutFeedback onPress={() => navigation.navigate("Halaman Toko Produk")}>
                                    <Text style={HalamanTokoStyle.produkButton}>Produk</Text>
                                </TouchableWithoutFeedback>
                                {/* <View style={HalamanTokoStyle.greenLine}></View> */}
                            </View>
                            <View style={HalamanTokoStyle.chooseProduct}>
                                <TouchableOpacity>
                                    <Text style={HalamanTokoStyle.ulasanButton}>Ulasan</Text>
                                </TouchableOpacity>
                                <View style={HalamanTokoStyle.greenLine}></View>
                            </View>
                        </View>
                        <View style={HalamanTokoStyle.productContainer}>
                            <HalamanTokoUlasan
                                productImage={Images.tomatMerah}
                                userPicture={Images.profilePicture1}
                                placeholderName={"Dono"}
                                placeholderComment={"Enggak Enak ..."}
                                star1={Icons.starFull}
                                star2={Icons.starEmpty}
                                star3={Icons.starEmpty}
                                star4={Icons.starEmpty}
                                star5={Icons.starEmpty}
                            />
                            <HalamanTokoUlasan
                                productImage={Images.tomatMerah}
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
        fontWeight: "bold",
        paddingHorizontal: 10
    },

    ulasanButton:{
        fontSize: 16,
        color: '#48BD5B',
        fontWeight: "bold",
        paddingHorizontal: 10
    },

    productContainer:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: 18,
        marginTop: 10,
        marginBottom: 300
    },
})

export default HalamanToko_Ulasan