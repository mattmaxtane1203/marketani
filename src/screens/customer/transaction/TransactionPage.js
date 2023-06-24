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
import TransactionSearchBar from "../../../components/input/TransactionSearchBar";
import TransactionOrangeBox from "../../../components/button/TransactionOrangeBox";
import TransactionGreenBox from "../../../components/button/TransactionGreenBox";
import DetailPesananSelesai from "./DetailPesananSelesai";
import DetailPesananOTW from "./DetailPesananOTW";

const TransactionPage = ({ navigation }) => {
    return (
        <View style={TransactionPageStyle.background}>
            <SafeAreaView>
                <View style={TransactionPageStyle.header}>
                    <BackButton onPress={() => navigation.navigate()}></BackButton>
                    <TransactionSearchBar placeholder={"Cari Transaksi"} />
                </View>

                <ScrollView>

                    <TouchableOpacity onPress={() => navigation.navigate("Waiting Payment")}>
                        <View style={TransactionPageStyle.waitingPayment}>
                            <View style={TransactionPageStyle.paymentHeader}>
                                <Image source={Icons.moneyCash} style={TransactionPageStyle.iconMoney}></Image>
                                <Text style={TransactionPageStyle.title}>Menunggu Pembayaran</Text>
                            </View>
                            <Image source={Icons.rightArrowGreen} style={TransactionPageStyle.iconRightArrow}></Image>
                        </View>
                    </TouchableOpacity>

                    <View style={TransactionPageStyle.transactionContainer}>
                        <TransactionOrangeBox
                            onPress={() => navigation.navigate("Detail Pesanan Dalam Pengiriman")}
                            productImages={Images.tomatHijau}
                            placeholderDate={"27 Maret 2023"}
                            placeholderName={"Tomat Hijau (500gr)"}
                            placeholderNumber={2}
                            placeholderPrice={38000}
                        />

                        <TransactionGreenBox
                            onPress={() => navigation.navigate("Detail Pesanan Selesai")}
                            productImages={Images.tomatMerah}
                            placeholderDate={"18 Maret 2023"}
                            placeholderName={"Tomat Merah (500gr)"}
                            placeholderNumber={2}
                            placeholderPrice={28000}
                        />
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>

    )
}

const TransactionPageStyle = StyleSheet.create({
    background: {
        backgroundColor: '#FFFFFF',
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
        borderBottomWidth: 0.5
    },

    waitingPayment: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CFCFCF'
    },

    paymentHeader: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        marginStart: 10
    },

    iconMoney: {
        width: 25,
        height: 25
    },

    title: {
        fontSize: 16,
        marginStart: 10
    },

    iconRightArrow: {
        width: 12,
        height: 20
    },

    transactionContainer: {
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
        marginBottom: 100
    }

})

export default TransactionPage