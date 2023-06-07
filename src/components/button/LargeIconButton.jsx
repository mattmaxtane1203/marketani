import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { color } from "react-native-elements/dist/helpers";
import Icon from "react-native-vector-icons/FontAwesome5";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const LargeIconButton = ({ iconName, placeholder, isRed, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, isRed && { borderColor: "red" }]}
    >
      <Icon
        name={iconName}
        size={screenWidth * 0.06}
        style={[styles.icon, isRed && { color: "red" }]}
      />
      <Text style={[{ fontSize: 16 }, isRed && { color: "red" }]}>
        {placeholder}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderRadius: 5,
    marginVertical: screenHeight * 0.0075,
    marginHorizontal: screenWidth * 0.05,
    height: screenHeight * 0.05,
  },

  icon: {
    marginHorizontal: screenWidth * 0.025,
  },
});

export default LargeIconButton;
