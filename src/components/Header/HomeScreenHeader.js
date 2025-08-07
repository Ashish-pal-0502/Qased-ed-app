import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import NotificationIcon from '../../assets/Images/Icons/Notification.png';
import LibraryIcon from '../../assets/Images/Icons/LibraryIcon.jpg';
import { useTranslation } from 'react-i18next';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import useAuth from './../../auth/useAuth';

const HomeScreenHeader = () => {
  const { user } = useAuth();

  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');

  const languages = [
    { label: 'Arabic', code: 'ar' },
    { label: 'English', code: 'en' },
  ];

  const handleLanguageChange = (langCode, label) => {
    setSelectedLang(label.slice(0, 2).toUpperCase());
    i18n.changeLanguage(langCode);
    setShowDropdown(false);
  };
  return (
    <View style={styles.main}>
      <TouchableOpacity>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/3845/3845897.png',
          }}
          style={styles.logo}
        />
      </TouchableOpacity>

      <Text style={styles.welcomeText}>
        {user?.name
          ? `${t('navhome.welcome')} ${user.name}`
          : t('navhome.welcome_user')}
      </Text>

      <View style={styles.headerRight}>
        <View style={{ position: 'relative' }}>
          <TouchableOpacity
            style={styles.languageButton}
            onPress={() => setShowDropdown(!showDropdown)}
          >
            <Text style={styles.langText}>{selectedLang}</Text>
            <Ionicons name="chevron-down" size={10} color="#000" />
          </TouchableOpacity>
          {showDropdown && (
            <View style={styles.dropdown}>
              {languages.map(lang => (
                <TouchableOpacity
                  key={lang.code}
                  style={styles.dropdownItem}
                  onPress={() => handleLanguageChange(lang.code, lang.label)}
                >
                  <Text style={styles.dropdownText}>{lang.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {user?.type === 'Student' && (
          <TouchableOpacity onPress={() => navigation.navigate('MyLibrary')}>
            <Image source={LibraryIcon} style={styles.libraryIcon} />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Image source={NotificationIcon} style={styles.notificationDot} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  logo: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  welcomeText: {
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    flex: 1,
    textAlign: 'center',
    color: colors.black,
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  langText: {
    fontSize: 10,
    fontFamily: fonts.Regular,
    color: colors.black,
    marginRight: 4,
  },
  dropdown: {
    position: 'absolute',
    top: 20,
    left: 0,
    backgroundColor: '#fff',
    borderRadius: 3,

    paddingVertical: 6,
    minWidth: 38,
    borderWidth: 1,
    borderColor: '#ECECEC',
    zIndex: 999,
    alignItems: 'center',
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 2,
  },
  dropdownText: {
    fontSize: 8,
    fontFamily: fonts.Regular,
    color: '#101828',
  },

  notificationDot: {
    width: 22,
    height: 22,
    borderRadius: 12,
    resizeMode: 'contain',
  },
  libraryIcon: {
    width: 22,
    height: 22,
    borderRadius: 12,
    resizeMode: 'contain',
  },
});
