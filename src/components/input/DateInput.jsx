import { View, TextInput, StyleSheet, Text, Modal } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import ReactNativeModernDatepicker, {
  getFormatedDate,
} from "react-native-modern-datepicker";
import DatePicker from "react-native-date-picker";

// TODO: Fix TextInputField red highlighting mechanisms for errors

const DateInputField = ({ label }) => {
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "DD/MM/YYYY"
  );

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  function handleDateChange(selectedDate) {
    setDate(selectedDate);
    setOpen(false);
  }

  return (
    <View>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TouchableOpacity style={styles.inputBox} onPress={() => setOpen(true)}>
        <Text>{date.toString()}</Text>
      </TouchableOpacity>
      {/* TODO: Fix date picker */}

      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={handleDateChange}
        onCancel={() => setOpen(false)}
      />
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default DateInputField;
