import { TouchableOpacity, Text, SafeAreaView, StyleSheet, View } from "react-native";

const ProductType = ({placeholder, color}) => {

    return (
        <View style={[styles.typeLabel, {backgroundColor: color}]}>
            <Text style={styles.label}>{placeholder}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    typeLabel:{
        display: "flex",
        alignItems: "center",
        borderRadius: 10,
        width: 80,
        paddingVertical: 2
    },

    label:{
        fontSize: 9,
        fontWeight: "bold",
        color: '#FFFFFF',
    }

})

export default ProductType