import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import Feather from 'react-native-vector-icons/Feather';

const ProfileScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={['#528BD9', '#FFC7D2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerBackground}
        >
          <View style={styles.headerRow}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={20} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{t('profile') || 'Profile'}</Text>
            <View style={{ width: 40 }} />
          </View>
        </LinearGradient>

        <View style={styles.profileCard}>
          <View style={styles.imageContainer}>
            <View style={styles.profileImageWrapper}>
              <Image
                source={require('../../assets/Images/Icons/UserIcon.png')}
                style={styles.profileImage}
                resizeMode="contain"
              />
            </View>
          </View>

          <Text style={styles.nameText}>John Doe</Text>
          <Text style={styles.classText}>STD - IX</Text>

          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <LinearGradient
              colors={['#528BD9', '#FFC7D2']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientButton}
            >
              <Text style={styles.editButtonText}>
                {t('edit_profile') || 'Edit Profile'}{' '}
                <Feather
                  name="edit-3"
                  size={16}
                  color="#fff"
                  style={{ paddingLeft: 5 }}
                />
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.listWrapper}>
          <ProfileListItem
            label={t('notifications') || 'Notifications'}
            onPress={() => navigation.navigate('Notifications')}
          />
          <ProfileListItem
            label={t('settings') || 'Settings'}
            onPress={() => navigation.navigate('Settings')}
          />
          <ProfileListItem
            label={t('logout') || 'Logout'}
            // onPress={() => navigation.navigate('Notifications')}

            danger
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  headerBackground: {
    height: 246,
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: fonts.Medium,
    color: colors.white,
  },
  profileCard: {
    backgroundColor: '#fff',
    marginTop: -120,
    marginHorizontal: 20,
    borderRadius: 20,
    paddingTop: 60,
    paddingBottom: 24,
    alignItems: 'center',
    position: 'relative',
  },
  imageContainer: {
    position: 'absolute',
    top: -45,
    alignSelf: 'center',
    zIndex: 10,
  },
  profileImageWrapper: {
    width: 95,
    height: 95,
    borderRadius: 47.5,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#fff',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  nameText: {
    fontSize: 20,
    fontFamily: fonts.Medium,
    color: colors.black,
    marginTop: 10,
  },
  classText: {
    fontSize: 14,
    color: colors.black,
    marginBottom: 12,
    fontFamily: fonts.Regular,
  },
  editButton: {
    width: '90%',
    borderRadius: 4,
    overflow: 'hidden',
  },
  gradientButton: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    color: colors.white,
    fontFamily: fonts.SemiBold,
    fontSize: 14,
  },
  listWrapper: {
    marginTop: 24,
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
