import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import PesananListItem from "../../../components/output/PesananListItem";
import Images from "../../../constants/Images";
import Pesanan from "./Pesanan";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

// Matthew IP
const currentIP = "192.168.18.6";
// const currentIP = "172.20.10.2";

// Glennix IP
// const currentIP = "192.168.0.158";

const PesananGateway = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Daftar Pesanan" component={PesananList} />
      <Stack.Screen name="Pesanan" component={Pesanan} />
    </Stack.Navigator>
  );
};

const PesananList = ({ navigation }) => {
  const [transactionHeaders, setTransactionHeaders] = useState([]);
  const currentSeller = useSelector((state) => state.user.currentUser);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      axios
        .get(
          `http://${currentIP}:8081/transaction/getTransactionHeaders/${currentSeller.id}`
        )
        .then((response) => {
          setTransactionHeaders(response.data);
        })
        .catch((error) => {
          console.error("Error fetching transaction headers:", error);
        });
      console.log(transactionHeaders);
    }
  }, [isFocused]);

  return (
    <SafeAreaView>
      <ScrollView>
        {transactionHeaders.map((header) => (
          <PesananListItem
            key={header.transaction_id}
            transactionId={header.transaction_id}
            transactionStatus={header.status_pemesanan}
            transactionDate={header.transaction_date}
            transactionTime={header.transaction_time}
            onPress={() =>
              navigation.navigate("Pesanan", {
                transactionId: header.transaction_id,
                transactionStatus: header.status_pemesanan,
                transactionDate: header.transaction_date,
                transactionTime: header.transaction_time,
              })
            }
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PesananGateway;
