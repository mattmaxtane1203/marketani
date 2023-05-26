import { TouchableOpacity, Text, SafeAreaView, StyleSheet } from "react-native";

const ProductType = ({placeholder, color}) => {

    return (
        <Text style={[styles.typeLabel, {backgroundColor: color}]}>{placeholder}</Text>
    )
}

const styles = StyleSheet.create({
    typeLabel:{
        display: "flex",
        fontSize: 9,
        fontWeight: "bold",
        color: '#FFFFFF',
        paddingVertical: 1,
        marginHorizontal: 2,
        justifyContent: "center",
        paddingHorizontal: 7,
        borderRadius: 10
    }

})

export default ProductType