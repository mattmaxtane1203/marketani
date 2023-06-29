import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icons from "../../../constants/Icons";
import Images from "../../../constants/Images";
import BackButton from "../../../components/button/BackButton";
import TransactionSearchBar from "../../../components/input/TransactionSearchBar";
import TransactionOrangeBox from "../../../components/button/TransactionOrangeBox";
import TransactionGreenBox from "../../../components/button/TransactionGreenBox";
import DetailPesananSelesai from "./DetailPesananSelesai";
import DetailPesananOTW from "./DetailPesananOTW";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import TransactionCard from "../../../components/output/TransactionCard";

// Matthew IP
const currentIP = "192.168.18.6";
// const currentIP = "172.20.10.2";

// Glennix IP
// const currentIP = "192.168.0.158";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const TransactionPage = ({ navigation }) => {
  //   const [transactionHeaders, setTransactionHeaders] = useState([]);
  //   const currentCustomer = useSelector((state) => state.user.currentUser);
  //   const isFocused = useIsFocused();

  //   useEffect(() => {
  //     if (isFocused) {
  //       axios
  //         .get(
  //           `http://${currentIP}:8081/transaction/getTransactionHeaders/${currentCustomer.id}`
  //         )
  //         .then((response) => {
  //           setTransactionHeaders(response.data);
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching transaction headers:", error);
  //         });
  //       console.log(transactionHeaders);
  //     }
  //   }, [isFocused]);

  return (
    <View style={TransactionPageStyle.background}>
      <SafeAreaView>
        <View style={TransactionPageStyle.header}>
          <BackButton onPress={() => navigation.navigate()}></BackButton>
          <TransactionSearchBar placeholder={"Cari Transaksi"} />
        </View>

        <ScrollView>
          <View style={TransactionPageStyle.transactionContainer}>
            <TransactionOrangeBox
              onPress={() =>
                navigation.navigate("Detail Pesanan Dalam Pengiriman")
              }
              productImages={Images.tomatHijau}
              placeholderDate={"27 Maret 2023"}
              placeholderName={"Tomat Hijau (500gr)"}
              placeholderNumber={2}
              placeholderPrice={38000}
            />
            <TransactionCard />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const TransactionPageStyle = StyleSheet.create({
  background: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomColor: "#CFCFCF",
    borderBottomWidth: 0.5,
  },

  waitingPayment: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CFCFCF",
  },

  paymentHeader: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginStart: 10,
  },

  iconMoney: {
    width: 25,
    height: 25,
  },

  title: {
    fontSize: 16,
    marginStart: 10,
  },

  iconRightArrow: {
    width: 12,
    height: 20,
  },

  transactionContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 100,
  },
});

export default TransactionPage;
