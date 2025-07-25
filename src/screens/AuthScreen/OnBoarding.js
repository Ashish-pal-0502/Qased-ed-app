import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import Button from './../../components/Buttons/Button';
import { useTranslation } from 'react-i18next';

const { width } = Dimensions.get('window');

const OnBoarding = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Images/AuthImages/Onboarding.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.textBlock}>
        <Text style={styles.heading}>Qased ed tech</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur {'\n'} adipiscing elit, sed do
          eiusmod tempor {'\n'} incididunt
        </Text>
      </View>

      <View style={styles.buttonBlock}>
        <Button
          title={t('login')}
          onPress={() => navigation.navigate('Login')}
        />

        <TouchableOpacity
          style={styles.registerBtn}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.registerText}>{t('register')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 53,
  },
  image: {
    width: 331,
    height: 331,
    marginBottom: 32,
  },
  textBlock: {
    alignItems: 'center',
    marginBottom: 32,
    paddingHorizontal: 12,
  },
  heading: {
    fontSize: 35,
    color: '#1F41BB',
    fontFamily: fonts.SemiBold,
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.Regular,
    textAlign: 'center',
    lineHeight: 20,
  },
  buttonBlock: {
    width: '100%',
    alignItems: 'center',
  },
  loginBtn: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
  },
  gradient: {
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.Medium,
  },
  registerBtn: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1E232C',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 16,
    fontFamily: fonts.Medium,
    color: '#1E232C',
  },
});
