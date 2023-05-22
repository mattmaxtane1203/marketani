import { SafeAreaView, KeyboardAvoidingView, Text, View, StyleSheet } from "react-native";
import TextInputField from "../../../components/input/TextInputField";
import SettingButton from "../../../components/button/SettingButton";
import PhotoInputField from "../../../components/input/PhotoInput";
import WeightInput from "../../../components/input/WeightInput";

const TambahProduk = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <PhotoInputField label={"Foto Produk"}/>
                <TextInputField label={"Nama"}/>
                <TextInputField label={"Deskripsi"}/>
                <WeightInput label={"Berat/pesanan"}/>
                <TextInputField label={"Harga/pesanan"}/>
                <TextInputField label={"Stok"}/>
            </View>
            <View style={styles.bordered}>
                <SettingButton placeholder={"Pilih Tag Produk"} OnPress={() => navigation.navigate("Tag Produk")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
    },

    bordered: {
        // borderWidth: 2,
        // borderColor: "red",
        width: "100%",
    }
})

export default TambahProduk