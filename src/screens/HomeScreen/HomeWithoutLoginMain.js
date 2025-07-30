import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import ThoughtOfDayCard from './../../components/Cards/ThoughtOfDayCard';
import notification from '../../assets/Images/Icons/Notification.png';
import HomeNavButtons from './../../components/HomeNavButtons/HomeNavButtons';
import HomeBanner from './../../components/Banners/HomeBanner';
import { fonts } from './../../config/fonts';
import colors from './../../config/colors';
import { useTranslation } from 'react-i18next';

const HomeWithoutLoginMain = () => {
  const { t } = useTranslation();

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

          <Image source={notification} style={styles.notificationDot} />
        </View>

        <View style={{ marginBottom: 8 }}>
          <ThoughtOfDayCard />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>{t('login_to_continue')}</Text>
          <Feather name="chevron-right" size={18} color="#000" />
        </TouchableOpacity>

        <View style={{ marginBottom: 8 }}>
          <HomeBanner />
        </View>

        <View style={{ marginBottom: 8 }}>
          <HomeNavButtons />
        </View>
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
});
