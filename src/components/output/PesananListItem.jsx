import { Dimensions } from "react-native";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const PesananListItem = ({
  transactionId,
  transactionStatus,
  transactionDate,
  transactionTime,
  onPress,
}) => {
  const formattedDate = new Date(transactionDate).toLocaleDateString("en-GB");
  const formattedTime = new Date(transactionTime).toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.userContainer, styles.margined]}>
        <Text style={styles.label}>#{transactionId}</Text>
      </View>
      <View style={[styles.productContainer, styles.margined]}>
        <View style={styles.productInformation}>
          <Text style={[styles.transactionInformation, { fontFamily: "bold" }]}>
            {transactionStatus}
          </Text>
          <Text style={styles.transactionInformation}>{formattedDate}</Text>
          <Text style={styles.transactionInformation}>{formattedTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  margined: {
    margin: 0.02 * screenWidth,
  },

  container: {
    flexDirection: "column",
    borderWidth: 1,
    marginVertical: 0.02 * screenWidth,
    marginHorizontal: 0.03 * screenWidth,
    borderRadius: 10,
    borderColor: "#DEDEDE",
  },

  productInformation: {
    flexDirection: "column",
  },

  productContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  productPhoto: {
    width: 0.1 * screenWidth,
    height: 0.1 * screenWidth,
    borderRadius: 5,
  },

  userPhoto: {
    width: 0.1 * screenWidth,
    height: 0.1 * screenWidth,
    borderRadius: 40,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 8,
  },

  transactionInformation: {
    fontSize: 14,
    marginHorizontal: 8,
  },
});

export default PesananListItem;
