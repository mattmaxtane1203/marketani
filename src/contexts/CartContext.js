import {
    ScrollView,
    Text,
    StyleSheet,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity
  } from "react-native";
  import React, {useState} from 'react';
  import {createContext} from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [productCount, setProductCount] = useState(1);

    return(
        <CartContext.Provider value={{productCount, setProductCount}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
export {CartContext};