import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import TopNavigationHeader from './../../components/Header/TopNavigationHeader';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import EditProfileUserImage from '../../assets/Images/ProfileImages/EditProfileUserImage.png';

const StudentViewProfileOnly = ({ route }) => {
  const { student } = route.params;
  const { t } = useTranslation();

  const selectedCountryCode = '+1 (US)';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
      <TopNavigationHeader title={t('view_profile') || 'View Profile'} />

      <View style={styles.container}>
        <View style={styles.avatarSection}>
          {student?.profileImage ? (
            <View style={styles.avatarWrapper}>
              <Image
                source={{ uri: student?.profileImage }}
                style={styles.avatar}
              />
            </View>
          ) : (
            <View style={styles.avatarWrapper}>
              <Image source={EditProfileUserImage} style={styles.avatar} />
            </View>
          )}
        </View>

        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <Icon
              name="person-outline"
              size={22}
              color="#0B0B0B"
              style={styles.iconLeft}
            />
            <Text style={styles.input}>{student.name || '-'}</Text>
          </View>

          <View style={styles.inputWrapper}>
            <Icon
              name="calendar-outline"
              size={22}
              color="#0B0B0B"
              style={styles.iconLeft}
            />
            <Text style={styles.input}>{student.dob || '-'}</Text>
          </View>

          <View style={styles.inputWrapper}>
            <Icon
              name="mail-outline"
              size={22}
              color="#0B0B0B"
              style={styles.iconLeft}
            />
            <Text style={styles.input}>{student.email || '-'}</Text>
          </View>

          <View style={styles.phoneRow}>
            <View style={styles.countryCode}>
              <Text style={styles.codeText}>{selectedCountryCode}</Text>
            </View>
            <View style={styles.phoneInputWrapper}>
              <Text style={styles.input}>{student.address?.mobile || '-'}</Text>
            </View>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={[styles.input, styles.genderText]}>
              {student.gender || '-'}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StudentViewProfileOnly;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#F8F8F8',
    flex: 1,
  },
  avatarSection: {
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 24,
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },
  form: {
    gap: 16,
    marginTop: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    height: 54,
  },
  iconLeft: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#2F2F2F',
    fontFamily: fonts.Regular,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  countryCode: {
    height: 54,
    borderRadius: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#E8ECF4',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  codeText: {
    fontSize: 14,
    color: '#2F2F2F',
    fontFamily: fonts.Regular,
    marginRight: 4,
  },
  phoneInputWrapper: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#E8ECF4',
    paddingHorizontal: 12,
    justifyContent: 'center',
    height: 54,
  },
  genderText: {
    color: '#2F2F2F',
    paddingVertical: 14,
  },
});
