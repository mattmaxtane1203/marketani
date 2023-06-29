import React from "react";
import { TouchableOpacity, View, Text, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const TransactionCard = () => {
  return (
    <TouchableOpacity>
      <View
        style={{
          borderWidth: 1,
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
          <Text>Date here</Text>
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
              Transaction Status
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
            Transaction ID here
          </Text>
          <Text>Amount of Items here</Text>
        </View>

        {/* Total Amount to Pay */}
        <View
          style={{
            marginHorizontal: screenWidth * 0.02,
            marginVertical: screenHeight * 0.01,
          }}
        >
          <Text>Total Belanja</Text>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Rp 100.000</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;
