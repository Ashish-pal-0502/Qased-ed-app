import { createStackNavigator } from '@react-navigation/stack';

import TimeTableScreen from './../../screens/TimeTableScreen/TimeTableScreen';
import AttendanceScreen from './../../screens/AttendanceScreen/AttendanceScreen';
import ProgressReportScreen from './../../screens/ProgressReport/ProgressReportScreen';
import Login from './../../screens/AuthScreen/Login';
import RegisterParent from './../../screens/AuthScreen/RegisterParent';

const Stack = createStackNavigator();

const TimeTableNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TimeTableScreen"
        component={TimeTableScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AttendanceScreen"
        component={AttendanceScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProgressReportScreen"
        component={ProgressReportScreen}
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

export default TimeTableNavigator;
