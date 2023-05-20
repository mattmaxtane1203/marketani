import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// TODO: Add behaviour for image selector

const PhotoInputField = ({label}) => {

  const handlePress = () => {
    // Handle the photo selection logic here
    console.log("Select a photo");
  };

  return (
    <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
        <View style={styles.touchableContainer}>
            <TouchableOpacity onPress={handlePress} style={styles.touchable}>
                <View style={styles.iconContainer}>
                    <AntDesign name="plus" size={24} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },

    touchableContainer: {
        alignSelf: "center",
    },
  
    touchable: {
    width: 120,
    height: 120,
    // backgroundColor: "green",
    borderWidth: 1,
    borderColor: "#48BD5B",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#48BD5B",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  text: {
    color: "black",
    fontSize: 16,
    marginBottom: 10,
  },
});

export default PhotoInputField;
