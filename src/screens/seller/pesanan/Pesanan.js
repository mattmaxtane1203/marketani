import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import SmallButton from "../../../components/button/SmallButton";
import { useState, useEffect } from "react";
import {
  generateOrderNumber,
  generateTrackingNumber,
} from "../../../utils/PesananUtils";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const orderNumber = generateOrderNumber();
const trackingNumber = generateTrackingNumber();

const Pesanan = ({ navigation, route }) => {
  const {
    productName,
    productPrice,
    quantity,
    dateOrdered,
    productPhoto,
    username,
    telephoneNumber,
    address,
    userPhoto,
  } = route.params;

  const formattedDate = dateOrdered.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const deliveryDate = new Date(dateOrdered);
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  const maxDeliveryDate = deliveryDate.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const eta = new Date(dateOrdered);
  eta.setDate(eta.getDate() + 7);
  const maxEta = eta.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const [isNew, setIsNew] = useState(true);
  const [isDelivering, setIsDelivering] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);
  const [countdown, setCountdown] = useState(30000);

  useEffect(() => {
    let interval;

    if (!isNew) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1000);
      }, 1000);
    }

    if (countdown === 0) {
      clearInterval(interval);
      setIsDelivering(false);
      setIsDelivered(true);
    }

    return () => clearInterval(interval);
  }, [isNew, countdown]);

  const formattedCountdown = `${Math.floor(
    (countdown / 1000 / 60) % 60
  )}m ${Math.floor((countdown / 1000) % 60)}s`;

  function handleAturButtonPress() {
    setIsNew(false);
    setIsDelivering(true);
  }

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "column",
        }}
      >
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Informasi Pemesanan</Text>

          <View style={styles.informationContainer}>
            <Text style={styles.informationLabel}>Status Pemesanan</Text>
            {isNew && !isDelivering && !isDelivered && (
              <Text>Pesanan Baru</Text>
            )}
            {isDelivering && !isNew && !isDelivered && (
              <Text>Sedang Dikirim</Text>
            )}
            {isDelivered && !isNew && !isDelivering && <Text>Terkirim</Text>}
          </View>

          <View style={styles.informationContainer}>
            <Text style={styles.informationLabel}>Tanggal Pemesanan</Text>
            <Text>{formattedDate}</Text>
          </View>

          <View style={styles.informationContainer}>
            <Text style={styles.informationLabel}>ID Pesanan</Text>
            <Text>#{orderNumber}</Text>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>Produk Dipesan</Text>
          <View style={styles.productContainer}>
            <Image source={productPhoto} style={styles.productPhoto} />
            <View style={styles.productInformationContainer}>
              <Text style={styles.bold}>{productName}</Text>
              <Text>{productPrice}</Text>
              <Text>
                Kuantitas:
                <Text> {quantity}x</Text>
              </Text>
            </View>
          </View>
        </View>

        {/* Atur Pengiriman */}
        {isNew && !isDelivering && !isDelivered && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Atur Pengiriman</Text>
            <View style={styles.informationContainer}>
              <Text
                style={{
                  // borderWidth: 1,
                  width: 0.6 * screenWidth,
                }}
              >
                Mohon mengatur paket sebelum {maxDeliveryDate} atau pesanan
                tersebut akan dibatalkan secara otomatis
              </Text>
              <SmallButton placeholder="Atur" onPress={handleAturButtonPress} />
            </View>
          </View>
        )}

        {/* Delivering or Delivered */}
        {!isNew && (isDelivering || isDelivered) && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>Informasi Pengiriman</Text>
            <View style={styles.informationContainer}>
              <Text style={styles.informationLabel}>Kurir</Text>
              <Text>JNE - Reguler</Text>
            </View>

            {!isNew && isDelivering && !isDelivered && (
              <View style={styles.informationContainer}>
                <Text style={styles.informationLabel}>
                  Estimasi Tanggal Tiba
                </Text>
                <Text>
                  {formattedCountdown} lagi, {maxEta}
                </Text>
              </View>
            )}

            <View style={styles.informationContainer}>
              <Text style={styles.informationLabel}>Nomor Resi</Text>
              <Text>#{trackingNumber}</Text>
            </View>

            <View style={styles.informationContainer}>
              <Text style={styles.informationLabel}>Tujuan</Text>
              <View style={styles.longInformation}>
                <Text style={[styles.bold, styles.information]}>
                  {username}
                </Text>
                <Text style={styles.information}>{telephoneNumber}</Text>
                <Text style={styles.information}>{address}</Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontSize: 16,
    fontWeight: "bold",
  },

  sectionContainer: {
    flexDirection: "column",
    margin: 0.02 * screenWidth,
    // borderWidth: 1,
  },

  informationContainer: {
    flexDirection: "row",
    marginVertical: 0.005 * screenHeight,
    // alignItems: "center",
    justifyContent: "space-between",
    // borderWidth: 1,
  },

  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },

  informationLabel: {
    color: "#8e8e8e",
  },

  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 0.005 * screenHeight,
    padding: 0.01 * screenWidth,
  },

  productInformationContainer: {
    flexDirection: "column",
    marginVertical: 0.005 * screenHeight,
    marginHorizontal: 0.025 * screenWidth,
    justifyContent: "space-between",
  },

  longInformation: {
    flexDirection: "column",
  },

  productPhoto: {
    width: 0.15 * screenWidth,
    height: 0.15 * screenWidth,
    borderRadius: 5,
  },

  information: {
    textAlign: "right",
  },
});

export default Pesanan;
