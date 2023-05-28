import { Dimensions } from "react-native";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const SmallButton = ({ placeholder, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={{ color: "white" }}>{placeholder}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 10,
    backgroundColor: "#48BD5B",
    height: "100%",
    width: 0.2 * screenWidth,
  },
});

export default SmallButton;
