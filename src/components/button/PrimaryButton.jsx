import { TouchableOpacity, Text, SafeAreaView, StyleSheet } from "react-native";

const PrimaryButton = ({ placeholder, onPress }) => {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={{ textAlign: "center", fontSize: 16, color: "#FFFFF0" }}>
        {placeholder}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    justifyContent: "center",
    width: 240,
    height: 43,
    borderRadius: 8,
    backgroundColor: "#48BD5B",
    margin: 10,
  },
});

export default PrimaryButton;
