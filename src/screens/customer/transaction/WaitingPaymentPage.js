import {
    ScrollView,
    Text,
    StyleSheet,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity
} from "react-native";
import BackButton from "../../../components/button/BackButton";
import ProductBoxOTW from "../../../components/button/ProductBoxOTW";
import Images from "../../../constants/Images";
import NoFillButton from "../../../components/button/NoFillButton";
import TransactionOrangeBox from "../../../components/button/TransactionOrangeBox";
import TransactionGreenBox from "../../../components/button/TransactionGreenBox";
import WaitingPaymentBox from "../../../components/button/WaitingPaymentBox";

const WaitingPaymentPage = ({ navigation, onPress }) => {
    return (
        <View style={style.background}>
            <SafeAreaView>
                <View style={style.header}>
                    <BackButton onPress={() => navigation.navigate("Transaction")}></BackButton>
                    <Text style={style.textHeader}>Menunggu Pembayaran</Text>
                </View>
                <ScrollView>

                    <View style={style.transactionContainer}>
                        <WaitingPaymentBox
                            onPress={() => navigation.navigate("Detail Waiting Payment")}
                            productImages={Images.tomatMerah}
                            placeholderName={"Tomat Merah (500gr)"}
                            placeholderNumber={2}
                            placeholderPrice={28000}
                        />

                        <WaitingPaymentBox
                            onPress={() => navigation.navigate("Detail Waiting Payment")}
                            productImages={Images.tomatCherry}
                            placeholderName={"Tomat Cherry (500gr)"}
                            placeholderNumber={2}
                            placeholderPrice={38000}
                        />
                    </View>

                </ScrollView>
            </SafeAreaView>


        </View>
    )
};

const style = StyleSheet.create({
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

    transactionContainer: {
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
        marginBottom: 100
    }
})

export default WaitingPaymentPage;