import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PasswordSuccessIcon from '../../assets/Images/Icons/Homebutton1.png';
import Toast from 'react-native-toast-message';

import colors from './../../config/colors';
import { fonts } from './../../config/fonts';

export const CustomToast = ({ text1, text2, props }) => {
  return (
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
          <Text style={styles.title}>{text1}</Text>
          <TouchableOpacity onPress={() => Toast.hide()}>
            <Ionicons name="close" size={16} color="#A3A3A3" />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>{text2}</Text>
      </View>
    </View>
  );
};

export const toastConfig = {
  customToast: props => <CustomToast {...props} />,
};

const styles = StyleSheet.create({
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
    marginHorizontal: 16,
    marginBottom: 20,
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
