import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import PrimaryButton from "../../../components/button/PrimaryButton";
import SellerSearchBar from "../../../components/input/SellerSearchBar";
import SellerProduct from "../../../components/output/SellerProduct";
import { ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";

// ! Change this according to the IP address of your machine
// Matthew IP
// const currentIP = "192.168.18.6";
// const currentIP = "172.20.10.2";

// Glennix IP
const currentIP = "192.168.0.158";

// Bima IP
// const currentIP = "192.168.0.100";

// const currentIP = "172.20.10.2";
// const currentIP = null;

// Nadia IP
// const currentIP = "192.168.0.103";

// Binus IP
// const currentIP = "10.20.147.108"

const Produk = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const currentSeller = useSelector((state) => state.user.currentUser);

  useFocusEffect(
    React.useCallback(() => {
      fetchProducts();

      return () => {
        // Clean up the effect when the screen loses focus
        setProducts([]);
      };
    }, [])
  );

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://${currentIP}:8081/product/getAllProducts/${currentSeller.id}`
      );
      setProducts(response.data.products);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SellerSearchBar placeholder={"Cari Produk"} />
      {/* TODO: Add filter button */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {products.map((product) => (
          <SellerProduct
            key={product.product_id}
            productName={product.nama_produk}
            productPrice={`Rp ${product.harga_per_pesanan}/g`}
            stock={product.stok}
            amountSold={product.amount_sold}
            beriDiskonOnPress={() => navigation.navigate("Beri Diskon")}
            ulasanOnPress={() => navigation.navigate("Ulasan")}
            ubahOnPress={() => navigation.navigate("Ubah Produk")}
            showButtons={true}
          />
        ))}
        <PrimaryButton
          placeholder={"Tambah Produk"}
          onPress={() => navigation.navigate("Tambah Produk")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },

  scrollContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
});

export default Produk;
