import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default ({ contact, isSelected, handleSelect }) => (
  <TouchableOpacity
    key={contact.name}
    onPress={() => handleSelect(contact)}
    style={styles.container}
  >
    <Text style={{ color: 'rgb(39, 54, 67)' }}>{contact.name}</Text>
    {isSelected ? (
      <MaterialIcons
        name='radio-button-checked'
        size={24}
        color='rgb(0, 163, 255)'
      />
    ) : (
      <MaterialIcons
        name='radio-button-unchecked'
        size={24}
        color='rgb(0, 163, 255)'
      />
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: 'rgb(184, 187, 204)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
});
