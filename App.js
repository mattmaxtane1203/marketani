import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home/Home';
import Login from './src/screens/Prelogin/Login';
import Register from './src/screens/Prelogin/Register';
import Prelogin from './src/screens/Prelogin/Prelogin';

export default function App() {
  return (
    <Prelogin />
  )
}