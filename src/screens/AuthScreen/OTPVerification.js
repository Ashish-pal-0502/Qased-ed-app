import React, { useState, useRef } from 'react';
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

const { width } = Dimensions.get('window');

const OTPVerification = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [otp, setOtp] = useState(['', '', '', '']);
  const [focusedInput, setFocusedInput] = useState(null);
  const inputsRef = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleVerify = () => {};

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
              {t('otp_verification') || 'OTP Verification'}
            </Text>

            <Text style={styles.subtitle}>
              {t('otp_verification_subtitle') ||
                'Enter the verification code we just sent on your email address'}
            </Text>

            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={inputsRef[index]}
                  style={[
                    styles.otpInput,
                    {
                      borderColor:
                        focusedInput === index ? '#35C2C1' : '#E8ECF4',
                    },
                  ]}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit}
                  onFocus={() => setFocusedInput(index)}
                  onBlur={() => setFocusedInput(null)}
                  onChangeText={text => {
                    const newOtp = [...otp];
                    newOtp[index] = text;
                    setOtp(newOtp);

                    if (text && index < 3) {
                      inputsRef[index + 1].current.focus();
                    }
                  }}
                  onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === 'Backspace') {
                      const newOtp = [...otp];
                      if (otp[index] !== '') {
                        newOtp[index] = '';
                        setOtp(newOtp);
                      } else if (index > 0) {
                        inputsRef[index - 1].current.focus();
                        newOtp[index - 1] = '';
                        setOtp(newOtp);
                      }
                    }
                  }}
                  returnKeyType="next"
                />
              ))}
            </View>

            <TouchableOpacity
              style={styles.gradientButton}
              onPress={handleVerify}
            >
              <LinearGradient
                colors={['#528BD9', '#FFC7D2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.linearGradient}
              >
                <Text style={styles.buttonText}>{t('verify') || 'Verify'}</Text>
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.resendWrapper}>
              <Text style={styles.rememberText}>
                {t('didnt_receive_code') || "Didn't received code?"}
              </Text>
              <TouchableOpacity onPress={() => console.log('Resend pressed')}>
                <GradientText
                  text={` ${t('resend') || 'Resend'}`}
                  style={styles.loginLink}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OTPVerification;

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
    marginBottom: 32,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  otpInput: {
    width: 70,
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.Medium,
    color: colors.black,
    backgroundColor: '#F7F8F9',
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
  resendWrapper: {
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
