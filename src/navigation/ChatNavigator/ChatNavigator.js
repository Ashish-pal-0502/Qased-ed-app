import { createStackNavigator } from '@react-navigation/stack';

import ChatScreen from './../../screens/ChatScreen/ChatScreen';
import MessageScreen from './../../screens/ChatScreen/MessageScreen';
import Login from './../../screens/AuthScreen/Login';
import RegisterParent from './../../screens/AuthScreen/RegisterParent';

const Stack = createStackNavigator();

const ChatNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterParent"
        component={RegisterParent}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ChatNavigator;
