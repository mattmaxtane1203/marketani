import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TextMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text key={message.id} style={styles.message}>
        {message.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  message: {
    color: "white",
    fontSize: 16,
  },
});

export default TextMessage;
