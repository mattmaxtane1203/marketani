import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import SettingButton from "../../../components/button/SettingButton";
import { Text } from "react-native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const TopikKendala = ({ navigation, route }) => {
  const { topic } = route.params;

  const sampleQuestion =
    "Bagaimana mengubah nomor hanphone yang aktif di Marketani?";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View>
          <Text style={styles.topicTitle}>{topic}</Text>
        </View>
        <SettingButton
          placeholder={sampleQuestion}
          OnPress={() => navigation.navigate("Jawaban Pertanyaan")}
        />
        <SettingButton
          placeholder={sampleQuestion}
          OnPress={() => navigation.navigate("Jawaban Pertanyaan")}
        />
        <SettingButton
          placeholder={sampleQuestion}
          OnPress={() => navigation.navigate("Jawaban Pertanyaan")}
        />
        <SettingButton
          placeholder={sampleQuestion}
          OnPress={() => navigation.navigate("Jawaban Pertanyaan")}
        />
        <SettingButton
          placeholder={sampleQuestion}
          OnPress={() => navigation.navigate("Jawaban Pertanyaan")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollViewContainer: {
    flexGrow: 1,
  },

  topicTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 0.05 * screenWidth,
    marginVertical: 0.02 * screenHeight,
    width: 0.5 * screenWidth,
  },
});

export default TopikKendala;
