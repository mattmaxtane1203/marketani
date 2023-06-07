import { Text, ScrollView, SafeAreaView, View, StyleSheet } from "react-native";
import Ulasan from "../../../components/output/Ulasan";

const DaftarUlasan = () => {
  return (
    <ScrollView>
      {/* <Text>This is the daftar ulasan page</Text> */}
      <Ulasan />
      <Ulasan />
      <Ulasan />
      <Ulasan />
      <Ulasan />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default DaftarUlasan;
