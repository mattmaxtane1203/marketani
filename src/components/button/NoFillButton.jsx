import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import Icons from "../../constants/Icons";

const NoFillButton = ({onPress, placeholder}) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.noFillButton}>{placeholder}</Text>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    noFillButton: {
        fontSize: 12,
        fontWeight: "bold",
        color: '#48BD5B',
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 3,
        borderWidth:1,
        borderColor: '#48BD5B'
    },
})

export default NoFillButton