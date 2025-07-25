import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from './../../screens/AuthScreen/OnBoarding';
import Register from './../../screens/AuthScreen/Register';
import Login from './../../screens/AuthScreen/Login';
import ForgetPassword from './../../screens/AuthScreen/ForgetPassword';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
