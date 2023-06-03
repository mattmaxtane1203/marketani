import { TouchableOpacity, Image, StyleSheet, View, Text, SafeAreaView } from "react-native";
import { placeholder } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
import ProductType from "./ProductType";
import Icons from "../../constants/Icons";
import Images from "../../constants/Images";

const ProductReview = ({userPicture, placeholderName, placeholderComment, star1, star2, star3, star4, star5}) => {
    return(
        <View style={styles.background}>
            <View style={styles.container}>
                <Image source={userPicture} style={styles.userPicture}></Image>
                <View style={styles.userReview}>
                    <Text style={styles.userName}>{placeholderName}</Text>
                    <View style={styles.reviewRating}>
                        <Image source={star1} style={styles.reviewStar}></Image>
                        <Image source={star2} style={styles.reviewStar}></Image>
                        <Image source={star3} style={styles.reviewStar}></Image>
                        <Image source={star4} style={styles.reviewStar}></Image>
                        <Image source={star5} style={styles.reviewStar}></Image>
                    </View>
                    <Text style={styles.userComment}>{placeholderComment}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: "white",
        borderBottomColor: "#CFCFCF",
        borderBottomWidth: 0.5,
    },

    container:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 10,
        gap: 15,
        
    },

    userPicture:{
        width: 50,
        height: 50,
        borderRadius: 100
    },

    userReview:{
        display: "flex",
        flexDirection: "column",
        gap: 5
    },

    userName:{
        fontSize: 14,
        fontWeight: "bold"
    },

    reviewRating:{
        display: "flex",
        flexDirection: "row"
    },

    reviewStar:{
        width:18,
        height:18
    },

    userComment:{
        fontSize: 14
    }


})

export default ProductReview