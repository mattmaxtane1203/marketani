import { TextInput } from "react-native";
import { Image } from "react-native";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { useState } from "react";
import Icons from "../../constants/Icons";

// TODO: Fix mechanisms for onFocus

const SearchResultBar = ({ placeholder, onPress }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleTextChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image source={Icons.magnifyingGlass} style={styles.iconSearch} />
        <TextInput
          onChangeText={handleTextChange}
          value={searchTerm}
          editable={true}
          placeholder={placeholder}
          style={styles.test}
        />
      </View>
      <TouchableOpacity onPress={onPress}>
        <Image source={Icons.shoppingCart} style={styles.iconCart}></Image>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    searchBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        marginStart: 20,
        height: 45,
        borderRadius: 30,
        backgroundColor: "#F5F5F5"
    },

  iconSearch: {
    width: 20,
    height: 20,
  },

  iconCart:{
    width: 25,
    height: 25,
  },

  test: {
    paddingLeft: 10,
    width: "80%",
    height: "100%",
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
  },
});

export default SearchResultBar;
