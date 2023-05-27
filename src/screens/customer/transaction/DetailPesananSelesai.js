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
import ProductBoxSelesai from "../../../components/button/ProductBoxSelesai";

const DetailPesananSelesai = ({navigation}) => {
    return (
        <View style={DetailPesananSelesaiStyle.background}>
            <SafeAreaView>
                <View style={DetailPesananSelesaiStyle.header}>
                    <BackButton onPress={() => navigation.navigate("Transaction")}></BackButton>
                    <Text style={DetailPesananSelesaiStyle.textHeader}>Detail Pesanan</Text>
                </View>
                <ScrollView>
                    <View style={DetailPesananSelesaiStyle.transactionStatus}>
                        <View style={DetailPesananSelesaiStyle.status}>
                            <Text style={DetailPesananSelesaiStyle.statusColor}> </Text>
                            <Text style={DetailPesananSelesaiStyle.textStyle1}>Selesai</Text>
                        </View>
                        <View style={DetailPesananSelesaiStyle.transactionDate}>
                            <Text style={DetailPesananSelesaiStyle.textStyle2}>Tanggal Pembelian</Text>
                            <Text style={DetailPesananSelesaiStyle.date}>18 Maret 2023, 10.00 WIB</Text>
                        </View>
                    </View>
                    <View>
                        <ProductBoxSelesai
                            onPress={() => navigation.navigate()}
                            placeholderShopName={"Fresh Shop"}
                            productImages={Images.tomatMerah}
                            placeholderName={"Tomat Merah (500gr)"}
                            placeholderNumber={"2 barang"}
                            placeholderPrice={"Rp 28.000"}
                        />
                    </View>

                    <View style={DetailPesananSelesaiStyle.productDelivery}>
                        <Text style={DetailPesananSelesaiStyle.textStyle1}>Info Pengiriman</Text>
                        <View style={DetailPesananSelesaiStyle.informationBody}>
                            <View style={DetailPesananSelesaiStyle.informationLeft}>
                                <Text style={DetailPesananSelesaiStyle.textStyle3}>Kurir</Text>
                                <Text style={DetailPesananSelesaiStyle.textStyle3}>No Resi</Text>
                                <Text style={DetailPesananSelesaiStyle.textStyle3}>Alamat</Text>
                            </View>
                            <View style={DetailPesananSelesaiStyle.informationRight}>
                                <Text style={DetailPesananSelesaiStyle.textStyle3}>Regular -JNE</Text>
                                <Text style={DetailPesananSelesaiStyle.textStyle3}>123XXXXXXXX</Text>
                                <Text style={DetailPesananSelesaiStyle.textStyle3}>Jl. Raya Kb. Jeruk No.27, RT.1/RW.9, Kebon Jeruk, Kebon Jeruk, Jakarta Barat, DKI Jakarta 11530</Text>
                            </View>
                        </View>
                    </View>

                    <View style={DetailPesananSelesaiStyle.productPrice}>
                        <Text style={DetailPesananSelesaiStyle.textStyle1}>Rincian Pembayaran</Text>
                        <View style={DetailPesananSelesaiStyle.priceBody}>
                            <View style={DetailPesananSelesaiStyle.priceLeft}>
                                <Text style={DetailPesananSelesaiStyle.textStyle3}>Metode Pembayaran</Text>
                                <Text style={DetailPesananSelesaiStyle.textStyle3}>Total Harga</Text>
                                <Text style={DetailPesananSelesaiStyle.textStyle3}>Biaya Pengiriman</Text>
                                <Text style={DetailPesananSelesaiStyle.textStyle3}>Biaya Layanan</Text>
                                <Text style={DetailPesananSelesaiStyle.textStyle4}>Total Belanja</Text>
                            </View>
                            <View style={DetailPesananSelesaiStyle.priceRight}>
                                <Text style={DetailPesananSelesaiStyle.textStyle3}>GoPay</Text>
                                <Text style={DetailPesananSelesaiStyle.textStyle3}>Rp20.000</Text>
                                <Text style={DetailPesananSelesaiStyle.textStyle3}>Rp5.000</Text>
                                <Text style={DetailPesananSelesaiStyle.textStyle3}>Rp3.000</Text>
                                <Text style={DetailPesananSelesaiStyle.textStyle4}>Rp28.000</Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>


        </View>



    )
}

const DetailPesananSelesaiStyle = StyleSheet.create({
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
        backgroundColor: '#48BD5B',
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

export default DetailPesananSelesai