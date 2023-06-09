// Pages
import Wishlist from "./src/screens/customer/wishlist/Wishlist";
import WishlistGateway from "./src/screens/customer/wishlist/WishlistGateway";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import PreloginGateway from "./src/screens/prelogin/PreloginGateway";
import DaftarToko from "./src/screens/seller/DaftarToko";
import SellerMainMenu from "./src/screens/seller/SellerMainMenu";
import ProdukGateway from "./src/screens/seller/product/ProdukGateway";
import { NavigationContainer } from "@react-navigation/native";
import Diskon from "./src/screens/seller/product/Diskon";
// import ProdukUlasan from "./src/screens/seller/product/ulasan/ProdukUlasan";
// import UlasanGateway from "./src/screens/seller/product/ulasan/UlasanGateway";
import ChatGateway from "./src/screens/seller/chat/ChatGateway";
import PusatBantuanGateway from "./src/screens/seller/pusatbantuan/PusatBantuanGateway";
import TransactionGateway from "./src/screens/customer/transaction/TransactionGateway";
import TransactionPage from "./src/screens/customer/transaction/TransactionPage";
import PesananGateway from "./src/screens/seller/pesanan/PesananGateway";
import HomeScreen from "./src/screens/customer/home/Home";
import UserMenuGateway from "./src/screens/customer/UserMenuGateway";
import SearchResultGateway from "./src/screens/customer/search_result/SearchResultGateway";
import HalamanTokoGateway from "./src/screens/customer/halaman_toko/HalamanTokoGateway";
import Register from "./src/screens/prelogin/Register";
import CartGateway from "./src/screens/customer/cart/CartGateway";
import CartPage from "./src/screens/customer/cart/CartPage";

// Tools
import { Provider } from "react-redux";
import store from "./src/redux/store";
import WaitingPayment from "./src/screens/customer/transaction/WaitingPaymentPage";
import Pesanan from "./src/screens/seller/pesanan/Pesanan";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PreloginGateway />
        {/* <Register /> */}

        {/* User-related Menus */}
        {/* <UserMenuGateway /> */}
        {/* <CartPage/> */}
        {/* <HomeScreen /> */}
        {/* <WishlistGateway /> */}
        {/* <TransactionGateway /> */}
        {/* <WaitingPayment/> */}
        {/* <CartGateway/> */}

        {/* Seller-related Menus */}
        {/* <SellerMainMenu /> */}
        {/* <ProdukGateway /> */}
        {/* <UlasanGateway /> */}
        {/* <ChatGateway /> */}
        {/* <PusatBantuanGateway /> */}
        {/* <PesananGateway /> */}
        {/* <Pesanan /> */}
        {/* <SearchResultGateway/> */}
        {/* <HalamanTokoGateway/> */}
      </NavigationContainer>
    </Provider>
  );
}
