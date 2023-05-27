import { TextInput } from "react-native";
import { Image } from "react-native";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import Icons from "../../constants/Icons";

// TODO: Fix mechanisms for onFocus

const TransactionSearchBar = ({ placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleTextChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

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
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    marginHorizontal: 20
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 45,
    borderRadius: 30,
    backgroundColor: "#F5F5F5"
  },

  icon: {
    width: 20,
    height: 20,
  },

  test: {
    paddingLeft: 10,
    width: "88%",
    height: "100%",
  }
});

export default TransactionSearchBar;
