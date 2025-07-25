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
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import AuthBackButton from './../../components/Buttons/AuthBackButton';
import { useNavigation } from '@react-navigation/native';
import OTPSuccessModal from './../../components/Modals/OTPSuccessModal';

const { width } = Dimensions.get('window');

const ForgetPassword = () => {
  const navigation = useNavigation;
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSendCode = () => {
    setModalVisible(true);
  };

  const GradientText = ({ text, style }) => (
    <MaskedView
      maskElement={
        <Text style={[style, { backgroundColor: 'transparent' }]}>{text}</Text>
      }
    >
      <LinearGradient
        colors={['#528BD9', '#FFC7D2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[style, { opacity: 0 }]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={styles.innerWrapper}>
            <View style={{ marginTop: 10 }}>
              <AuthBackButton navigation={navigation} />
            </View>

            <Text style={styles.title}>
              {t('forgot_password_title') || 'Forgot Password?'}
            </Text>

            <Text style={styles.subtitle}>
              {t('forgot_password_subtitle') ||
                'Don’t worry! It occurs. Please enter the email address linked with your account.'}
            </Text>

            <TextInput
              placeholder={t('email') || 'Enter your email'}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              placeholderTextColor="#8391A1"
            />

            <TouchableOpacity
              style={styles.gradientButton}
              onPress={handleSendCode}
            >
              <LinearGradient
                colors={['#528BD9', '#FFC7D2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.linearGradient}
              >
                <Text style={styles.buttonText}>
                  {t('send_code') || 'Send Code'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.bottomText}>
              <Text style={styles.rememberText}>
                {t('remember_password') || 'Remember Password?'}
              </Text>
              <TouchableOpacity onPress={() => navigation.replace('Login')}>
                <GradientText
                  text={` ${t('login') || 'Login'}`}
                  style={styles.loginLink}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <OTPSuccessModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
  },
  innerWrapper: {
    flex: 1,
    justifyContent: 'start',
  },
  backButton: {
    marginTop: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#F7F8F9',
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.SemiBold,
    color: '#1E232C',
    marginTop: 40,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#8391A1',
    fontFamily: fonts.Regular,
    marginBottom: 24,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E8ECF4',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    fontFamily: fonts.Regular,
    backgroundColor: '#F7F8F9',
    color: colors.text,
    marginBottom: 20,
  },
  gradientButton: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 30,
  },
  linearGradient: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: fonts.Medium,
    fontSize: 16,
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rememberText: {
    color: colors.black,
    fontFamily: fonts.Medium,
    fontSize: 14,
  },
  loginLink: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    marginLeft: 4,
  },
});
