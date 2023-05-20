import { SafeAreaView, KeyboardAvoidingView, Text, View, StyleSheet } from "react-native";
import PrimaryButton from "../../../components/button/PrimaryButton";
import SellerSearchBar from "../../../components/input/SellerSearchBar";

const Produk = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <SellerSearchBar placeholder={"Cari Produk"}/>
            {/* TODO: Insert store products here */}
            <PrimaryButton placeholder={"Tambah Produk"} onPress={() => navigation.navigate("Tambah Produk")}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center"
    },  
})

export default Produk