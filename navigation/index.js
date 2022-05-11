import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../screens/Chat';
import ChatsList from '../screens/ChatsList';
import { ROUTES } from './constants';

const Stack = createNativeStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.CHATS_LIST} component={ChatsList} />
      <Stack.Screen name={ROUTES.CHAT} component={Chat} />
    </Stack.Navigator>
  </NavigationContainer>
);
