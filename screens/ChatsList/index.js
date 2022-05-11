import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SelectModal from '../../components/SelectModal';
import { CONTACTS } from '../../constants';
import ChatCard from '../../components/ChatCard';

export default ({ navigation }) => {
  const { setOptions } = navigation;
  const [modalVisible, setModalVisible] = useState(false);
  const [chats, setChats] = useState(
    CONTACTS.map((item) => ({ name: item.name, contacts: [item] }))
  );

  const handleAddGroupChat = (contacts) => {
    setChats([...chats, { name: 'Group chat', contacts: contacts }]);
    setModalVisible(false);
  };

  useEffect(() => {
    setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <AntDesign name='pluscircleo' size={24} color='rgb(0, 163, 255)' />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <ScrollView>
      <SelectModal
        visible={modalVisible}
        setVisible={setModalVisible}
        handleAddGroupChat={handleAddGroupChat}
      />
      {chats.map((chat, index) => (
        <ChatCard key={index} chat={chat} />
      ))}
    </ScrollView>
  );
};
