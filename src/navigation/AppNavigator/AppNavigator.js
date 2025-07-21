import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeScreen from './../../screens/HomeScreen/HomeScreen';
import TimeTableScreen from './../../screens/TimeTableScreen/TimeTableScreen';
import ChatScreen from './../../screens/ChatScreen/ChatScreen';
import ProfileScreen from './../../screens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#00204D',
        tabBarInactiveTintColor: 'gray',
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
          tabBarLabel: 'Home',
          tabBarLabelStyle: { fontSize: 10 },
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('../../assets/Images/TabImages/HomeIcon.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="FreeChannelNavigator"
        component={TimeTableScreen}
        options={{
          tabBarLabel: 'Time Table',
          tabBarLabelStyle: { fontSize: 10 },
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('../../assets/Images/TabImages/TimeTableIcon.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="PaidChannelsNavigator"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chats',
          tabBarLabelStyle: { fontSize: 10 },
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('../../assets/Images/TabImages/ChatIcon.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="MySubsNavigator"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: { fontSize: 10 },
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('../../assets/Images/TabImages/ProfileIcon.png')}
              style={{
                width: 25,
                height: 25,
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
