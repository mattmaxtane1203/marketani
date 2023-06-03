import { TouchableOpacity, Image, StyleSheet, View, Text, SafeAreaView } from "react-native";
import { placeholder } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
import ProductType from "./ProductType";
import Icons from "../../constants/Icons";
import Images from "../../constants/Images";

const ChatAndCartFooter = ({onPress1, onPress2}) => {
    return(
        <View style={styles.background}>
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress1}>
                    <View style={styles.chat}>
                        <Image source={Icons.chatSeller} style={styles.iconChat}></Image>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress2}>
                    <View style={styles.cartButton}>
                        <Text style={styles.text}>+ Keranjang</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: '#48BD5B'
    },

    container:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    chat:{
        paddingHorizontal: 45,

    },

    iconChat:{
        width: 35,
        height: 35
    },

    cartButton:{
        backgroundColor: '#48BD5B',
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        width: 300
    },

    text:{
        fontSize: 18,
        fontWeight: "500",
        color: "white",
    }
})

export default ChatAndCartFooter