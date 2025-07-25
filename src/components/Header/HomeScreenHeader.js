import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import NotificationIcon from '../../assets/Images/Icons/Notification.png';
import { useTranslation } from 'react-i18next';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';

const HomeScreenHeader = () => {
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          const newLang = i18n.language === 'ar' ? 'en' : 'ar';
          i18n.changeLanguage(newLang);
        }}
      >
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/3845/3845897.png',
          }}
          style={styles.logo}
        />
      </TouchableOpacity>

      {/* <Text style={styles.welcomeText}>Welcome, User!!</Text> */}
      <Text style={styles.welcomeText}>{t('navhome.welcome')}</Text>

      <Image source={NotificationIcon} style={styles.notificationIcon} />
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
});
