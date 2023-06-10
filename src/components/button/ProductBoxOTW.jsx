import { TouchableOpacity, Image, StyleSheet, View, Text, SafeAreaView } from "react-native";
import { placeholder } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
import NoFillButton from "./NoFillButton";
import Icons from "../../constants/Icons";
import numeral from 'numeral';

const ProductBoxOTW = ({onPress, placeholderShopName, productImages, placeholderName, placeholderNumber, placeholderPrice}) => {

    return (
        <View style={styles.detailProduct}>
            <View style={styles.detailHeader}>
                <Text style={styles.textStyle1}>Detail Produk</Text>
                <TouchableOpacity>
                    <View style={styles.sellerShop}>
                        <Image source={Icons.sellerShop} style={styles.iconShop}></Image>
                        <Text style={styles.textStyle2}>{placeholderShopName}</Text>
                        <Image source={Icons.rightAngel} style={styles.iconGoTo}></Image>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.transactionBox}>
                    <View style={styles.transactionInfo}>
                        <Image style={styles.productImage} source={productImages}></Image>
                        <View style={styles.productInfo}>
                            <Text numberOfLines={1} style={styles.productName}>{placeholderName}</Text>
                            <Text style={styles.numberOfProduct}>{placeholderNumber} barang</Text>
                        </View>
                    </View>
                    <View style={styles.transactionBottom}>
                        <View style={styles.transactionPrice}>
                            <Text style={styles.totalText}>Total Belanja</Text>
                            <Text style={styles.totalPrice}>Rp{numeral(placeholderPrice).format('0,0')}</Text>
                        </View>
                        <View style={styles.reviewOrBuy}>
                            <NoFillButton onPress={() => navigation.navigator()} placeholder={"Beli Lagi"}/>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    detailProduct:{
        display: "flex",
    },

    detailHeader:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        marginBottom: 5
    },

    sellerShop:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },

    iconShop:{
        width: 15,
        height: 15
    },

    iconGoTo:{
        height: 10,
        width: 8
    },

    textStyle1:{
        fontSize: 18,
        fontWeight: "bold"
    },

    textStyle2:{
        fontSize: 12,
        fontWeight: "bold"
    },

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
    },

    reviewOrBuy:{
        display: "flex",
        flexDirection: "row",
        columnGap: 10
    }
})

export default ProductBoxOTW