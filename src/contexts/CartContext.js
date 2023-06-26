import React, { useState, createContext } from "react";

const CartContext = createContext();


const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (productId, quantity, sellerId, nama_produk, harga_per_pesanan) => {
    console.log(cartItems)
    const existingItemIndex = cartItems.findIndex(
      (item) => item.productId === productId
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      const newItem = {
        productId,
        quantity,
        sellerId,
        nama_produk,
        harga_per_pesanan,
      };

      setCartItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.productId !== productId)
    );
  };

  const separateItemsBySeller = () => {
    const separatedItems = {};

    cartItems.forEach((item) => {
      const { sellerId } = item;

      if (!separatedItems[sellerId]) {
        separatedItems[sellerId] = [];
      }

      separatedItems[sellerId].push(item);
    });

    return separatedItems;
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, separateItemsBySeller }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export { CartContext };
