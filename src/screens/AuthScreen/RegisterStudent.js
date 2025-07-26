import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import AuthBackButton from './../../components/Buttons/AuthBackButton';

const { width } = Dimensions.get('window');

const RegisterStudent = () => {
  const { t } = useTranslation();
  const [selectedChildren, setSelectedChildren] = useState('1');
  const [selectedState, setSelectedState] = useState('abcd');
  const [selectedCity, setSelectedCity] = useState('abcd');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollWrapper}
          keyboardShouldPersistTaps="handled"
        >
          <AuthBackButton />

          <Text style={styles.title}>
            {t('give_details_about_your_child') ||
              'Give details about your child'}
          </Text>
          <Text style={styles.subTitle}>
            {t('fields_required_note') || 'Fields marked as * are required'}
          </Text>

          <View style={styles.profilePhotoPlaceholder} />
          <Text style={styles.profilePhotoText}>
            {t('profile_photo') || 'Profile photo'}
          </Text>

          <Text style={styles.label}>
            {t('confirm_name') || 'Confirm Name*'}
          </Text>
          <TextInput
            placeholder={t('confirm_name') || 'Enter your name here'}
            style={styles.input}
            placeholderTextColor="#8391A1"
          />

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText}>
              {t('register') || 'Register'}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterStudent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
  },
  scrollWrapper: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    color: '#1E232C',
    marginTop: 12,
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 12,
    color: '#9A9A9A',
    fontFamily: fonts.Regular,
    marginBottom: 20,
  },
  profilePhotoPlaceholder: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#E8ECF4',
  },
  profilePhotoText: {
    color: '#1565C0',
    fontSize: 14,
    fontFamily: fonts.Medium,
    marginTop: 6,
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontFamily: fonts.Regular,
    color: colors.black,
    marginBottom: 6,
  },
  labelInside: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: '#1E232C',
    marginLeft: 12,
    marginTop: 6,
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: '#E8ECF4',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    fontFamily: fonts.Regular,
    backgroundColor: colors.white,
    marginBottom: 16,
  },

  registerButton: {
    backgroundColor: '#528BD9',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.Medium,
  },
});
