import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../navigation/constants';

export default ({ chat }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigate(ROUTES.CHAT, { name: chat.name, contacts: chat.contacts })
      }
      style={styles.cardContainer}
    >
      <Text style={styles.chatTitle}>
        {chat.name}
        {chat.contacts.length > 1 && ':'}
      </Text>
      {chat.name === 'Group chat' && (
        <Text style={styles.contactNames}>
          {chat.contacts.map((contact) => contact.name).join(', ')}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'rgb(237, 250, 255)',
    borderBottomWidth: 1,
    borderColor: 'rgb(184, 187, 204)',
    padding: 20,
  },
  chatTitle: { color: 'rgb(39, 54, 67)' },
  contactNames: { color: 'rgb(184, 187, 204)', fontSize: 10 },
});
