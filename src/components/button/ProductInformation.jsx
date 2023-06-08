import { TouchableOpacity, Image, StyleSheet, View, Text, SafeAreaView } from "react-native";
import { placeholder } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
import ProductType from "./ProductType";
import Icons from "../../constants/Icons";
import Images from "../../constants/Images";

const ProductInformation = ({productImage, placeholderName, star1, star2, star3, star4, star5, placeholderSold, placeholderPrice, productType1, productType2, productType1Color, productType2Color}) => {
    return(
        <View style={styles.background}>
            <Image source={productImage} style={styles.productImage}></Image>
            <View style={styles.productIdentity}>
                <View style={styles.productTitle}>
                    <Text style={styles.textStyle1}>{placeholderName}</Text>
                    <View style={styles.productPopularity}>
                        <View style={styles.productRating}>
                            <Image source={star1} style={styles.productStar}></Image>
                            <Image source={star2} style={styles.productStar}></Image>
                            <Image source={star3} style={styles.productStar}></Image>
                            <Image source={star4} style={styles.productStar}></Image>
                            <Image source={star5} style={styles.productStar}></Image>
                        </View>
                        <Text style={styles.productSold}>{placeholderSold}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image source={Icons.favoriteLove} style={styles.iconFavorite}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.productPrice}>
                <Text style={styles.textStyle1}>{placeholderPrice}</Text>
                <View style={styles.productType}>
                    <ProductType placeholder={productType1} color={productType1Color}></ProductType>
                    <ProductType placeholder={productType2} color={productType2Color}></ProductType>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: "white"
    },

    productImage:{
        width: "100%",
        height: 280
    },

    productIdentity:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        marginHorizontal: 20
    },

    productTitle:{
        display: "flex",
        flexDirection: "column"
    },

    textStyle1:{
        fontSize: 16
    },

    productPopularity:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
    },

    productRating:{
        display: "flex",
        flexDirection: "row"
    },

    productStar:{
        width:18,
        height:18
    },

    productSold:{
        fontSize: 12,
        color: "white",
        backgroundColor: '#0194D4',
        paddingHorizontal: 10,
        borderRadius: 30,
        marginStart: 6
    },

    iconFavorite:{
        height: 50,
        width: 50
    },

    productPrice:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 5
    },

    productType:{
        display: "flex",
        gap: 5
    }

})

export default ProductInformation