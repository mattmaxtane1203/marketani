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

const ChatSellerFooter = ({ placeholder, onPress }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleTextChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <View style={styles.container}>
      <Image source={Icons.dotsMore} style={styles.dotsMore}></Image>
      <View style={styles.searchBar}>
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
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 10
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

    dotsMore:{
      width: 30,
      height: 30
    },

  test: {
    paddingLeft: 10,
    width: "90%",
    height: "100%",
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
  },
});

export default ChatSellerFooter;
