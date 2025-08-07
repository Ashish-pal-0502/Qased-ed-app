import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from './../../screens/AuthScreen/OnBoarding';
import HomeScreen from './../../screens/HomeScreen/HomeScreen';
import RegisterStudent from './../../screens/AuthScreen/RegisterStudent';
import MyChildrenScreen from './../../screens/MyChidren/MyChildrenScreen';
import HomeWithoutLoginMain from './../../screens/HomeScreen/HomeWithoutLoginMain';
import HomeWithoutLoginDropdown from './../../screens/HomeScreen/HomeWithoutLoginDropdown';
import Instructors from './../../screens/InstructorScreen/Instructors';
import InstructorDetails from './../../screens/InstructorScreen/InstructorDetails';
import ScheduleScreen from './../../screens/ScheduleScreen/ScheduleScreen';
import MyLibrary from './../../screens/MyLibrary/MyLibrary';
import Notifications from './../../screens/NotificationScreen/Notifications';
import Login from './../../screens/AuthScreen/Login';
import RegisterParent from './../../screens/AuthScreen/RegisterParent';
import useAuth from './../../auth/useAuth';
import EditStudentProfile from './../../screens/ProfileScreen/EditStudentProfile';
import LearningPackagesScreen from './../../screens/LearningPackagesScreen/LearningPackagesScreen';
import ChildrenParentLibrary from './../../screens/MyLibrary/ChildrenParentLibrary';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      initialRouteName={user ? 'HomeScreen' : 'HomeWithoutLoginMain'}
    >
      {!user && (
        <Stack.Screen
          name="HomeWithoutLoginMain"
          component={HomeWithoutLoginMain}
          options={{ headerShown: false }}
        />
      )}
      {user && (
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      )}

      <Stack.Screen
        name="MyChildrenScreen"
        component={MyChildrenScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeWithoutLoginDropdown"
        component={HomeWithoutLoginDropdown}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Instructors"
        component={Instructors}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InstructorDetails"
        component={InstructorDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScheduleScreen"
        component={ScheduleScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyLibrary"
        component={MyLibrary}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChildrenParentLibrary"
        component={ChildrenParentLibrary}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
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
      <Stack.Screen
        name="EditStudentProfile"
        component={EditStudentProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LearningPackagesScreen"
        component={LearningPackagesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
