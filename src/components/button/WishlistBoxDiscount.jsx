import { TouchableOpacity, Image, StyleSheet, View, Text, SafeAreaView } from "react-native";
import { placeholder } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
import ProductType from "./ProductType";
import Icons from "../../constants/Icons";
import numeral from 'numeral';

const WishlistBoxDiscount = ({onPress, productImages, placeholderName, productType1, productType2, productType1Color, productType2Color, placeholderNormalPrice, placeholderDiscountPrice, placeholderLocation, star1, star2, star3, star4, star5}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.productWishlist} >
                <Image source={productImages} style={styles.productImage}></Image>
                <Text numberOfLines={1} style={styles.productName}>{placeholderName}</Text>
                <View style={styles.productType}>
                    <ProductType placeholder={productType1} color={productType1Color}></ProductType>
                    <ProductType placeholder={productType2} color={productType2Color}></ProductType>
                </View>
                <View style={styles.productRating}>
                    <Image source={star1} style={styles.productStar}></Image>
                    <Image source={star2} style={styles.productStar}></Image>
                    <Image source={star3} style={styles.productStar}></Image>
                    <Image source={star4} style={styles.productStar}></Image>
                    <Image source={star5} style={styles.productStar}></Image>
                </View>
                <View style={styles.productDiscount}>
                    <Text style={styles.normalPrice}>Rp{numeral(placeholderNormalPrice).format('0,0')}</Text>
                    <Text style={styles.discountPrice}>Rp{numeral(placeholderNormalPrice).format('0,0')}</Text>
                </View>
                <View style={styles.productInfo}>
                    <View style={styles.productLocation}>
                        <Image source={Icons.locationPin} style={styles.iconLocation}></Image>
                        <Text numberOfLines={1} style={styles.location}>{placeholderLocation}</Text>
                    </View>
                    <Image source={Icons.dotsOption} style={styles.iconOptions}></Image>
                </View>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    iconLocation:{
        height: 20,
        width: 20,
        // color: '#CFCFCF'
    },

    iconOptions:{
        height: 18,
        width: 3.8
    },

    productWishlist:{
        width: 188,
        display: "flex",
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CFCFCF',
        shadowColor: "black",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        paddingBottom: 10
    },

    productImage:{
        height:120,
        width: "100%",
        marginBottom:9,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

    productName:{
        marginBottom:9,
        paddingStart: 6,
        fontSize: 14
    },

    productType:{
        flexDirection: "row",
        marginBottom: 9,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    },

    productRating:{
        display: "flex",
        flexDirection: "row",
        marginBottom: 6,
        paddingStart: 6
    },

    productStar:{
        width:18,
        height:18
    },

    productPrice:{
        fontSize: 16,
        marginBottom: 6,
        paddingStart: 6
    },

    productDiscount:{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "flex-end",
        columnGap: 3,
        paddingStart: 6,
        marginBottom: 6
    },

    normalPrice:{
        fontSize: 14,
        textDecorationLine: "line-through",
        color: '#A9A9A9'
    },

    discountPrice:{
        fontSize: 16,
        color: '#EE1B1B'
    },

    productInfo:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingStart: 4,
        paddingEnd: 10
    },

    productLocation:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    location:{
        paddingLeft: 5,
        color: '#CFCFCF'
    }


})

export default WishlistBoxDiscount