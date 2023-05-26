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
  import ProductType from "../../../components/button/ProductType";


  const Wishlist = ({navigation}) => {
    return (
        <View style={WishlistStyle.background}>
            <SafeAreaView>
                <View style={WishlistStyle.header}>
                    <BackButton onPress={() => navigation.navigate()}></BackButton>
                    <Text style={WishlistStyle.textHeader}>Semua Wishlist</Text>
                </View>

                <ScrollView>
                    <WishlistSearchBar placeholder={"Cari Produk"}/>
                    <View style={WishlistStyle.productContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate()}>
                            <View style={WishlistStyle.productWishlist} >
                                <Image source={Images.tomatMerah} style={WishlistStyle.productImage}></Image>
                                <Text numberOfLines={1} style={WishlistStyle.productName}>Tomat Merah (500gr)</Text>
                                <View style={WishlistStyle.productType}>
                                    <ProductType placeholder={"Konvensional"} color='#EE1B1B'></ProductType>
                                    <ProductType placeholder={"Lokal"} color='#9747FF'></ProductType>
                                </View>
                                <View style={WishlistStyle.productRating}>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starEmpty} style={WishlistStyle.productStar}></Image>
                                </View>
                                <Text numberOfLines={1} style={WishlistStyle.productPrice}>Rp10.000</Text>
                                <View style={WishlistStyle.productInfo}>
                                    <View style={WishlistStyle.productLocation}>
                                        <Image source={Icons.locationPin} style={WishlistStyle.iconLocation}></Image>
                                        <Text numberOfLines={1} style={WishlistStyle.location}>Bekasi</Text>
                                    </View>
                                    <Image source={Icons.dotsOption} style={WishlistStyle.iconOptions}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => navigation.navigate()}>
                            <View style={WishlistStyle.productWishlist}>
                                <Image source={Images.tomatCherry} style={WishlistStyle.productImage}></Image>
                                <Text numberOfLines={1} style={WishlistStyle.productName}>Tomat Cherry (300gr)</Text>
                                <View style={WishlistStyle.productType}>
                                    <ProductType placeholder={"Konvensional"} color='#EE1B1B'></ProductType>
                                    <ProductType placeholder={"Import"} color='#FFB800'></ProductType>
                                </View>
                                <View style={WishlistStyle.productRating}>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starEmpty} style={WishlistStyle.productStar}></Image>
                                </View>
                                <View style={WishlistStyle.productDiscount}>
                                    <Text style={WishlistStyle.normalPrice}>Rp20.000</Text>
                                    <Text style={WishlistStyle.discountPrice}>Rp15.000</Text>
                                </View>
                                <View style={WishlistStyle.productInfo}>
                                    <View style={WishlistStyle.productLocation}>
                                        <Image source={Icons.locationPin} style={WishlistStyle.iconLocation}></Image>
                                        <Text style={WishlistStyle.location}>Bekasi</Text>
                                    </View>
                                    <Image source={Icons.dotsOption} style={WishlistStyle.iconOptions}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate()}>
                            <View style={WishlistStyle.productWishlist}>
                                <Image source={Images.tomatHijau} style={WishlistStyle.productImage}></Image>
                                <Text style={WishlistStyle.productName}>Tomat Hijau (500gr)</Text>
                                <View style={WishlistStyle.productType}>
                                    <ProductType placeholder={"Konvensional"} color='#EE1B1B'></ProductType>
                                    <ProductType placeholder={"Import"} color='#FFB800'></ProductType>
                                </View>
                                <View style={WishlistStyle.productRating}>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starEmpty} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starEmpty} style={WishlistStyle.productStar}></Image>
                                </View>
                                <Text style={WishlistStyle.productPrice}>Rp15.000</Text>
                                <View style={WishlistStyle.productInfo}>
                                    <View style={WishlistStyle.productLocation}>
                                        <Image source={Icons.locationPin} style={WishlistStyle.iconLocation}></Image>
                                        <Text style={WishlistStyle.location}>Depok</Text>
                                    </View>
                                    <Image source={Icons.dotsOption} style={WishlistStyle.iconOptions}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate()}>
                            <View style={WishlistStyle.productWishlist}>
                                <Image source={Images.tomatManis} style={WishlistStyle.productImage}></Image>
                                <Text style={WishlistStyle.productName}>Tomat Manis (300gr)</Text>
                                <View style={WishlistStyle.productType}>
                                    <ProductType placeholder={"Hidroponik"} color='#00B0FC'></ProductType>
                                    <ProductType placeholder={"Lokal"} color='#9747FF'></ProductType>
                                </View>
                                <View style={WishlistStyle.productRating}>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starEmpty} style={WishlistStyle.productStar}></Image>
                                </View>
                                <Text style={WishlistStyle.productPrice}>Rp12.000</Text>
                                <View style={WishlistStyle.productInfo}>
                                    <View style={WishlistStyle.productLocation}>
                                        <Image source={Icons.locationPin} style={WishlistStyle.iconLocation}></Image>
                                        <Text style={WishlistStyle.location}>Bekasi</Text>
                                    </View>
                                    <Image source={Icons.dotsOption} style={WishlistStyle.iconOptions}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate()}>
                            <View style={WishlistStyle.productWishlist}>
                                <Image source={Images.tomatMerah2} style={WishlistStyle.productImage}></Image>
                                <Text style={WishlistStyle.productName}>Tomat Merah (500gr)</Text>
                                <View style={WishlistStyle.productType}>
                                    <ProductType placeholder={"Organik"} color='#48BD5B'></ProductType>
                                    <ProductType placeholder={"Lokal"} color='#9747FF'></ProductType>
                                </View>
                                <View style={WishlistStyle.productRating}>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starFull} style={WishlistStyle.productStar}></Image>
                                    <Image source={Icons.starEmpty} style={WishlistStyle.productStar}></Image>
                                </View>
                                <View style={WishlistStyle.productDiscount}>
                                    <Text style={WishlistStyle.normalPrice}>Rp20.000</Text>
                                    <Text style={WishlistStyle.discountPrice}>Rp15.000</Text>
                                </View>
                                <View style={WishlistStyle.productInfo}>
                                    <View style={WishlistStyle.productLocation}>
                                        <Image source={Icons.locationPin} style={WishlistStyle.iconLocation}></Image>
                                        <Text style={WishlistStyle.location}>Bekasi</Text>
                                    </View>
                                    <Image source={Icons.dotsOption} style={WishlistStyle.iconOptions}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
        
    )
}

