import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import TopNavigationHeader from './../../components/Header/TopNavigationHeader';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import { useTranslation } from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import useAuth from './../../auth/useAuth';
import Toast from 'react-native-toast-message';

const Settings = () => {
  const navigation = useNavigation();
  const { logOut, user } = useAuth();

  const handleLogout = () => {
    Toast.show({
      type: 'customToast',
      text1: 'Logout success',
      text2: 'You have been logged out successfully!!',
      position: 'bottom',
      visibilityTime: 2000,
    });

    setTimeout(() => {
      logOut();
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }, 2100);
  };

  const ProfileListItem = ({ label, onPress, danger }) => (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <Text style={[styles.listItemText, danger && styles.dangerText]}>
        {label}
      </Text>
      <Ionicons
        name="chevron-forward"
        size={16}
        color={danger ? '#F22E32' : '#333333'}
      />
    </TouchableOpacity>
  );

  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 12 }}>
        <TopNavigationHeader title={t('settings')} />
      </View>

      <View style={styles.listWrapper}>
        <ProfileListItem
          label={t('Account settings') || 'Notifications'}
          onPress={() => {
            Toast.show({
              type: 'customToast',
              text1: 'Logout success ',
              text2: 'You have been logged out successfully!!',
              position: 'bottom',
              visibilityTime: 2000,
            });
          }}
        />
        <ProfileListItem
          label={t('Terms and conditions') || 'Notifications'}
          onPress={() => {}}
        />
        <ProfileListItem
          label={t('Privacy Policy') || 'Notifications'}
          onPress={() => {}}
        />
        <ProfileListItem
          label={t('About the app') || 'Notifications'}
          onPress={() => {}}
        />
        <ProfileListItem
          label={t('Help and support') || 'Settings'}
          onPress={() => {}}
        />
        <ProfileListItem
          label={t('logout') || 'Logout'}
          onPress={handleLogout}
          danger
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listWrapper: {
    marginTop: 10,
    paddingHorizontal: 20,
    gap: 12,
  },
  listItem: {
    backgroundColor: colors.white,
    paddingVertical: 22,
    paddingHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 68,
  },
  listItemText: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: '#2F2F2F',
  },
  dangerText: {
    color: '#F22E32',
  },
});
