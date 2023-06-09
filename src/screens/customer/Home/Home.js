import {
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  HStack,
} from "react-native";
import React, { useState, useEffect } from "react";
import { extendTheme, Box, NativeBaseProvider, Heading } from "native-base";
import HomeHeader from "./HomeHeader";
import ProductCard from "../../../components/output/ProductCard";
import KategoriSatu from "./KategoriSatu";
import { useSelector } from "react-redux";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import numeral from "numeral";

// TODO: Fix scrolling

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};

const theme = extendTheme({ colors: newColorTheme });

// Matthew IP
const currentIP = "192.168.18.6";
// const currentIP = "172.20.10.2";

// Glennix IP
// const currentIP = "192.168.0.158";

// Bima IP
// const currentIP = "192.168.0.100";

// Nadia IP
// const currentIP = "192.168.0.103";

// Binus IP
// const currentIP = "10.20.147.108"

function Home({ navigation }) {
  const currentCustomer = useSelector((state) => state.user.currentUser);
  const [products, setProducts] = useState([]);
  const [products5, setProducts5] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://${currentIP}:8081/product/getAllProducts/1`
      );
      setProducts(response.data.products);
    } catch (error) {
      console.log("Error fetching products:", error);
    }

    try {
      const response = await axios.get(
        `http://${currentIP}:8081/product/getAllProducts/2`
      );
      // console.log(response.data.products)
      setProducts5(response.data.products);
      console.log("@@@@@@@" + products5);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    console.log("Current User: " + currentCustomer.id);
  }, []);

  const Boxes = () => {
    return (
      <Box h="45%">
        <Image
          source={require("./assets/home-banner.jpg")}
          style={styles.paddingHomeBanner}
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <KategoriSatu text="Sayur" />
          <KategoriSatu text="Sayur" />
          <KategoriSatu text="Sayur" />
          <KategoriSatu text="Sayur" />
          <KategoriSatu text="Sayur" />
        </ScrollView>
      </Box>
    );
  };

  return (
    <NativeBaseProvider theme={theme}>
      <View flex={1} bg={"#F5F5F5"}>
        <HomeHeader navigation={navigation} />
        <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
          <Boxes />
          <Box mt={5}>
            <Heading style={styles.subTitleDua}>Shop: 1</Heading>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {products.map((product) => (
                <ProductCard
                  key={product.product_id}
                  title={product.nama_produk}
                  price={
                    "Rp " + numeral(product.harga_per_pesanan).format("0,0")
                  }
                  discountPrice="Rp2.000"
                  onPress={() =>
                    navigation.navigate("Produk", {
                      productId: product.product_id,
                    })
                  }
                />
              ))}
            </ScrollView>
          </Box>
          <Box>
            <Heading style={styles.subTitle}>Shop: 2</Heading>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {products5.map((product) => (
                <ProductCard
                  key={product.product_id}
                  title={product.nama_produk}
                  price={
                    "Rp " + numeral(product.harga_per_pesanan).format("0,0")
                  }
                  discountPrice="Rp2.000"
                  onPress={() =>
                    navigation.navigate("Produk", {
                      productId: product.product_id,
                    })
                  }
                />
              ))}
            </ScrollView>
          </Box>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxContainer: {
    width: "100%",
    height: "85%",
    backgroundColor: `#F5F5F5`,
    paddingTop: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: "100%",
    height: "45%",
    bottom: "70%",
    padding: 5,
    backgroundColor: "white",
  },
  paddingHomeBanner: {
    width: "100%",
    height: "65%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    marginLeft: 18,
    marginTop: 10,
  },
  subTitleDua: {
    fontSize: 18,
    marginLeft: 18,
  },
});

export default Home;
