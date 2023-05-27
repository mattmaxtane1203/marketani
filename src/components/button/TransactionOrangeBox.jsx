import { TouchableOpacity, Image, StyleSheet, View, Text, SafeAreaView } from "react-native";
import { placeholder } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
import NoFillButton from "./NoFillButton";

const TransactionOrangeBox = ({onPress, productImages, placeholderDate, placeholderName, placeholderNumber, placeholderPrice}) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.transactionBox}>
                <View style={styles.transactionHeader}>
                    <Text style={styles.transactionDate}>{placeholderDate}</Text>
                    <Text style={styles.transactionStatus}>Dalam Pengiriman</Text>
                </View>
                <View style={styles.transactionInfo}>
                    <Image style={styles.productImage} source={productImages}></Image>
                    <View style={styles.productInfo}>
                        <Text numberOfLines={1} style={styles.productName}>{placeholderName}</Text>
                        <Text style={styles.numberOfProduct}>{placeholderNumber}</Text>
                    </View>
                </View>
                <View style={styles.transactionBottom}>
                    <View style={styles.transactionPrice}>
                        <Text style={styles.totalText}>Total Belanja</Text>
                        <Text style={styles.totalPrice}>{placeholderPrice}</Text>
                    </View>
                    <NoFillButton onPress={() => navigation.navigator()} placeholder={"Lacak"}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    transactionBox:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 7,
        marginHorizontal: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#CFCFCF',
        borderRadius: 7
    },

    transactionHeader:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },

    transactionDate:{
        fontSize: 14,
        color: '#B6B6B6'
    },

    transactionStatus:{
        fontSize: 12,
        fontWeight: "bold",
        color: "white",
        backgroundColor: '#FEAF67',
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 3
    },

    transactionInfo:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 5,
        width: "100%"
    },

    productImage:{
        width: 45,
        height: 45,
        borderRadius: 5
    },

    productInfo:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginStart: 12
    },

    productName:{
        fontSize: 16,
        fontWeight: "bold"
    },

    numberOfProduct:{
        fontSize: 12,
        marginTop: 3
    },

    transactionBottom:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5,
        width: "100%"
    },

    transactionPrice:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },

    totalText:{
        fontSize: 10
    },

    totalPrice:{
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 3
    }
})

export default TransactionOrangeBox