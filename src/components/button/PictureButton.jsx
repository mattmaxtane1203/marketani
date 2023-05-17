import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SvgUri } from "react-native-svg";
import Icons from "../../constants/Icons";

// TODO: Fix photos for buttons (SVG or PNG)

const PictureButton = ({label, imageSource, color}) => {
    return (
        <View>
            <TouchableOpacity style={[styles.pictureButton, {backgroundColor: color}]}>
                <SvgUri uri={Icons.product} />
            </TouchableOpacity>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
    },

    pictureButton: {
        width: 50,
        height: 50,
        // borderWidth: 1,
        borderRadius: 10,
    },

    image: {
        width: 40,
        height: 40,
    }
})

export default PictureButton