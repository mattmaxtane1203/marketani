import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Prelogin from './src/screens/prelogin/Prelogin';
import DaftarToko from './src/screens/seller/DaftarToko';
import SellerMainMenu from './src/screens/seller/SellerMainMenu';
import ProdukGateway from './src/screens/seller/product/ProdukGateway';

export default function App() {
  return (
    // <Prelogin />
    <SellerMainMenu />
    // <ProdukGateway />
  )
}