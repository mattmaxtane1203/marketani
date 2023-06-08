import { Box, HStack, Input } from "native-base";
import React, { useState } from "react";
import { TextInput, Image, FlatList, Text, View, StyleSheet, SafeAreaView, Pressable, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ChatGateway from "../../seller/chat/ChatGateway";
import Icons from "../../../constants/Icons";
import HomeSearchBar from "../../../components/input/HomeSearchBar";
import ChatButton from "../../../components/button/ChatButton";
import HomeGateway from "./HomeGateway";



const HomeHeader = ({ navigation }) => {
    return (
        <HStack space={6} w="full" px={6} bg={'#48bd5b'} py={4} alignItems="center" safeAreaTop>
            <HomeSearchBar placeholder={"Cari disini"} />
            <ChatButton onPress={() => navigation.navigate("Chat")} />
        </HStack>

    );
};

const styles = StyleSheet.create({
    searchBar: {
        display: "flex",
        flexDirection: "row",
        // alignItems: "center",
        paddingHorizontal: 30,
        height: 45,
        borderRadius: 30,
        backgroundColor: "#F5F5F5"
    },
    icon: {
        width: 20,
        height: 20,
        marginTop: 12,
        marginRight: 10,
        marginLeft: -18
    },
    test: {
        marginRight: 5,
        // marginLeft: -100,
        width: "75%",
        height: "100%",
    }
});

export default HomeHeader;