import { Box, HStack, Input } from "native-base";
import React from "react";
import { FlatList, Text, View, StyleSheet, SafeAreaView, Pressable, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ChatGateway from "../../seller/chat/ChatGateway";



function HomeSearch({ navigation }) {
    return (
        <HStack space={6} w="full" px={6} bg={'#48bd5b'} py={4} alignItems="center" safeAreaTop>
            <Input
                placeholder="Cari disini"
                w="85%"
                bg={'white'}
                type="search"
                variant="filled"
                h={12}
                borderWidth={0}
                borderTopLeftRadius={30}
                borderBottomLeftRadius={30}
                borderTopRightRadius={30}
                borderBottomRightRadius={30}
                _focus={{
                    bg: 'white',
                }}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
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
        </HStack>

    )
}

export default HomeSearch;