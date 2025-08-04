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
  Pressable,
  ScrollView,
} from 'react-native';
import TopNavigationHeader from '../../components/Header/TopNavigationHeader';
import colors from '../../config/colors';
import { fonts } from '../../config/fonts';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Buttons/Button';
import apiClient from '../../api/client';
import useAuth from '../../auth/useAuth';
import Toast from 'react-native-toast-message';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

const countryCodes = ['+1 (US)', '+91 (IN)', '+44 (UK)', '+61 (AU)'];
const genders = ['Male', 'Female', 'Other'];

const EditParentProfile = ({ route }) => {
  const { student, onProfileUpdated } = route.params;
  const parent = student;
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigation = useNavigation();

  const [profileImage, setProfileImage] = useState(null);
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [countryModalVisible, setCountryModalVisible] = useState(false);

  const [name, setName] = useState(parent.name || '');
  const [email, setEmail] = useState(parent.email || '');
  const [phone, setPhone] = useState(parent.phone || '');
  const [childrenCount, setChildrenCount] = useState(
    parent.childrenCount?.toString() || '',
  );
  const [selectedGender, setSelectedGender] = useState(
    parent.gender || 'Select',
  );
  const [selectedCountryCode, setSelectedCountryCode] = useState('+1 (US)');
  const [address, setAddress] = useState({
    area: parent.address?.area || '',
    state: parent.address?.state || '',
    city: parent.address?.city || '',
    landmark: parent.address?.landmark || '',
    mobile: parent.address?.mobile || '',
    pincode: parent.address?.pincode || '',
    country: parent.address?.country || '',
  });

  const handleAddressChange = (key, value) => {
    setAddress(prev => ({ ...prev, [key]: value }));
  };

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

      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      const { data } = await apiClient.post(
        '/uploads/uploadSingleImage',
        formData,
        config,
      );

      return data;
    }
    return parent.profileImage;
  };

  const handleSubmit = async () => {
    const uploadedImage = await uploadImage();

    const payload = {
      parentId: user.id,
      name,
      email,
      phone,
      childrenCount: parseInt(childrenCount, 10) || 0,
      address,
      profileImage: uploadedImage,
    };

    const response = await apiClient.post('/parents/update-parent', payload);

    if (response.ok) {
      Toast.show({
        type: 'customToast',
        text1: response.data.message,
        text2: 'Profile updated successfully!',
        position: 'bottom',
        visibilityTime: 2000,
      });
      if (onProfileUpdated) onProfileUpdated();
      navigation.goBack();
    } else {
      Toast.show({
        type: 'customToast',
        text1: 'Error',
        text2: 'Error occurred, Profile not updated!',
        position: 'bottom',
        visibilityTime: 2000,
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
      <TopNavigationHeader title={t('edit_profile') || 'Edit Profile'} />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.avatarSection}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{ uri: profileImage?.uri || parent.profileImage }}
              style={styles.avatar}
            />

            <TouchableOpacity
              style={styles.editIcon}
              onPress={handleSelectImage}
            >
              <Icon name="pencil-outline" size={16} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

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
            value={name}
            onChangeText={setName}
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
            placeholder="Email"
            value={email}
            placeholderTextColor="#A0A0A0"
            onChangeText={setEmail}
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
              placeholder="Phone"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              placeholderTextColor="#A0A0A0"
            />
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <Icon
            name="people-outline"
            size={22}
            color="#0B0B0B"
            style={styles.iconLeft}
          />
          <TextInput
            style={styles.input}
            placeholder="Children Count"
            value={childrenCount}
            onChangeText={setChildrenCount}
            keyboardType="numeric"
            placeholderTextColor="#A0A0A0"
          />
        </View>

        {Object.keys(address).map(key => (
          <View style={styles.inputWrapper} key={key}>
            <Icon
              name="location-outline"
              size={22}
              color="#0B0B0B"
              style={styles.iconLeft}
            />
            <TextInput
              style={styles.input}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={address[key]}
              onChangeText={text => handleAddressChange(key, text)}
              placeholderTextColor="#A0A0A0"
            />
          </View>
        ))}

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

        <View style={{ marginVertical: 20 }}>
          <Button onPress={handleSubmit} title={t('submit')} />
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditParentProfile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: '#F8F8F8',
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
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    height: 54,
    marginBottom: 12,
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
    marginBottom: 12,
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
