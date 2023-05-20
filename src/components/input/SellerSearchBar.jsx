import { TextInput } from "react-native";
import { Image } from "react-native";
import { SafeAreaView, KeyboardAvoidingView, Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import Icons from "../../constants/Icons";

// TODO: Fix mechanisms for onFocus

const SellerSearchBar = ({placeholder}) => {

    const [isFocused, setIsFocused] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const handleTextChange = (searchTerm) => {
        setSearchTerm(searchTerm)
    }

    return (
      <View>
        <Text style={styles.label}>{placeholder}</Text>
        <View style={styles.container}>
          <Image source={Icons.magnifyingGlass} style={styles.icon} />
          <TextInput
            onChangeText={handleTextChange}
            value={searchTerm}
            editable={true}
            style={styles.test}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        width: 315,
        height: 35,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
    },

    icon: {
        width: 20,
        height: 20,
    },

    test: {
        // borderWidth: 1,
        // borderColor: "red",
        paddingLeft: 10,
        width: "95%",
        height: "100%",
    },

    label: {
        fontSize: 16,
        fontWeight: "600",
        marginVertical: 10,
    }
})

export default SellerSearchBar