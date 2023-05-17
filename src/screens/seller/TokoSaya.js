import { SafeAreaView, KeyboardAvoidingView, Text, View, StyleSheet, Image } from "react-native";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import Icons from "../../constants/Icons";
import StarRating from "react-native-star-rating";
import PictureButton from "../../components/button/PictureButton";

const TokoSaya = ({navigation}) => {
    const sampleRating = 3
    const sampleNamaToko = "Sayur Segar"
    const sampleLocation = "Jakarta Barat"

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.storeContainer}>
                <Image source={Icons.profilePicture} style={styles.storeProfilePicture}/>
                <View style={styles.storeInformationContainer}>
                    <Text style={styles.label}>{sampleNamaToko}</Text>
                    <StarRating disabled maxStars={5} rating={sampleRating} fullStarColor={"#FFD700"} containerStyle={styles.starRating} starSize={15}/>
                    <View style={styles.row}>
                        <Image source={Icons.locationPin} style={styles.locationPin}/>
                        <Text style={styles.label}>{sampleLocation}</Text>
                    </View>
                    <View />
                </View>
            </View>

            <View>
                <PictureButton label={"Produk"} imageSource={Icons.product} color={"#48BD5B"}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#FFFFF0",
        height: "100%"
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    
    storeInformationContainer: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        paddingLeft: 20,
        // borderColor: "brown",
        // borderWidth: 1,
    },

    storeContainer: {
        flexDirection: "row",
        margin: 20,
        paddingBottom: 20,
        // borderBottomWidth: 1,
    },

    storeProfilePicture: {
        height: 75,
        width: 75,
    },

    label: {
        fontSize: 16,
    },

    starRating: {
        width: 75,
    },  

    locationPin: {
        width: 12,
        height: 12,
    },

    buttonsContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
})

export default TokoSaya