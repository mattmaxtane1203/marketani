import { Box, HStack, Input } from "native-base";
import React, { useState } from "react";
import {
    TextInput,
    Image,
    FlatList,
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Pressable,
    TouchableOpacity
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const ChatButton = ({ onPress }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            ml={3}>
            <Ionicons name="ios-chatbox" size={24} color="white" />
            <Box
                px={1}
                rounded="full"
                position="absolute"
                top={-5}
                left={4}
                bg={'#EE1B1B'}
                _text={{
                    color: 'white',
                    fontSize: "11px",
                }}

            >5</Box>
        </TouchableOpacity>
    )
}

export default ChatButton;