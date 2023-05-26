import { TouchableOpacity, Image, StyleSheet } from "react-native";
import Icons from "../../constants/Icons";

const BackButton = ({onPress}) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={Icons.backArrow} style={styles.backButton}></Image>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backButton: {
        height: 30,
        width: 41
    },
})

export default BackButton