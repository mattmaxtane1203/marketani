import { View, TextInput, StyleSheet, Text } from "react-native";
import { useState } from "react";
import DatePicker from "react-native-date-picker";
import { TouchableOpacity } from "react-native";

// TODO: Fix TextInputField red highlighting mechanisms for errors

const DateInputField = ({ label }) => {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  function handleConfirm(date) {
    setDate(date);
    setIsOpen(false);
  }

  return (
    <View>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TouchableOpacity style={styles.inputBox} onPress={() => setIsOpen(true)}>
        <Text>{date.toString()}</Text>
      </TouchableOpacity>
      {/* TODO: Fix date picker */}
      {/* {isOpen && (
        <DatePicker
          mode="date"
          date={date}
          open={isOpen}
          onDateChange={setDate}
          textColor="#000"
        />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
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

export default DateInputField;
