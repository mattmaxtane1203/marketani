import React from "react";
import { TouchableOpacity, View, Text, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const TransactionCard = ({
  transactionId,
  quantity,
  transactionStatus,
  totalPrice,
  transactionDate,
  onPress,
}) => {
  const formattedDate = new Date(transactionDate).toLocaleDateString("en-GB");
  return (
    <TouchableOpacity
      style={{ marginVertical: screenHeight * 0.01 }}
      onPress={onPress}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: "#D8D8D8",
          paddingVertical: screenHeight * 0.005,
          width: screenWidth * 0.9,
          height: screenHeight * 0.15,
          borderRadius: 5,
          alignSelf: "center",
        }}
      >
        {/* Date and Transaction Status */}
        <View
          style={{
            marginHorizontal: screenWidth * 0.02,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>{formattedDate}</Text>
          <View
            style={{
              backgroundColor: "orange",
              width: screenWidth * 0.275,
              height: screenHeight * 0.02,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>
              {transactionStatus}
            </Text>
          </View>
        </View>
        {/* Transaction ID and Amount of Products */}
        <View
          style={{
            marginHorizontal: screenWidth * 0.02,
            marginVertical: screenHeight * 0.01,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {transactionId}
          </Text>
          <Text>{quantity} barang</Text>
        </View>

        {/* Total Amount to Pay */}
        <View
          style={{
            marginHorizontal: screenWidth * 0.02,
            marginVertical: screenHeight * 0.01,
          }}
        >
          <Text>Total Belanja</Text>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{totalPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;
