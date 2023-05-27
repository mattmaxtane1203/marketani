import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View, SafeAreaView } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const JawabanPertanyaan = () => {
  const sampleQuestion = "Apakah saya dapat menghubungi kurir secara langsung?";
  const sampleAnswer =
    "Saat ini nomor kurir tidak dapat langsung diakses dari aplikasi. Jika terdapat perubahan alamat atau ingin mengetahui status pengiriman, maka kamu bisa menghubungi CS Marketani melalui telepon atau email.\n\nTerima kasih";

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.questionText, styles.contentWidth]}>
        {sampleQuestion}
      </Text>
      <Text style={[styles.answerText, styles.contentWidth]}>
        {sampleAnswer}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },

  contentWidth: {
    width: 0.9 * screenWidth,
  },

  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    width: screenWidth,
    marginVertical: 12,
    textAlign: "justify",
  },

  answerText: {
    fontSize: 15,
    width: screenWidth,
    marginVertical: 12,
    textAlign: "justify",
  },
});

export default JawabanPertanyaan;
