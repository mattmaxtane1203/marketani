import { FlatList, Text, View, StyleSheet, SafeAreaView, Image, HStack } from "react-native";
import React, { useState, useEffect } from "react";
import { Box, NativeBaseProvider, ScrollView, Heading } from "native-base";
import HomeSearch from "./HomeSearch";
import HomeProducts from "./HomeProducts";
import ProductSatu from "./ProductSatu";
import ProductDua from "./ProductDua";
import ProductTiga from "./ProductTiga";
import ProductEmpat from "./ProductEmpat";
import ProductLima from "./ProductLima";
import KategoriSatu from "./KategoriSatu";
import KategoriDua from "./KategoriDua";
import KategoriTiga from "./KategoriTiga";
import KategoriEmpat from "./KategoriEmpat";
import KategoriLima from "./KategoriLima";

function Home() {


    const Boxes = () => {
        return (
            <Box h='45%'>
                <Image source={require('./assets/home-banner.jpg')} style={styles.paddingHomeBanner} />
                <ScrollView
                    horizontal={true} showsHorizontalScrollIndicator={false}>
                    <KategoriSatu text='Sayur' />
                    <KategoriDua text='Buah' />
                    <KategoriTiga text='Bumbu' />
                    <KategoriEmpat text='Pokok' />
                    <KategoriLima text='Kacang' />
                </ScrollView>
            </Box>
            // <View style={styles.boxContainer}>
            //     <View style={styles.box}>
            //         <Image source={require('./assets/home-banner.jpg')} style={styles.paddingHomeBanner} />
            //     </View>
            // </View>
        )
    }

    return (
        <NativeBaseProvider>

            {/* <HomeProducts/> */}
            <Box flex={1} bg={'#F5F5F5'}>
                <HomeSearch />
                <ScrollView
                    vertical={true}
                    showsVerticalScrollIndicator={false}
                >
                    <Boxes />
                    <Box mt={5}>
                        <Heading style={styles.subTitleDua}>Diskon Spesial Hari ini</Heading>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <ProductSatu title='Wortel (1 kg)' price='Rp15.000' discountPrice='Rp12.000' />
                            <ProductDua title='Nanas (500 gr)' price='Rp20.000' discountPrice='Rp15.000' />
                            <ProductTiga title='Cabai (500 gr)' price='25.000' discountPrice='17.000' />
                            <ProductEmpat title='Jeruk (1 kg)' price='Rp50.000' discountPrice='Rp25.000' />
                            <ProductLima title='Beras (1 kg)' price='Rp25.000' discountPrice='Rp15.000' />
                        </ScrollView>
                    </Box>
                    <Box>
                        <Heading style={styles.subTitle}>Sedang Populer</Heading>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <ProductSatu title='Wortel (1 kg)' price='Rp15.000' discountPrice='Rp12.000' />
                            <ProductDua title='Nanas (500 gr)' price='Rp20.000' discountPrice='Rp15.000' />
                            <ProductTiga title='Cabai (500 gr)' price='25.000' discountPrice='17.000' />
                            <ProductEmpat title='Jeruk (1 kg)' price='Rp50.000' discountPrice='Rp25.000' />
                            <ProductLima title='Beras (1 kg)' price='Rp25.000' discountPrice='Rp15.000' />
                        </ScrollView>
                    </Box>
                </ScrollView>
            </Box>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    boxContainer: {
        width: '100%',
        height: '85%',
        backgroundColor: `#F5F5F5`,
        paddingTop: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box: {
        width: '100%',
        height: '45%',
        bottom: '70%',
        padding: 5,
        backgroundColor: 'white'
    },
    paddingHomeBanner: {
        width: '100%',
        height: '65%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginBottom: 10
    },
    subTitle: {
        fontSize: 18,
        marginLeft: 18,
        marginTop: 10
    },
    subTitleDua: {
        fontSize: 18,
        marginLeft: 18,
    }

});

export default Home;