import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const productQuantity = () => {
    const [quantity, setQuantity] = useState(0);

    // Function to increment the quantity
    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    // Function to decrement the quantity
    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <View style={style.container}>


            <TouchableOpacity onPress={decrementQuantity}>
                <AntDesign name="minuscircleo" size={24} color="#48BD5B" />
            </TouchableOpacity>
            <Text marginHorizontal={20}>{quantity}</Text>
            <TouchableOpacity onPress={incrementQuantity}>
                <AntDesign name="pluscircleo" size={24} color="#48BD5B" />
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
        // justifyContent: 'space-between',
    }
})

export default productQuantity;
