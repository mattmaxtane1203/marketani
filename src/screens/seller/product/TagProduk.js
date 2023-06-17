import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { RadioButton, Text } from "react-native-paper";

const TagProduk = () => {
  const [selectedAsalProduk, setSelectedAsalProduk] = useState("lokal");
  const [selectedMetodePengembangan, setSelectedMetodePengembangan] =
    useState("konvensional");

  const handleAsalProdukChange = (value) => {
    setSelectedAsalProduk(value);
  };

  const handleMetodePengembanganChange = (value) => {
    setSelectedMetodePengembangan(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.radioContainer}>
        <Text style={styles.header}>Asal Produk</Text>
        <RadioButton.Group
          onValueChange={handleAsalProdukChange}
          value={selectedAsalProduk}
        >
          <View style={styles.radioButton}>
            <RadioButton value="lokal" color="#48BD5B" uncheckedColor="#000" />
            <Text style={styles.radioButtonLabel}>Lokal</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="impor" color="#48BD5B" uncheckedColor="#000" />
            <Text style={styles.radioButtonLabel}>Impor</Text>
          </View>
        </RadioButton.Group>
      </View>

      <View style={styles.radioContainer}>
        <Text style={styles.header}>Metode Pengembangan</Text>
        <RadioButton.Group
          onValueChange={handleMetodePengembanganChange}
          value={selectedMetodePengembangan}
        >
          <View style={styles.radioButton}>
            <RadioButton
              value="konvensional"
              color="#48BD5B"
              uncheckedColor="#000"
            />
            <Text style={styles.radioButtonLabel}>Konvensional</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton
              value="organik"
              color="#48BD5B"
              uncheckedColor="#000"
            />
            <Text style={styles.radioButtonLabel}>Organik</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton
              value="hidroponik"
              color="#48BD5B"
              uncheckedColor="#000"
            />
            <Text style={styles.radioButtonLabel}>Hidroponik</Text>
          </View>
        </RadioButton.Group>
      </View>

      {/* TODO: (Optional) Add a button to save the tags */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },

  radioContainer: {
    flexDirection: "column",
    width: 350,
    marginVertical: 10,
  },

  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },

  radioButtonLabel: {
    fontSize: 16,
    fontWeight: "normal",
    marginLeft: 10,
  },

  header: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },
});

export default TagProduk;
