import { SafeAreaView, Text, View, StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native";
import TextInputField from "../../components/input/TextInputField";
import PrimaryButton from "../../components/button/PrimaryButton";

// TODO: Figure out how to store data in BukaToko page

const AturAlamat = ({navigation}) => {

    function onPress() {
        navigation.navigate("Buka Toko")
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView behavior="height" style={{flex: 1}} keyboardVerticalOffset={100}>
                <ScrollView contentContainerStyle={styles.column}>
                    <TextInputField label={"Provinsi"} />
                    <TextInputField label={"Kota"} />
                    <TextInputField label={"Kabupaten"} />
                    <TextInputField label={"Kode Pos"} />
                    <TextInputField label={"Nama Jalan"} />

                    <View>
                        <PrimaryButton placeholder={"Lanjutkan"} onPress={onPress}/>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    column: {
        flexDirection: "column",
        alignItems: "center",
        margin: 20,
    }
})

export default AturAlamat