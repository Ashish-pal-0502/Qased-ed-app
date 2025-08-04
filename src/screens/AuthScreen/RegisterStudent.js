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
  Image,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import AuthBackButton from './../../components/Buttons/AuthBackButton';
import apiClient from './../../api/client';
import useAuth from './../../auth/useAuth';
import { useNavigation } from '@react-navigation/native';
import ToastPopupModal from './../../components/Modals/ToastPopupModal';
import { CommonActions } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const RegisterStudent = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { user, logIn } = useAuth();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    profileImage: null,
    dob: '',
    classNames: '',
    subjects: '',
    preferredLanguage: 'English',
    address: {
      area: '',
      state: '',
      city: 'Doha',
      landmark: '',
      mobile: '',
      email: '',
      pincode: '',
      country: '',
    },
  });

  const [showToastPopupModal, setShowToastPopupModal] = useState(false);

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleAddressChange = (key, value) => {
    setForm(prev => ({
      ...prev,
      address: { ...prev.address, [key]: value },
    }));
  };

  const handleSelectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response?.assets && response.assets.length > 0) {
        handleChange('profileImage', response.assets[0]);
      }
    });
  };

  const uploadImage = async () => {
    if (form.profileImage) {
      const formData = new FormData();
      formData.append('image', {
        uri: form.profileImage.uri,
        type: form.profileImage.type,
        name: form.profileImage.fileName,
      });

      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      const { data } = await apiClient.post(
        '/uploads/uploadSingleImage',
        formData,
        config,
      );
      return data;
    }
    return null;
  };

  const registerStudent = async () => {
    const uploadedImage = await uploadImage();

    const payload = {
      ...form,
      profileImage: uploadedImage,
      subjects: form.subjects.split(',').map(s => s.trim()),
      type: 'Student',
      status: 'active',
      parentId: user.id,
    };

    const response = await apiClient.post('/user/create-user', payload);
    if (response.ok) {
      setShowToastPopupModal(true);
      setTimeout(() => {
        navigation.replace('MyChildrenScreen');
      }, 1000);
    } else {
      console.log('Registration failed', response.data);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollWrapper}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <AuthBackButton />
          <Text style={styles.title}>{t('give_details_about_your_child')}</Text>
          <Text style={styles.subTitle}>{t('fields_required_note')}</Text>

          <TouchableOpacity onPress={handleSelectImage}>
            {form.profileImage ? (
              <Image
                source={{ uri: form.profileImage.uri }}
                style={styles.profilePhotoPlaceholder}
              />
            ) : (
              <View style={styles.profilePhotoPlaceholder} />
            )}
          </TouchableOpacity>
          <Text style={styles.profilePhotoText}>{t('profile_photo')}</Text>

          <Input
            label={t('confirm_name')}
            value={form.name}
            onChangeText={v => handleChange('name', v)}
          />
          <Input
            label={t('confirm_email')}
            value={form.email}
            onChangeText={v => handleChange('email', v)}
          />
          <Input
            label={t('confirm_password')}
            value={form.password}
            onChangeText={v => handleChange('password', v)}
            secure
          />
          <Input
            label={t('phone_number')}
            value={form.phone}
            onChangeText={v => handleChange('phone', v)}
          />
          <Input
            label={t('date_of_birth')}
            value={form.dob}
            onChangeText={v => handleChange('dob', v)}
          />
          <Input
            label={t('class')}
            value={form.classNames}
            onChangeText={v => handleChange('classNames', v)}
          />
          <Input
            label={t('subjects')}
            value={form.subjects}
            onChangeText={v => handleChange('subjects', v)}
          />

          <Input
            label={t('preferred_language')}
            value={form.preferredLanguage}
            onChangeText={v => handleChange('preferredLanguage', v)}
          />

          <Text style={styles.label}>{t('address')}</Text>
          <Input
            label={t('area')}
            value={form.address.area}
            onChangeText={v => handleAddressChange('area', v)}
          />
          <Input
            label={t('state')}
            value={form.address.state}
            onChangeText={v => handleAddressChange('state', v)}
          />
          <Input
            label={t('city')}
            value={form.address.city}
            onChangeText={v => handleAddressChange('city', v)}
          />
          <Input
            label={t('landmark')}
            value={form.address.landmark}
            onChangeText={v => handleAddressChange('landmark', v)}
          />
          <Input
            label={t('mobile')}
            value={form.address.mobile}
            onChangeText={v => handleAddressChange('mobile', v)}
          />
          <Input
            label={t('email')}
            value={form.address.email}
            onChangeText={v => handleAddressChange('email', v)}
          />
          <Input
            label={t('pincode')}
            value={form.address.pincode}
            onChangeText={v => handleAddressChange('pincode', v)}
          />
          <Input
            label={t('country')}
            value={form.address.country}
            onChangeText={v => handleAddressChange('country', v)}
          />

          <TouchableOpacity
            style={styles.registerButton}
            onPress={registerStudent}
          >
            <Text style={styles.registerText}>{t('register')}</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      <ToastPopupModal
        visible={showToastPopupModal}
        onClose={() => setShowToastPopupModal(false)}
        title="Student Added Successfully"
        desc="The student's details have been added to your account."
      />
    </SafeAreaView>
  );
};

const Input = ({ label, value, onChangeText, secure }) => (
  <View style={{ marginBottom: 2 }}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={label}
      placeholderTextColor="#8391A1"
      secureTextEntry={secure}
      style={styles.input}
    />
  </View>
);

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
    color: colors.text,
  },
  dropdownWrapper: {
    borderWidth: 1,
    borderColor: '#E8ECF4',
    backgroundColor: colors.white,
    borderRadius: 8,
    height: 44,
    justifyContent: 'center',
    marginBottom: 16,
  },
  dropdown: {
    width: '100%',
    color: '#1E232C',
    marginTop: Platform.OS === 'android' ? -10 : 0,
    marginBottom: Platform.OS === 'android' ? -10 : 0,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  flexHalf: {
    flex: 1,
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
