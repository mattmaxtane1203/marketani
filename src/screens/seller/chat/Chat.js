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
import TextMessage from "../../../components/output/TextMessage";

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
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <View style={styles.contentContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            ref={(ref) => {
              this.scrollView = ref;
            }}
            onContentSizeChange={() =>
              this.scrollView.scrollToEnd({ animated: true })
            }
          >
            {/* TODO: Put sender on the right and receiving messages on the left */}
            {messages.map((message) => (
              <TextMessage message={message} />
            ))}
          </ScrollView>
          <View style={styles.inputContainer}>
            <MessageInput onSend={handleSendMessage} />
          </View>
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
    flex: 1,
  },
  scrollViewContent: {
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
