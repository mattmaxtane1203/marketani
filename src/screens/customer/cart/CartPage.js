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
import CartSearchBar from "../../../components/input/CartSearchBar";
import ListToko from "./ShopList";
import ShopList from "./ShopList";
import ShopName from "./ShopName";

const CartPage = ({ navigation }) => {
    return (
        <View style={style.background}>
            <SafeAreaView>
                <View style={style.header}>
                    <BackButton onPress={() => navigation.navigate()} />
                    <CartSearchBar placeholder={"Cari Produk"} />
                </View>

                <ScrollView>
                    <View style={style.container}>
                        <View>
                            <ShopName ShopText="Fresh Shop" />
                            <ShopList
                                productImage={Images.tomatHijau}
                                title={"Tomat Hijau (500gr)"}
                                price={"Rp15.000"}
                            />
                        </View>
                    </View>
                    <View style={style.container}>
                        <View>
                            <ShopName ShopText="Lokal Shop" />
                            <ShopList
                                productImage={Images.tomatManis}
                                title={"Tomat Merah (500gr)"}
                                price={"Rp15.000"}
                            />
                            <ShopList
                                productImage={Images.tomatManis}
                                title={"Tomat Merah (300gr)"}
                                price={"Rp15.000"}
                            />
                        </View>

                    </View>
                </ScrollView>

            </SafeAreaView>
        </View>
    )
}

const style = StyleSheet.create({
    background: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    headerBackground: {
        backgroundColor: '#F1F1F1',
        flex: 1
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
        borderTopWidth: 10
    }
})

export default CartPage;