const WishlistStyle = StyleSheet.create({
    background:{
        backgroundColor:'#FFFFFF',
        flex: 1
    },

    iconLocation:{
        height: 20,
        width: 20,
        // color: '#CFCFCF'
    },

    iconOptions:{
        height: 18,
        width: 3.8
    },

    header:{
        display: "flex",
        justifyContent:"flex-start",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomColor: "#CFCFCF",
        borderBottomWidth: 0.5
    },

    textHeader:{
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: 500
    },

    productContainer:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        rowGap: 13,
        marginHorizontal: 18,
        marginTop: 20,
        marginBottom: 100
    },

    productWishlist:{
        width: 188,
        display: "flex",
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        paddingBottom: 10
    },

    productImage:{
        height:120,
        width: "100%",
        marginBottom:9,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

    productName:{
        marginBottom:9,
        paddingStart: 6,
        fontSize: 14
    },

    productType:{
        flexDirection: "row",
        marginBottom: 9,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },

    productRating:{
        display: "flex",
        flexDirection: "row",
        marginBottom: 6,
        paddingStart: 6
    },

    productStar:{
        width:18,
        height:18
    },

    productPrice:{
        fontSize: 16,
        marginBottom: 6,
        paddingStart: 6
    },

    productDiscount:{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "flex-end",
        columnGap: 3,
        paddingStart: 6,
        marginBottom: 6
    },

    normalPrice:{
        fontSize: 14,
        textDecorationLine: "line-through",
        color: '#A9A9A9'
    },

    discountPrice:{
        fontSize: 16,
        color: '#EE1B1B'
    },

    productInfo:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingStart: 4,
        paddingEnd: 10
    },

    productLocation:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    location:{
        paddingLeft: 5,
        color: '#CFCFCF'
    }


})

export default Wishlist