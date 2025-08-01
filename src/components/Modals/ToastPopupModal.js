import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fonts } from '../../config/fonts';
import colors from '../../config/colors';
import { useTranslation } from 'react-i18next';

import PasswordSuccessIcon from '../../assets/Images/Icons/Homebutton1.png';

const ToastPopupModal = ({ visible, onClose, title, desc }) => {
  const { t } = useTranslation();
  useEffect(() => {
    let timer;
    if (visible) {
      timer = setTimeout(() => {
        onClose();
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.toastContainer}>
          <View style={styles.iconContainer}>
            <Image
              source={PasswordSuccessIcon}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>

          <View style={styles.textContainer}>
            <View style={styles.headerRow}>
              <Text style={styles.title}>{t(title)}</Text>
              <TouchableOpacity onPress={onClose}>
                <Ionicons name="close" size={16} color="#A3A3A3" />
              </TouchableOpacity>
            </View>
            <Text style={styles.subtitle}>{t(desc)}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ToastPopupModal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
    backgroundColor: 'transparent',
  },
  toastContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 56,
    height: 56,
    backgroundColor: '#FFF0F0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    width: 30,
    height: 30,
  },
  textContainer: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    color: colors.black,
    flex: 1,
    paddingRight: 8,
  },
  subtitle: {
    fontSize: 10,
    fontFamily: fonts.Light,
    color: '#71717A',
    lineHeight: 16,
  },
});
