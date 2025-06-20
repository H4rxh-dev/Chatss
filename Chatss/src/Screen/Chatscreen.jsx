import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const arrow = <Icon name="angle-left" size={30} color="#900" />;
// angle-left

const Chatscreen = ({route}) => {
  const insets = useSafeAreaInsets();

console.log('====================================');
console.log("routeuser",route.params);
console.log('====================================');
const{user}=route.params

  const [messages, setMessages] = useState([
    { id: '1', text: 'Hi there!', sender: 'other' },
    { id: '2', text: 'Hello!', sender: 'me' },
    { id: '3', text: 'How are you doing?', sender: 'other' },
    { id: '4', text: "I'm good! Just working on the app. You?", sender: 'me' },
    { id: '5', text: 'Same here, working from home today.', sender: 'other' },
    { id: '6', text: 'Nice! Did you check the new design?', sender: 'me' },
    { id: '7', text: 'Yes, it looks clean and simple.', sender: 'other' },
    { id: '8', text: 'Thanks! Trying to keep it minimal.', sender: 'me' },
    { id: '9', text: 'What tech stack are you using?', sender: 'other' },
    { id: '10', text: 'React Native + Firebase for now.', sender: 'me' },
    { id: '11', text: 'Solid choice. Are you deploying soon?', sender: 'other' },
    { id: '12', text: 'Hopefully by the end of this week.', sender: 'me' },
    { id: '13', text: 'Let me know if you need help.', sender: 'other' },
    { id: '14', text: 'Sure! I really appreciate it 🙌', sender: 'me' },
    { id: '15', text: 'No worries! Just ping me.', sender: 'other' },
    { id: '16', text: 'Cool! Will do 🔥', sender: 'me' },
  ]);

  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: input,
        sender: 'me',
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'me' ? styles.myMessage : styles.theirMessage,
      ]}
    >
      <Text
        style={[
          styles.messageText,
          item.sender === 'me' ? styles.myText : styles.theirText,
        ]}
      >
        {item.text}
      </Text>
    </View>
  );

  return (
<SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff', paddingTop: insets.top }}>
      <KeyboardAvoidingView
        style={[styles.container, { paddingBottom: insets.bottom }]}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={90}
      >
        {/* Profile Header */}
<View style={[styles.profileHeader, { paddingTop: insets.top }]}>
    <Text>{arrow}</Text>
          <View style={styles.avatar} />
          <Text style={styles.profileName}>{user?.name}</Text>
        </View>

        {/* Chat List */}
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.chatList}
        />

        {/* Input Section */}
        <View style={[styles.inputContainer]}>
          <TextInput
            style={styles.input}
            value={input}
            placeholder="Type a message..."
            onChangeText={setInput}
            placeholderTextColor={"black"}
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chatscreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
profileHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 20,
  gap:20,
  paddingTop: 40, // replace this line with dynamic top padding
  paddingBottom: 15,
  backgroundColor: '#f0f4f8',
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
},
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#70b9ff',
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  chatList: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 20,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 15,
    marginVertical: 25,
    maxWidth: '75%',
  },
  myMessage: {
    backgroundColor: '#70b9ff',
    alignSelf: 'flex-end',
  },
  theirMessage: {
    backgroundColor: '#dbe4f1',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 14,
  },
  myText: {
    color: '#fff',
  },
  theirText: {
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 20,
    paddingHorizontal:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginBottom:20
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 45,
    color: '#000',
  },
  sendButton: {
    backgroundColor: '#3f93e8',
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
});