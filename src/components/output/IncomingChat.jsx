import { Dimensions } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Images from "../../constants/Images";
import Icon from "react-native-vector-icons/FontAwesome5";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const IncomingChat = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.userInfo}>
        <Image
          source={Images.profilePictureSample}
          style={styles.profilePicture}
        />
        <Text style={styles.username}>{name}</Text>
      </View>
      <Icon
        name="chevron-right"
        size={screenWidth * 0.03}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginVertical: screenHeight * 0.005,

    width: "100%",
    height: screenHeight * 0.075,
    // borderWidth: 1,
  },

  profilePicture: {
    borderRadius: 40,
    // TODO: Make profile picture responsive
    width: 40,
    height: 40,
    marginHorizontal: screenWidth * 0.02,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  username: {
    fontWeight: "bold",
    fontSize: 16,
  },

  icon: {
    marginHorizontal: screenWidth * 0.05,
  },
});

export default IncomingChat;
