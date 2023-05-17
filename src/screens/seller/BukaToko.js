import { ScrollView, SafeAreaView, View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";
import TextInputField from "../../components/input/TextInputField";
import SettingButton from "../../components/button/SettingButton";
import PrimaryButton from "../../components/button/PrimaryButton";

// TODO: Change appearance of back button in the header
// TODO: Figure out how to store address in this page from the AturAlamat page

const BukaToko = ({navigation}) => {

    const [namaToko, setNamaToko] = useState('')
    const [alamatToko, setAlamatToko] = useState('')

    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInputField label={"Nama Toko"}/>
            </View>

            <View>
                <SettingButton placeholder={"Atur Alamat"} OnPress={() => navigation.navigate("Atur Alamat")}/>
            </View>

            <View style={styles.container}>
                <PrimaryButton placeholder={"Buka Toko"} onPress={() => navigation.navigate("Seller Main Menu")} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        alignSelf: "center",
        margin: 20,
    },

})

export default BukaToko