import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  Pressable,
} from 'react-native';
import TopNavigationHeader from './../../components/Header/TopNavigationHeader';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import EditProfileUserImage from '../../assets/Images/ProfileImages/EditProfileUserImage.png';
import pencil from '../../assets/Images/Icons/pencil.png';
import ToastPopupModal from './../../components/Modals/ToastPopupModal';
import TeacherFeedbackModal from './../../components/Modals/TeacherFeebackModal';

const countryCodes = ['+1 (US)', '+91 (IN)', '+44 (UK)', '+61 (AU)'];
const genders = ['Male', 'Female', 'Other'];

const EditProfile = () => {
  const { t } = useTranslation();
  const [selectedGender, setSelectedGender] = useState('Male');
  const [genderModalVisible, setGenderModalVisible] = useState(false);

  const [selectedCountryCode, setSelectedCountryCode] = useState('+1 (US)');
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
      <TopNavigationHeader title={t('edit_profile') || 'Edit Profile'} />

      <View style={styles.container}>
        <View style={styles.avatarSection}>
          <View style={styles.avatarWrapper}>
            <Image source={EditProfileUserImage} style={styles.avatar} />
            <TouchableOpacity
              style={styles.editIcon}
              onPress={() => setShowToast(true)}
            >
              <Image source={pencil} style={styles.editIconPencil} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.inputWrapper}>
            <Icon
              name="person-outline"
              size={22}
              color="#0B0B0B"
              style={styles.iconLeft}
            />
            <TextInput
              style={styles.input}
              placeholder="Albert Flores"
              placeholderTextColor="#A0A0A0"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Icon
              name="calendar-outline"
              size={22}
              color="#0B0B0B"
              style={styles.iconLeft}
            />
            <TextInput
              style={styles.input}
              placeholder="01/01/1988"
              placeholderTextColor="#A0A0A0"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Icon
              name="mail-outline"
              size={22}
              color="#0B0B0B"
              style={styles.iconLeft}
            />
            <TextInput
              style={styles.input}
              placeholder="albertflores@mail.com"
              placeholderTextColor="#A0A0A0"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.phoneRow}>
            <TouchableOpacity
              style={styles.countryCode}
              onPress={() => setCountryModalVisible(true)}
            >
              <Text style={styles.codeText}>{selectedCountryCode}</Text>
              <Icon name="chevron-down" size={16} color="#6B6B6B" />
            </TouchableOpacity>
            <View style={styles.phoneInputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="(888) 888-8888"
                placeholderTextColor="#A0A0A0"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.inputWrapper}
            onPress={() => setGenderModalVisible(true)}
          >
            <Text style={[styles.input, styles.genderText]}>
              {selectedGender}
            </Text>
            <Icon
              name="chevron-down"
              size={18}
              color="#6B6B6B"
              style={styles.iconRight}
            />
          </TouchableOpacity>
        </View>

        <Modal visible={genderModalVisible} transparent animationType="fade">
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPressOut={() => setGenderModalVisible(false)}
          >
            <View style={styles.modalContent}>
              {genders.map(item => (
                <Pressable
                  key={item}
                  onPress={() => {
                    setSelectedGender(item);
                    setGenderModalVisible(false);
                  }}
                  style={styles.modalItem}
                >
                  <Text>{item}</Text>
                </Pressable>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>

        <Modal visible={countryModalVisible} transparent animationType="fade">
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPressOut={() => setCountryModalVisible(false)}
          >
            <View style={styles.modalContent}>
              {countryCodes.map(code => (
                <Pressable
                  key={code}
                  onPress={() => {
                    setSelectedCountryCode(code);
                    setCountryModalVisible(false);
                  }}
                  style={styles.modalItem}
                >
                  <Text>{code}</Text>
                </Pressable>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>

        {/* <TeacherFeedbackModal /> */}
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

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
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 6,
    width: 33,
    height: 33,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIconPencil: {
    widht: 18,
    height: 18,
    resizeMode: 'contain',
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
  iconRight: {
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '90%',
    paddingVertical: 8,
  },
  modalItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
