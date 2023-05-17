import { TouchableOpacity, Text, StyleSheet, View, Image  } from "react-native";
import Icons from "../../constants/Icons";

const SettingButton = ({placeholder, OnPress}) => {
    return (
        <TouchableOpacity style={[styles.border, styles.row]} onPress={OnPress}>
            <Text style={styles.label}>{placeholder}</Text>
            <Image source={Icons.rightAngel} style={styles.icon}></Image>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },

    border: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E6E6E6',
        
        height: 65,
    },

    icon: {
        height: 14,
        width: 14,
    },

    label: {
        fontSize: 16,
    },
})

export default SettingButton