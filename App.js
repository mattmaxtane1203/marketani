import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Prelogin from './src/screens/Prelogin/Prelogin';
import DaftarToko from './src/screens/seller/DaftarToko';
import SellerMainMenu from './src/screens/seller/SellerMainMenu';

export default function App() {
  return (
    // <Prelogin />
    <SellerMainMenu />
  )
}