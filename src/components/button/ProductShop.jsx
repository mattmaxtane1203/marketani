import { TouchableOpacity, Image, StyleSheet, View, Text, SafeAreaView } from "react-native";
import { placeholder } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
import ProductType from "./ProductType";
import Icons from "../../constants/Icons";
import Images from "../../constants/Images";

const ProductShop = ({onPress, shopPicture, placeholderShopName, star1, star2, star3, star4, star5, placeholderLocation}) => {
    return(
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={styles.shopPicture}>
                    <Image source={shopPicture} style={styles.shopImage}></Image>
                </View>
                <View style={styles.shopInformation}>
                    <TouchableOpacity onPress={onPress}>
                        <Text style={styles.shopName}>{placeholderShopName}</Text>
                    </TouchableOpacity>
                    <View style={styles.shopRating}>
                        <Image source={star1} style={styles.shopStar}></Image>
                        <Image source={star2} style={styles.shopStar}></Image>
                        <Image source={star3} style={styles.shopStar}></Image>
                        <Image source={star4} style={styles.shopStar}></Image>
                        <Image source={star5} style={styles.shopStar}></Image>
                    </View>
                    <View style={styles.shopLocation}>
                        <Image source={Icons.locationPin} style={styles.iconLocation}></Image>
                        <Text style={styles.location}>{placeholderLocation}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: "white"
    },

    container:{
        display: "flex",
        flexDirection: "row",
        marginVertical: 15,
        marginHorizontal: 20
    },

    shopPicture:{
        padding: 5,
        backgroundColor: '#F1F1F1',
        borderRadius: 100
    },

    shopImage:{
        width: 80,
        height: 80,
        borderRadius: 100
    },

    shopInformation:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginStart: 20,
        gap: 6
    },

    shopName:{
        fontSize: 16
    },

    shopRating:{
        display: "flex",
        flexDirection: "row"
    },

    shopStar:{
        width:18,
        height:18
    },

    shopLocation:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },

    iconLocation:{
        height: 20,
        width: 20
    },

    location:{
        fontSize: 14
    }


})

export default ProductShop