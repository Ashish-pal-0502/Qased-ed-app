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

const { width } = Dimensions.get('window');

const RegisterParent = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { logIn } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [selectedChildren, setSelectedChildren] = useState('1');
  const [selectedState, setSelectedState] = useState('abcd');
  const [selectedCity, setSelectedCity] = useState('abcd');
  const [profileImage, setProfileImage] = useState(null);

  const handleSelectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response?.assets && response.assets.length > 0) {
        setProfileImage(response.assets[0]);
      }
    });
  };

  const uploadImage = async () => {
    if (profileImage) {
      const formData = new FormData();

      formData.append('image', {
        uri: profileImage.uri,
        type: profileImage.type,
        name: profileImage.fileName,
      });

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await apiClient.post(
        '/uploads/uploadSingleImage',
        formData,
        config,
      );

      return data;
    }
  };

  const registerParent = async () => {
    const parentProfileImage = await uploadImage();

    const payload = {
      name,
      email,
      password,
      phone,
      address: {
        state: selectedState,
        city: selectedCity,
        pincode: stateCode,
      },

      children: selectedChildren,

      profileImage: parentProfileImage,
    };

    const response = await apiClient.post('/parents/register-parent', payload);

    if (response.ok) {
      logIn(response.data.token);

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
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

          <Text style={styles.title}>
            {t('give_details_about_you') || 'Give details about you'}
          </Text>
          <Text style={styles.subTitle}>
            {t('fields_required_note') || 'Fields marked as * are required'}
          </Text>

          <TouchableOpacity onPress={handleSelectImage}>
            {profileImage ? (
              <Image
                source={{ uri: profileImage?.uri }}
                style={styles.profilePhotoPlaceholder}
              />
            ) : (
              <View style={styles.profilePhotoPlaceholder} />
            )}
          </TouchableOpacity>
          <Text style={styles.profilePhotoText}>
            {t('profile_photo') || 'Profile photo'}
          </Text>

          <Text style={styles.label}>
            {t('confirm_name') || 'Confirm Name*'}
          </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder={t('confirm_name') || 'Enter your name here'}
            style={styles.input}
            placeholderTextColor="#8391A1"
          />

          <Text style={styles.label}>
            {t('confirm_email') || 'Confirm Email*'}
          </Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder={t('confirm_email') || 'Enter your email here'}
            style={styles.input}
            placeholderTextColor="#8391A1"
          />
          <Text style={styles.label}>
            {t('confirm_password') || 'Confirm Password*'}
          </Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder={t('confirm_password') || 'Enter your password here'}
            style={styles.input}
            placeholderTextColor="#8391A1"
          />

          <Text style={styles.label}>
            {t('phone_number') || 'Phone number*'}
          </Text>
          <View style={styles.phoneRow}>
            <View style={styles.countryCode}>
              <Text style={styles.codeText}>+91</Text>
            </View>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder={t('phone_number') || 'Enter your Phone number here'}
              style={styles.phoneInput}
              keyboardType="phone-pad"
              placeholderTextColor="#8391A1"
            />
          </View>

          <Text style={styles.label}>
            {t('no_of_children') || 'No of children'}
          </Text>
          <View style={styles.dropdownWrapper}>
            <Picker
              selectedValue={selectedChildren}
              onValueChange={setSelectedChildren}
              style={styles.dropdown}
              dropdownIconColor="#8391A1"
            >
              {[...Array(10)].map((_, i) => (
                <Picker.Item key={i} label={`${i}`} value={`${i}`} />
              ))}
            </Picker>
          </View>

          <Text style={styles.label}>{t('address') || 'Address'}</Text>
          <TextInput
            value={address}
            onChangeText={setAddress}
            placeholder={t('address') || 'Enter your address here'}
            style={styles.input}
            placeholderTextColor="#8391A1"
          />

          <View style={styles.row}>
            <View style={styles.flexHalf}>
              <Text style={styles.label}>{t('state') || 'State'}</Text>
              <View style={styles.dropdownWrapper}>
                <Picker
                  selectedValue={selectedState}
                  onValueChange={setSelectedState}
                  style={styles.dropdown}
                  dropdownIconColor="#8391A1"
                >
                  <Picker.Item label="abcd" value="abcd" />
                  <Picker.Item label="xyz" value="xyz" />
                </Picker>
              </View>
            </View>

            <View style={styles.flexHalf}>
              <Text style={styles.label}>{t('city') || 'City'}</Text>
              <View style={styles.dropdownWrapper}>
                <Picker
                  selectedValue={selectedCity}
                  onValueChange={setSelectedCity}
                  style={styles.dropdown}
                  dropdownIconColor="#8391A1"
                >
                  <Picker.Item label="abcd" value="abcd" />
                  <Picker.Item label="pqr" value="pqr" />
                </Picker>
              </View>
            </View>
          </View>

          <Text style={styles.label}>{t('state_code') || 'State Code'}</Text>
          <TextInput
            value={stateCode}
            onChangeText={setStateCode}
            placeholder={t('state_code') || '000000'}
            style={styles.input}
            placeholderTextColor="#8391A1"
          />

          <TouchableOpacity
            style={styles.registerButton}
            onPress={registerParent}
          >
            <Text style={styles.registerText}>
              {t('register') || 'Register'}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterParent;

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
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  countryCode: {
    width: 60,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8ECF4',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  codeText: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: '#1E232C',
  },
  phoneInput: {
    flex: 1,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8ECF4',
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    fontSize: 14,
    fontFamily: fonts.Regular,
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
