import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import SmallButton from "../../../components/button/SmallButton";
import { useState, useEffect } from "react";
import {
  generateOrderNumber,
  generateTrackingNumber,
} from "../../../utils/PesananUtils";
import axios from "axios";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

// Matthew IP
const currentIP = "192.168.18.6";
// const currentIP = "172.20.10.2";

// Glennix IP
// const currentIP = "192.168.0.158";

const Pesanan = ({ navigation, route }) => {
  const { transactionId, transactionStatus, transactionDate, transactionTime } =
    route.params;

  const [transactionDetails, setTransactionDetails] = useState([]);
  const [currentTransactionStatus, setCurrentTransactionStatus] =
    useState(transactionStatus);

  const fetchTransactionDetails = () => {
    const currentIP = "192.168.18.6"; // Update with your desired IP

    axios
      .get(
        `http://${currentIP}:8081/transaction/getTransactionDetails/${transactionId}`
      )
      .then((response) => {
        // Fetch product details for each transaction detail
        const productIds = response.data.map((detail) => detail.product_id);
        const fetchProductDetails = productIds.map((productId) =>
          axios.get(`http://${currentIP}:8081/product/getProduct/${productId}`)
        );

        axios.all(fetchProductDetails).then(
          axios.spread((...responses) => {
            const products = responses.map((res) => res.data.product);
            const transactionDetailsWithProduct = response.data.map(
              (detail, index) => ({
                ...detail,
                product: products[index],
              })
            );
            setTransactionDetails(transactionDetailsWithProduct);
          })
        );
      })
      .catch((error) => {
        console.error("Error fetching transaction details:", error);
      });
  };

  const handleAturPengiriman = async () => {
    const newStatus = "Sedang Dikirim";

    try {
      await axios.put(
        `http://${currentIP}:8081/transaction/updateTransactionStatus/${transactionId}`,
        { newStatus }
      );

      setCurrentTransactionStatus(newStatus);
    } catch (error) {
      console.error("Error updating transaction status:", error);
    }
  };

  const handleTerkirim = async () => {
    const newStatus = "Terkirim";

    try {
      await axios.put(
        `http://${currentIP}:8081/transaction/updateTransactionStatus/${transactionId}`,
        { newStatus }
      );

      setCurrentTransactionStatus(newStatus);
    } catch (error) {
      console.log("Error updating transaction status:", error);
    }
  };

  useEffect(() => {
    fetchTransactionDetails();
  }, []);

  const formattedDate = new Date(transactionDate).toLocaleDateString("en-GB");

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "column",
          // borderWidth: 1,
          marginVertical: screenHeight * 0.02,
          marginHorizontal: screenWidth * 0.05,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginBottom: screenHeight * 0.01,
            // borderWidth: 1,
          }}
        >
          {/* Bar if Sedang Diproses */}
          {currentTransactionStatus === "Sedang Diproses" && (
            <View
              style={{
                backgroundColor: "blue",
                // borderWidth: 1,
                width: screenWidth * 0.015,
                borderRadius: 5,
                marginRight: screenWidth * 0.02,
              }}
            />
          )}

          {/* Bar if Sedang Dikirim */}
          {currentTransactionStatus === "Sedang Dikirim" && (
            <View
              style={{
                backgroundColor: "orange",
                // borderWidth: 1,
                width: screenWidth * 0.015,
                borderRadius: 5,
                marginRight: screenWidth * 0.02,
              }}
            />
          )}

          {/* Bar if Terkirim */}
          {currentTransactionStatus === "Terkirim" && (
            <View
              style={{
                backgroundColor: "#48BD5B",
                // borderWidth: 1,
                width: screenWidth * 0.015,
                borderRadius: 5,
                marginRight: screenWidth * 0.02,
              }}
            />
          )}

          {/* Bar if Selesai */}
          {currentTransactionStatus === "Selesai" && (
            <View
              style={{
                backgroundColor: "green",
                // borderWidth: 1,
                width: screenWidth * 0.015,
                borderRadius: 5,
                marginRight: screenWidth * 0.02,
              }}
            />
          )}

          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {currentTransactionStatus}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            marginBottom: screenHeight * 0.02,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Transaction ID</Text>
            <Text>{transactionId}</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Date</Text>
            <Text>{formattedDate}</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Time</Text>
            <Text>{transactionTime}</Text>
          </View>
        </View>

        {/* Transaction Details */}
        <View style={{ marginBottom: screenHeight * 0.02 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Items Ordered
          </Text>
          {transactionDetails.map((detail) => (
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "gray",
                paddingHorizontal: screenWidth * 0.03,
                height: screenHeight * 0.05,
                flexDirection: "column",
                justifyContent: "center",
                marginVertical: screenHeight * 0.005,
              }}
              key={detail.product_id}
            >
              <Text>{detail.product.nama_produk}</Text>
              <Text>{detail.quantity}x</Text>
              {/* Display other product details as needed */}
            </View>
          ))}
        </View>

        {/* Pengaturan Pengiriman */}
        {currentTransactionStatus === "Sedang Diproses" && (
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Atur Pengiriman
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: screenWidth * 0.6,
                  height: screenHeight * 0.1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>
                  Atur pengiriman pesanan sebelum tanggal INSERT DATE HERE.
                  Pesanan akan dibatal secara otomatis jika tidak mengatur
                  pengiriman
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: screenWidth * 0.2,
                  height: screenHeight * 0.05,
                  borderRadius: 8,
                  backgroundColor: "#48BD5B",
                  margin: 10,
                }}
                onPress={handleAturPengiriman}
              >
                <Text style={{ color: "white" }}>Atur</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Pengaturan Pengiriman Terkirim */}
        {currentTransactionStatus === "Sedang Dikirim" && (
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Atur Pengiriman
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: screenWidth * 0.6,
                  height: screenHeight * 0.05,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>
                  Jika pesanan sudah tiba pada tujuan, tekan tombol TERKIRIM
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: screenWidth * 0.2,
                  height: screenHeight * 0.05,
                  borderRadius: 8,
                  backgroundColor: "#48BD5B",
                  margin: 10,
                }}
                onPress={handleTerkirim}
              >
                <Text style={{ color: "white" }}>Terkirim</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Pesanan;
