import { View, TextInput, StyleSheet, Text } from "react-native";
import { useState } from "react";

// TODO: Fix TextInputField red highlighting mechanisms for errors

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
    <View>
      <Text style={styles.fieldLabel}>{label}</Text>
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
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputBox: {
    width: 325,
    height: 35,

    borderColor: "black",
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 10,

    marginBottom: 20,
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
    marginBottom: 8,
  },
});

export default TextInputField;
