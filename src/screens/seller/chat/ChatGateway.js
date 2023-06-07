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
      <Stack.Screen name="Daftar Pesan" component={ChatList} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

const ChatList = ({ navigation }) => {
  const sampleName = "Matthew";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
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
  container: {
    flex: 1,
  },

  scrollViewContainer: {
    flexGrow: 1,
  },
});

export default ChatGateway;
