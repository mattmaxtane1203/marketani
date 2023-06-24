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
import ProductType from "../../../components/button/ProductType";
import TransactionOrangeBox from "../../../components/button/TransactionOrangeBox";
import TransactionGreenBox from "../../../components/button/TransactionGreenBox";
import ProductBoxOTW from "../../../components/button/ProductBoxOTW";
import NoFillButton from "../../../components/button/NoFillButton";
import WaitingPaymentBox from "../../../components/button/WaitingPaymentBox";
import WaitingPaymentDetailBox from "../../../components/button/WaitingPaymentDetailBox";

const DetailWaitingPayment = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <SafeAreaView>
                <View style={styles.header}>
                    <BackButton onPress={() => navigation.navigate("Waiting Payment")}></BackButton>
                    <Text style={styles.textHeader}>Detail Pesanan</Text>
                </View>
                <ScrollView>

                    <View style={styles.productContainer}>
                        <WaitingPaymentDetailBox
                            onPress={() => navigation.navigate()}
                            placeholderShopName={"Fresh Shop"}
                            productImages={Images.tomatMerah}
                            placeholderName={"Tomat Merah (500gr)"}
                            placeholderNumber={2}
                            placeholderPrice={28000}
                        />
                    </View>

                    <View style={styles.productDelivery}>
                        <View style={styles.deliveryHeader}>
                            <Text style={styles.textStyle1}>Info Pengiriman</Text>
                            <NoFillButton placeholder={"Edit"}></NoFillButton>
                        </View>
                        <View style={styles.informationBody}>
                            <View style={styles.informationLeft}>
                                <Text style={styles.textStyle3}>Kurir</Text>
                                <Text style={styles.textStyle3}>No Resi</Text>
                                <Text style={styles.textStyle3}>Alamat</Text>
                            </View>
                            <View style={styles.informationRight}>
                                <Text style={styles.textStyle3}>Regular -JNE</Text>
                                <Text style={styles.textStyle3}>123XXXXXXXX</Text>
                                <Text style={styles.textStyle3}>Jl. Raya Kb. Jeruk No.27, RT.1/RW.9, Kebon Jeruk, Kebon Jeruk, Jakarta Barat, DKI Jakarta 11530</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.productPrice}>
                    <View style={styles.deliveryHeader}>
                            <Text style={styles.textStyle1}>Rincian Pembayaran</Text>
                            <NoFillButton placeholder={"Edit"}></NoFillButton>
                        </View>
                        <View style={styles.priceBody}>
                            <View style={styles.priceLeft}>
                                <Text style={styles.textStyle3}>Metode Pembayaran</Text>
                                <Text style={styles.textStyle3}>Total Harga</Text>
                                <Text style={styles.textStyle3}>Biaya Pengiriman</Text>
                                <Text style={styles.textStyle3}>Biaya Layanan</Text>
                                <Text style={styles.textStyle4}>Total Belanja</Text>
                            </View>
                            <View style={styles.priceRight}>
                                <Text style={styles.textStyle3}>GoPay</Text>
                                <Text style={styles.textStyle3}>Rp30.000</Text>
                                <Text style={styles.textStyle3}>Rp5.000</Text>
                                <Text style={styles.textStyle3}>Rp3.000</Text>
                                <Text style={styles.textStyle4}>Rp38.000</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>


        </View>



    )
}

const styles = StyleSheet.create({
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

    transactionStatus: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 20
    },

    status: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 10
    },

    statusColor: {
        backgroundColor: '#FEAF67',
        height: 44,
        borderRadius: 30
    },

    textStyle1: {
        fontSize: 18,
        fontWeight: "bold"
    },

    transactionDate: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 5
    },

    textStyle2: {
        fontSize: 12,
        fontWeight: "bold"
    },

    date: {
        fontSize: 10
    },

    productDelivery: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        marginHorizontal: 20,
        marginVertical: 20
    },

    deliveryHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },

    informationBody: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop: 10
    },

    informationLeft: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
        width: "24%"
    },

    informationRight: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
        width: "76%"
    },

    textStyle3: {
        fontSize: 12
    },

    productPrice: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 100
    },

    textStyle4: {
        fontSize: 14,
        fontWeight: "bold"
    },

    priceBody: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 10
    },

    priceLeft: {
        display: "flex",
        gap: 12
    },

    priceRight: {
        display: "flex",
        gap: 12,
        alignItems: "flex-end"
    },
    productContainer: {
        marginTop: 30
    }

})

export default DetailWaitingPayment