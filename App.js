import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PreloginGateway from './src/screens/prelogin/PreloginGateway';
import DaftarToko from './src/screens/seller/DaftarToko';
import SellerMainMenu from './src/screens/seller/SellerMainMenu';
import ProdukGateway from './src/screens/seller/product/ProdukGateway';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      {/* <PreloginGateway /> */}
      {/* <SellerMainMenu /> */}
      <ProdukGateway />
    </NavigationContainer>
  )
}