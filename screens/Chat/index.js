import React, { useState } from 'react';
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default ({ route }) => {
  const [message, setMessage] = useState('');
  const {
    params: { contacts },
  } = route;
  const [messages, setMessages] = useState([
    { id: 2, name: contacts[0].name, text: 'Hello there' },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { id: 1, name: '', text: message },
        ...contacts.map((contact) => ({
          id: 2,
          name: contact.name,
          text: `${message} 🖤`,
        })),
      ]);
      setMessage('');
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={100}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View>
          {messages.map((message, index) => (
            <View
              key={index}
              style={{
                alignSelf: message.id === 1 ? 'flex-end' : 'flex-start',
              }}
            >
              <Text style={styles.contactName}>{message.name}</Text>
              <View style={styles.textBubble}>
                <Text style={styles.text}>{message.text}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={message}
            style={styles.textInput}
            placeholder='Type something...'
            onChangeText={setMessage}
          />
          <TouchableOpacity
            onPress={handleSendMessage}
            style={{ marginLeft: 10 }}
          >
            <Feather name='send' size={24} color='rgb(0, 163, 255)' />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  contactName: { color: 'rgb(184, 187, 204)', fontSize: 9 },
  textBubble: {
    backgroundColor: 'rgb(237, 250, 255)',
    padding: 5,
    borderRadius: 10,
  },
  text: {
    color: 'rgb(39, 54, 67)',
    fontSize: 12,
  },
  inputContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  textInput: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgb(255, 255, 255)',
  },
});
