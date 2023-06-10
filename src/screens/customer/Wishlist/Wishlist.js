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
import numeral from 'numeral';


const Wishlist = ({ navigation }) => {
    return (
        <View style={WishlistStyle.background}>
            <SafeAreaView>
                <View style={WishlistStyle.header}>
                    <BackButton onPress={() => navigation.navigate()}></BackButton>
                    <Text style={WishlistStyle.textHeader}>Semua Wishlist</Text>
                </View>

                <ScrollView>
                    <WishlistSearchBar placeholder={"Cari Produk"} />
                    <View style={WishlistStyle.productContainer}>
                        <WishlistBox
                            onPress={() => navigation.navigate()}
                            productImages={Images.tomatMerah}
                            placeholderName={"Tomat Merah (500gr)"}
                            productType1={"Konvensional"}
                            productType1Color={'#EE1B1B'}
                            productType2={"Lokal"}
                            productType2Color={'#9747FF'}
                            placeholderPrice={10000}
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
                            placeholderPrice={15000}
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
                            placeholderNormalPrice={20000}
                            placeholderDiscountPrice={15000}
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
                            placeholderPrice={12000}
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
                            placeholderNormalPrice={20000}
                            placeholderDiscountPrice={15000}
                            placeholderLocation={"Bekasi"}
                            star1={Icons.starFull}
                            star2={Icons.starFull}
                            star3={Icons.starFull}
                            star4={Icons.starFull}
                            star5={Icons.starEmpty}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>

    )
}

const WishlistStyle = StyleSheet.create({
    background: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },

    header: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomColor: "#CFCFCF",
        borderBottomWidth: 0.5
    },

    textHeader: {
        paddingLeft: 30,
        fontSize: 20,
        fontWeight: 500
    },

    productContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        rowGap: 15,
        marginHorizontal: 18,
        marginTop: 20,
        marginBottom: 100
    }


})

export default Wishlist