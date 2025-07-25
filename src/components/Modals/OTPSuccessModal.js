import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next'; // ✅ Import translation hook

import SuccessIcon from '../../assets/Images/AuthImages/Success.png'; // ✅ Custom image
import { fonts } from './../../config/fonts';
import colors from './../../config/colors';

const OTPSuccessModal = ({ visible, onClose }) => {
  const { t } = useTranslation(); // ✅ Translation hook

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={20} color="#000" />
          </TouchableOpacity>

          <Text style={styles.successText}>
            {t('otp_sent_successfully') || 'OTP Sent Successfully'}
          </Text>

          <Image
            source={SuccessIcon}
            style={styles.successImage}
            resizeMode="contain"
          />
        </View>
      </View>
    </Modal>
  );
};

export default OTPSuccessModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 290,
    height: 341,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 10,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 10,
  },
  successText: {
    fontSize: 20,
    fontFamily: fonts.Medium,
    marginBottom: 24,
    marginTop: 8,
    textAlign: 'center',
  },
  successImage: {
    width: 200,
    height: 200,
  },
});
