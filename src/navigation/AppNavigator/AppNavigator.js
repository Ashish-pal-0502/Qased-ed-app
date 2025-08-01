import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { fonts } from './../../config/fonts';
import ProfileNavigator from './../ProfileNavigator/ProfileNavigator';
import HomeNavigator from './../HomeNavigator/HomeNavigator';
import ChatNavigator from './../ChatNavigator/ChatNavigator';
import TimeTableNavigator from './../TimeTableNavigator/TimeTableNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = ({ navigation }) => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  const renderTabIcon = (icon, label, focused) => {
    if (focused) {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 15,
            paddingVertical: 8,
            borderRadius: 40,
            backgroundColor: '#C1DBFF',
            minWidth: 100,
          }}
        >
          <Image
            source={icon}
            style={{
              width: 24,
              height: 24,
              resizeMode: 'contain',
              tintColor: '#1F7EFF',
              marginRight: 8,
            }}
          />
          <Text
            style={{
              fontSize: 12,
              fontFamily: fonts.Medium,
              color: '#1F7EFF',
            }}
          >
            {label}
          </Text>
        </View>
      );
    } else {
      return (
        <Image
          source={icon}
          style={{
            width: 24,
            height: 24,
            resizeMode: 'contain',
            tintColor: '#111827',
          }}
        />
      );
    }
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 70 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 15,
          paddingHorizontal: 10,
          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          // position: 'absolute',
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            renderTabIcon(
              require('../../assets/Images/TabImages/HomeIcon2.png'),
              t('home'),
              focused,
            ),
        }}
      />
      <Tab.Screen
        name="TimeTableNavigator"
        component={TimeTableNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            renderTabIcon(
              require('../../assets/Images/TabImages/TimeTableIcon.png'),
              t('timetable'),
              focused,
            ),
        }}
      />
      <Tab.Screen
        name="ChatNavigator"
        component={ChatNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            renderTabIcon(
              require('../../assets/Images/TabImages/ChatIcon.png'),
              t('chats'),
              focused,
            ),
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            renderTabIcon(
              require('../../assets/Images/TabImages/ProfileIcon.png'),
              t('profile'),
              focused,
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
