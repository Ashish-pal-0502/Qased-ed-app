import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeScreen from './../../screens/HomeScreen/HomeScreen';
import { useTranslation } from 'react-i18next';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import AuthNavigator from './../AuthNavigator/AuthNavigator';
import OTPVerification from './../../screens/AuthScreen/OTPVerification';
import ProfileNavigator from './../ProfileNavigator/ProfileNavigator';
import ChatScreen from './../../screens/ChatScreen/ChatScreen';
import Instructors from './../../screens/InstructorScreen/Instructors';
import RegisterParent from './../../screens/AuthScreen/RegisterParent';
import RegisterStudent from './../../screens/AuthScreen/RegisterStudent';
const Tab = createBottomTabNavigator();

const AppNavigator = ({ navigation }) => {
  const { t } = useTranslation();

  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.button,
        tabBarInactiveTintColor: colors.bottomtabtext,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 70 + insets.bottom,
          paddingBottom: insets.bottom,
          backgroundColor: 'white',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: t('home'),
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: fonts.Medium,
            color: colors.bottomtabtext,
          },
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('../../assets/Images/TabImages/HomeIcon.png')}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="OTPVerification"
        component={AuthNavigator}
        options={{
          tabBarLabel: t('timetable'),
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: fonts.Medium,
            color: colors.bottomtabtext,
          },
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('../../assets/Images/TabImages/TimeTableIcon.png')}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="AuthNavigator"
        component={RegisterStudent}
        options={{
          tabBarLabel: t('chats'),
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: fonts.Medium,
            color: colors.bottomtabtext,
          },
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('../../assets/Images/TabImages/ChatIcon.png')}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarLabel: t('profile'),
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: fonts.Medium,
            color: colors.bottomtabtext,
          },
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('../../assets/Images/TabImages/ProfileIcon.png')}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
