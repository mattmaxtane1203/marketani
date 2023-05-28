import { Flex, ScrollView, Center, Box, HStack, Heading } from "native-base";
import React from "react";
import { FlatList, Text, View, StyleSheet, SafeAreaView, Image, } from "react-native";
import { color } from "react-native-elements/dist/helpers";

const KategoriTiga = ({ text }) => {
    return (
        <Box bg={'white'} w={'80px'} h={'80px'} rounded={10} shadow={2} ml={2} mr={1}>
            <Image source={require('./assets/icons/spice.png')} style={styles.iconStyle}/>
            <Text style={styles.textStyle}>{text}</Text>
        </Box>
    );
};

const styles = StyleSheet.create({
    fotoProduct: {
        width: '100%',
        height: '55%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginBottom: 5
    },
    textStyle: {
        fontSize: 10,
        color: '#6C6C6C',
        marginLeft: 22,
        marginBottom: 5,
        marginTop: 8
    },
    iconStyle:{
        width: '50%',
        height: '50%',
        marginLeft: 17,
        marginRight: 10,
        marginTop: 5
    }
})

export default KategoriTiga;