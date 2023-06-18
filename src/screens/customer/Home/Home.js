import {
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  HStack,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  extendTheme,
  Box,
  NativeBaseProvider,
  ScrollView,
  Heading,
} from "native-base";
import HomeHeader from "./HomeHeader";
import HomeProducts from "./HomeProducts";
import ProductCard from "../../../components/output/ProductCard";
import KategoriSatu from "./KategoriSatu";
import { useSelector } from "react-redux";

// TODO: Fix scrolling

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};

const theme = extendTheme({ colors: newColorTheme });

function Home({ navigation }) {
  const currentCustomer = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    console.log(currentCustomer);
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
            <Heading style={styles.subTitleDua}>Shop: Sayur Segar</Heading>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <ProductCard
                title="Wortel (1 kg)"
                price="Rp15.000"
                discountPrice="Rp12.000"
                onPress={() => navigation.navigate("Produk")}
              />
              <ProductCard
                title="Wortel (1 kg)"
                price="Rp15.000"
                discountPrice="Rp12.000"
                onPress={() => navigation.navigate("Produk")}
              />
              <ProductCard
                title="Wortel (1 kg)"
                price="Rp15.000"
                discountPrice="Rp12.000"
                onPress={() => navigation.navigate("Produk")}
              />
              <ProductCard
                title="Wortel (1 kg)"
                price="Rp15.000"
                discountPrice="Rp12.000"
                onPress={() => navigation.navigate("Produk")}
              />
            </ScrollView>
          </Box>
          <Box>
            <Heading style={styles.subTitle}>
              Shop: Insert Store Name Here
            </Heading>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <ProductCard
                title="Wortel (1 kg)"
                price="Rp15.000"
                discountPrice="Rp12.000"
                onPress={() => navigation.navigate("Produk")}
              />
              <ProductCard
                title="Wortel (1 kg)"
                price="Rp15.000"
                discountPrice="Rp12.000"
                onPress={() => navigation.navigate("Produk")}
              />
              <ProductCard
                title="Wortel (1 kg)"
                price="Rp15.000"
                discountPrice="Rp12.000"
                onPress={() => navigation.navigate("Produk")}
              />
              <ProductCard
                title="Wortel (1 kg)"
                price="Rp15.000"
                discountPrice="Rp12.000"
                onPress={() => navigation.navigate("Produk")}
              />
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
