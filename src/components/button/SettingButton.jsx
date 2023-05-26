import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import Icons from "../../constants/Icons";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const SettingButton = ({ placeholder, OnPress }) => {
  return (
    <TouchableOpacity style={[styles.border, styles.row]} onPress={OnPress}>
      <Text style={styles.label}>{placeholder}</Text>
      <Image source={Icons.rightAngel} style={styles.icon}></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  border: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#C8CDD1",

    height: 65,
  },

  icon: {
    height: 14,
    width: 14,
  },

  label: {
    fontSize: 16,
    width: 0.75 * screenWidth,
  },
});

export default SettingButton;
