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

const DetailPesananOTW = ({navigation}) => {
    return (
        <View style={DetailPesananOTWStyle.background}>
            <SafeAreaView>
                <View style={DetailPesananOTWStyle.header}>
                    <BackButton onPress={() => navigation.navigate("Transaction")}></BackButton>
                    <Text style={DetailPesananOTWStyle.textHeader}>Detail Pesanan</Text>
                </View>
                <ScrollView>
                    <View style={DetailPesananOTWStyle.transactionStatus}>
                        <View style={DetailPesananOTWStyle.status}>
                            <Text style={DetailPesananOTWStyle.statusColor}> </Text>
                            <Text style={DetailPesananOTWStyle.textStyle1}>Dalam Pengiriman</Text>
                        </View>
                        <View style={DetailPesananOTWStyle.transactionDate}>
                            <Text style={DetailPesananOTWStyle.textStyle2}>Tanggal Pembelian</Text>
                            <Text style={DetailPesananOTWStyle.date}>27 Maret 2023, 10.00 WIB</Text>
                        </View>
                    </View>

                    <View>
                        <ProductBoxOTW
                            onPress={() => navigation.navigate()}
                            placeholderShopName={"Fresh Shop"}
                            productImages={Images.tomatHijau}
                            placeholderName={"Tomat Hijau (500gr)"}
                            placeholderNumber={"2 barang"}
                            placeholderPrice={"Rp 38.000"}
                        />
                    </View>

                    <View style={DetailPesananOTWStyle.productDelivery}>
                        <View style={DetailPesananOTWStyle.deliveryHeader}>
                            <Text style={DetailPesananOTWStyle.textStyle1}>Info Pengiriman</Text>
                            <NoFillButton placeholder={"Lacak"}></NoFillButton>
                        </View>
                        <View style={DetailPesananOTWStyle.informationBody}>
                            <View style={DetailPesananOTWStyle.informationLeft}>
                                <Text style={DetailPesananOTWStyle.textStyle3}>Kurir</Text>
                                <Text style={DetailPesananOTWStyle.textStyle3}>No Resi</Text>
                                <Text style={DetailPesananOTWStyle.textStyle3}>Alamat</Text>
                            </View>
                            <View style={DetailPesananOTWStyle.informationRight}>
                                <Text style={DetailPesananOTWStyle.textStyle3}>Regular -JNE</Text>
                                <Text style={DetailPesananOTWStyle.textStyle3}>123XXXXXXXX</Text>
                                <Text style={DetailPesananOTWStyle.textStyle3}>Jl. Raya Kb. Jeruk No.27, RT.1/RW.9, Kebon Jeruk, Kebon Jeruk, Jakarta Barat, DKI Jakarta 11530</Text>
                            </View>
                        </View>
                    </View>

                    <View style={DetailPesananOTWStyle.productPrice}>
                        <Text style={DetailPesananOTWStyle.textStyle1}>Rincian Pembayaran</Text>
                        <View style={DetailPesananOTWStyle.priceBody}>
                            <View style={DetailPesananOTWStyle.priceLeft}>
                                <Text style={DetailPesananOTWStyle.textStyle3}>Metode Pembayaran</Text>
                                <Text style={DetailPesananOTWStyle.textStyle3}>Total Harga</Text>
                                <Text style={DetailPesananOTWStyle.textStyle3}>Biaya Pengiriman</Text>
                                <Text style={DetailPesananOTWStyle.textStyle3}>Biaya Layanan</Text>
                                <Text style={DetailPesananOTWStyle.textStyle4}>Total Belanja</Text>
                            </View>
                            <View style={DetailPesananOTWStyle.priceRight}>
                                <Text style={DetailPesananOTWStyle.textStyle3}>GoPay</Text>
                                <Text style={DetailPesananOTWStyle.textStyle3}>Rp30.000</Text>
                                <Text style={DetailPesananOTWStyle.textStyle3}>Rp5.000</Text>
                                <Text style={DetailPesananOTWStyle.textStyle3}>Rp3.000</Text>
                                <Text style={DetailPesananOTWStyle.textStyle4}>Rp38.000</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>


        </View>



    )
}

const DetailPesananOTWStyle = StyleSheet.create({
    background:{
        backgroundColor:'#FFFFFF',
        flex: 1
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
        paddingLeft: 30,
        fontSize: 20,
        fontWeight: 500
    },

    transactionStatus:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 20
    },

    status:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 10
    },

    statusColor:{
        backgroundColor: '#FEAF67',
        height: 44,
        borderRadius: 30
    },

    textStyle1:{
        fontSize: 18,
        fontWeight: "bold"
    },

    transactionDate:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 5
    },

    textStyle2:{
        fontSize: 12,
        fontWeight: "bold"
    },

    date:{
        fontSize: 10
    },

    productDelivery:{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        marginHorizontal: 20
    },

    deliveryHeader:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },

    informationBody:{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop: 10
    },

    informationLeft:{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        width: "24%"
    },

    informationRight:{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        width: "76%"
    },

    textStyle3:{
        fontSize: 12
    },

    productPrice:{
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

    priceBody:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 10
    },

    priceLeft:{
        display: "flex",
        gap: 12
    },

    priceRight:{
        display: "flex",
        gap: 12,
        alignItems: "flex-end"
    }

})

export default DetailPesananOTW