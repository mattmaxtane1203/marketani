import { useState } from "react";
import { TextInput } from "react-native";
import { SafeAreaView, KeyboardAvoidingView, Text, View, StyleSheet } from "react-native";

// TODO: Make dropdown list for berat/pesanan

const WeightInput = ({ label }) => {
  const [satuan, setSatuan] = useState('key0')

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} />
      </View>
      {/* TODO: Put Dropdown List here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },

  text: {
    fontSize: 16,
    color: "black",
    marginBottom: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: 131,
    height: 35,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  dropdown: {
    borderWidth: 1,
    borderColor: "black",
    width: 89,
    height: 35,
    borderRadius: 8,
    marginBottom: 20,
  },
});

export default WeightInput;