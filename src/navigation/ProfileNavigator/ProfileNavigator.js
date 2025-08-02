import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './../../screens/ProfileScreen/ProfileScreen';
import Notifications from './../../screens/NotificationScreen/Notifications';
import Settings from './../../screens/Settings/Settings';
import EditProfile from './../../screens/ProfileScreen/EditProfile';
import Login from './../../screens/AuthScreen/Login';
import RegisterParent from './../../screens/AuthScreen/RegisterParent';
import RegisterStudent from './../../screens/AuthScreen/RegisterStudent';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
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
      <Stack.Screen
        name="RegisterStudent"
        component={RegisterStudent}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
