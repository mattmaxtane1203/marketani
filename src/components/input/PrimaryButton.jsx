import { TouchableOpacity, Text, SafeAreaView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

// TODO: Fix OnPress
const PrimaryButton = ({placeholder, onPress}) => {

    return (
        <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
            <Text style={{textAlign:"center", fontSize: 16}}>{placeholder}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    primaryButton: {
        // width: 240,
        // height: 43,
        // left: 57,
        // top: 497,
        justifyContent: "center",
        width: 240,
        height: 43,
        borderRadius: 8,
        backgroundColor: '#CFCFCF',
        margin: 25,
    },
})

export default PrimaryButton