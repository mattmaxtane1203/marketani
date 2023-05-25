import {
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatListItem from "../../../components/output/ChatListItem";
import { ScrollView } from "react-native";
import Chat from "./Chat";

const Stack = createNativeStackNavigator();

const ChatGateway = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat List" component={ChatList} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

const ChatList = ({ navigation }) => {
  const sampleName = "Matthew";

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <ChatListItem
          name={sampleName}
          onPress={() => navigation.navigate("Chat")}
        />
        <ChatListItem
          name={sampleName}
          onPress={() => navigation.navigate("Chat")}
        />
        <ChatListItem
          name={sampleName}
          onPress={() => navigation.navigate("Chat")}
        />
        <ChatListItem
          name={sampleName}
          onPress={() => navigation.navigate("Chat")}
        />
        <ChatListItem
          name={sampleName}
          onPress={() => navigation.navigate("Chat")}
        />
        <ChatListItem
          name={sampleName}
          onPress={() => navigation.navigate("Chat")}
        />
        <ChatListItem
          name={sampleName}
          onPress={() => navigation.navigate("Chat")}
        />
        <ChatListItem
          name={sampleName}
          onPress={() => navigation.navigate("Chat")}
        />
        <ChatListItem
          name={sampleName}
          onPress={() => navigation.navigate("Chat")}
        />
        <ChatListItem
          name={sampleName}
          onPress={() => navigation.navigate("Chat")}
        />
        <ChatListItem
          name={sampleName}
          onPress={() => navigation.navigate("Chat")}
        />
        <ChatListItem
          name={sampleName}
          onPress={() => navigation.navigate("Chat")}
        />
        <ChatListItem
          name={sampleName}
          onPress={() => navigation.navigate("Chat")}
        />
        <ChatListItem
          name={sampleName}
          onPress={() => navigation.navigate("Chat")}
        />
        <ChatListItem
          name={sampleName}
          onPress={() => navigation.navigate("Chat")}
        />
        <ChatListItem
          name={sampleName}
          onPress={() => navigation.navigate("Chat")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { height: "100%" },
});

export default ChatGateway;
