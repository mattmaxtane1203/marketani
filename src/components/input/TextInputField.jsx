import { View, TextInput, StyleSheet, Text, Dimensions } from "react-native";
import { useState } from "react";

// TODO: Make error messages update in real time

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const TextInputField = ({ label, onChangeText, validation }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (input) => {
    const error = validation(input);

    if (error != null) {
      setErrorMessage(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.ioContainer}>
        <TextInput
          style={[
            styles.textInputBox,
            isFocused && styles.inputFocused,
            errorMessage && styles.inputError,
          ]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={onChangeText && handleChange}
        />
        {errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0.015 * screenHeight,
    // borderWidth: 1,
  },

  textInputBox: {
    width: 0.83 * screenWidth,
    height: 0.04 * screenHeight,

    borderColor: "black",
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 10,
  },

  ioContainer: {
    flexDirection: "column",
    height: 0.07 * screenHeight,
    // borderWidth: 1,
  },

  fieldLabel: {
    fontSize: 16,
    marginBottom: 10,
  },

  inputFocused: {
    borderColor: "green",
  },

  inputError: {
    borderColor: "red",
  },

  errorMessage: {
    color: "red",
    fontSize: 12,
    width: 0.83 * screenWidth,
    marginTop: 0.005 * screenHeight,
  },
});

export default TextInputField;
