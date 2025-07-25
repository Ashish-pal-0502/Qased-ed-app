import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import TopNavigationHeader from './../../components/Header/TopNavigationHeader';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';

const EditProfile = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigationHeader title={t('edit_profile') || 'Edit Profile'} />

      <View style={styles.container}>
        <View style={styles.avatarSection}>
          <TouchableOpacity>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.avatarCircle}
            />

            <Text style={styles.profilePhotoText}>
              {t('profile_photo') || 'Profile photo'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>{t('name') || 'Name'}</Text>
          <TextInput
            style={styles.input}
            placeholder="Alex"
            placeholderTextColor="#A0A0A0"
          />

          <View style={styles.row}>
            <View style={styles.dropdownContainer}>
              <Text style={styles.label}>{t('grade') || 'Grade'}</Text>
              <TouchableOpacity style={styles.dropdown}>
                <Text style={styles.dropdownText}>IX</Text>
                <Icon name="chevron-down" size={18} color="#6B6B6B" />
              </TouchableOpacity>
            </View>

            <View style={styles.dropdownContainer}>
              <Text style={styles.label}>{t('section') || 'Section'}</Text>
              <TouchableOpacity style={styles.dropdown}>
                <Text style={styles.dropdownText}>B</Text>
                <Icon name="chevron-down" size={18} color="#6B6B6B" />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.label}>
            {t('parents_name') || "Parent's Name"}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Jack Dore"
            placeholderTextColor="#A0A0A0"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },
  avatarSection: {
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 20,
  },
  avatarCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#D9D9D9',
    marginBottom: 6,
  },
  profilePhotoText: {
    color: '#1565C0',
    fontSize: 14,
    fontFamily: fonts.Medium,
  },
  formGroup: {
    // gap: 5,
  },
  label: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.Regular,
    marginBottom: 6,
  },
  input: {
    height: 44,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#2F2F2F',
    fontFamily: fonts.Regular,
    borderWidth: 1,
    borderColor: '#E8ECF4',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  dropdownContainer: {
    flex: 1,
    marginVertical: 24,
  },
  dropdown: {
    height: 44,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E8ECF4',
  },
  dropdownText: {
    fontSize: 14,
    color: '#8391A1',
    fontFamily: fonts.Regular,
  },
});
