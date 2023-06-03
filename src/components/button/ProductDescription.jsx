import { TouchableOpacity, Image, StyleSheet, View, Text, SafeAreaView } from "react-native";
import { placeholder } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";

const ProductDescription = ({placeholderDescription}) => {
    return(
        <View style={styles.background}>
            <View style={styles.productDescription}>
                <Text style={styles.descriptionTitle}>Deskripsi Produk</Text>
                <Text style={styles.description}>{placeholderDescription}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: "white"
    },

    productDescription:{
        display: "flex",
        flexDirection: "column",
        marginHorizontal: 20,
        marginVertical: 10,
        gap: 6
    },

    descriptionTitle:{
        fontSize: 16
    },

    description:{
        fontSize: 12
    }
})

export default ProductDescription