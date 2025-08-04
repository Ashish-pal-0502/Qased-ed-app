import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ThoughtOfDayCard from './../../components/Cards/ThoughtOfDayCard';
import notification from '../../assets/Images/Icons/Notification.png';
import HomeNavButtons from './../../components/HomeNavButtons/HomeNavButtons';
import HomeBanner from './../../components/Banners/HomeBanner';
import { fonts } from './../../config/fonts';
import colors from './../../config/colors';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import useAuth from './../../auth/useAuth';
import HomeWithoutLoginDropdown from './HomeWithoutLoginDropdown';
import ModeOfLearning from './../../components/ModeOfLearning/ModeOfLearning';

const HomeWithoutLoginMain = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const { user } = useAuth();

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
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3845/3845897.png',
            }}
            style={styles.logo}
          />
          <Text style={styles.appname}>{t('welcome_to_qased')}</Text>

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
                      onPress={() =>
                        handleLanguageChange(lang.code, lang.label)
                      }
                    >
                      <Text style={styles.dropdownText}>{lang.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Notifications')}
            >
              <Image source={notification} style={styles.notificationDot} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginBottom: 8 }}>
          <ThoughtOfDayCard />
        </View>

        {!user && (
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginText}>{t('login_to_continue')}</Text>
            <Feather name="chevron-right" size={18} color="#000" />
          </TouchableOpacity>
        )}
        <View style={{ marginBottom: 8 }}>
          <HomeBanner />
        </View>
        <View style={{ marginBottom: 8 }}>
          <ModeOfLearning />
        </View>

        <View style={{ marginBottom: 8 }}>
          <HomeNavButtons />
        </View>
        {/* <View style={{ marginBottom: 8 }}>
          <HomeWithoutLoginDropdown />
        </View> */}
      </ScrollView>
    </View>
  );
};

export default HomeWithoutLoginMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  logo: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  notificationDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },

  loginButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 12,
    height: 62,
  },
  loginText: {
    fontSize: 16,
    fontFamily: fonts.Medium,
    color: colors.black,
  },
  appname: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    color: colors.black,
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
});
