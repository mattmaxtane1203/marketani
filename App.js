import Wishlist from "./src/screens/customer/Wishlist/Wishlist";
import WishlistGateway from "./src/screens/customer/Wishlist/WishlistGateway";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PreloginGateway from "./src/screens/prelogin/PreloginGateway";
import DaftarToko from "./src/screens/seller/DaftarToko";
import SellerMainMenu from "./src/screens/seller/SellerMainMenu";
import ProdukGateway from "./src/screens/seller/product/ProdukGateway";
import { NavigationContainer } from "@react-navigation/native";
import Diskon from "./src/screens/seller/product/Diskon";
import ProdukUlasan from "./src/screens/seller/ulasan/ProdukUlasan";
import UlasanGateway from "./src/screens/seller/ulasan/UlasanGateway";
import ChatGateway from "./src/screens/seller/chat/ChatGateway";
import PusatBantuanGateway from "./src/screens/seller/pusatbantuan/PusatBantuanGateway";
import TransactionGateway from "./src/screens/customer/transaction/TransactionGateway";
import TransactionPage from "./src/screens/customer/transaction/TransactionPage";
import PesananGateway from "./src/screens/seller/pesanan/PesananGateway";
import HomeScreen from "./src/screens/customer/Home/Home";

export default function App() {
  return (
    <NavigationContainer>
      <HomeScreen />
      {/* <WishlistGateway /> */}
      {/* <PreloginGateway /> */}
      {/* <SellerMainMenu /> */}
      {/* <ProdukGateway /> */}
      {/* <UlasanGateway /> */}
      {/* <ChatGateway /> */}
      {/* <PusatBantuanGateway /> */}
      {/* <TransactionGateway /> */}
      {/* <PesananGateway /> */}
    </NavigationContainer>
  );
}
