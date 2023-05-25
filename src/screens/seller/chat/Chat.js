import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import MessageInput from "../../../components/input/MessageInput";
import { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function handleSendMessage(message) {
    const newMessage = {
      text: message,
      id: Math.random().toString(), // Generate a unique ID for the message
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage("");
    console.log(message);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100} // Adjust this value as needed
      >
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          ref={(ref) => {
            this.scrollView = ref;
          }}
          onContentSizeChange={() =>
            this.scrollView.scrollToEnd({ animated: true })
          }
        >
          {messages.map((message) => (
            <Text key={message.id}>{message.text}</Text>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <MessageInput onSend={handleSendMessage} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#808080",
  },
});

export default Chat;
