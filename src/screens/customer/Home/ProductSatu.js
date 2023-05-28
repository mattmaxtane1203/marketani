import { Flex, ScrollView, Center, Box, HStack, Heading } from "native-base";
import React from "react";
import { FlatList, Text, View, StyleSheet, SafeAreaView, Image, } from "react-native";
import { color } from "react-native-elements/dist/helpers";

const ProductSatu = ({title, price, discountPrice, product}) => {
    return (
        <Box bg={'white'} w={120} h={180} paddingBottom={5} rounded={10} shadow={4} mb={10} ml={5} mr={1} mt={3}>
            <Image source={require('./assets/carrot-home.jpeg')} style={styles.fotoProduct}/>
            <Heading fontSize={11} isTruncated marginBottom={2} marginTop={1} marginLeft={2} color={'black'}>
                {title}
            </Heading>
            <Text style={styles.textStyle}>{price}</Text>
            <Box bg={'#48bd5b'} w={20} h={5} rounded={6} ml={2}>
                <Heading fontSize={10} py={1} textAlign='center' color={'white'}>
                    {discountPrice}
                </Heading>
            </Box>
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
        textDecorationLine: 'line-through',
        color: '#A9A9A9',
        marginLeft: 10,
        marginBottom: 5
    }
})

export default ProductSatu;