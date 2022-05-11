import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SelectContact from '../SelectContact';
import { CONTACTS } from '../../constants';

export default ({ visible, setVisible, handleAddGroupChat }) => {
  const [selectedContacts, setSelectedContacts] = useState([]);

  const handleSelect = (el) => {
    const selected = selectedContacts.find((item) => item.name === el.name);
    if (selected) {
      const filtered = selectedContacts.filter(
        (item) => item.name !== selected.name
      );
      setSelectedContacts(filtered);
    } else setSelectedContacts([...selectedContacts, el]);
  };

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add people to group</Text>
          {CONTACTS.map((contact) => (
            <SelectContact
              key={contact.name}
              contact={contact}
              isSelected={selectedContacts.find(
                (item) => item.name === contact.name
              )}
              handleSelect={handleSelect}
            />
          ))}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.buttonClose}
            >
              <Text styles={{ color: 'rgb(39, 54, 67)' }}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleAddGroupChat(selectedContacts);
                setSelectedContacts([]);
              }}
              disabled={selectedContacts.length < 2}
              style={styles.buttonCreate}
            >
              <Text style={{ color: 'rgb(0, 163, 255)' }}>CREATE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: { flex: 1, justifyContent: 'flex-end' },
  modalView: {
    backgroundColor: 'white',
    paddingBottom: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonCreate: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 163, 255, 0.1)',
  },
  buttonClose: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgb(248, 248, 250)',
  },
  textStyle: {
    color: 'rgb(39, 54, 67)',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginVertical: 10,
    textAlign: 'center',
    color: 'rgb(39, 54, 67)',
    fontWeight: 'bold',
  },
});
