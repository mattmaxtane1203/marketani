import { TextInput } from "react-native";
import { Image } from "react-native";
import { SafeAreaView, KeyboardAvoidingView, Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import Icons from "../../constants/Icons";

// TODO: Fix mechanisms for onFocus

const WishlistSearchBar = ({placeholder}) => {

    const [isFocused, setIsFocused] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const handleTextChange = (searchTerm) => {
        setSearchTerm(searchTerm)
    }

    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <Image source={Icons.magnifyingGlass} style={styles.icon} />
          <TextInput
            onChangeText={handleTextChange}
            value={searchTerm}
            editable={true}
            placeholder={placeholder}
            style={styles.test}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        justifyContent: "center",
        marginHorizontal: 18,
        marginTop: 20
    },
    searchBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        width: "100%",
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black"
    },

    icon: {
        width: 20,
        height: 20,
    },

    test: {
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

export default WishlistSearchBar