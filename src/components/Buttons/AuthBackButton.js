import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from './../../config/colors';

const AuthBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.backButtonWrapper}
      onPress={() => navigation.goBack()}
    >
      <Image
        source={require('../../assets/Images/AuthImages/BackIcon.png')}
        style={styles.backButtonIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButtonWrapper: {
    width: 31,
    height: 31,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  backButtonIcon: {
    width: 6,
    height: 11,
    resizeMode: 'contain',
  },
});

export default AuthBackButton;
