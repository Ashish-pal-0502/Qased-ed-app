import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import Button from './../../components/Buttons/Button';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import AuthBackButton from './../../components/Buttons/AuthBackButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const { width } = Dimensions.get('window');

const Register = ({ navigation }) => {
  const { t } = useTranslation();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {};

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
        <View style={styles.innerWrapper}>
          <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
              <AuthBackButton />
            </View>

            <Text style={styles.title}>
              {t('register_title') || 'Hello! Register to get started'}
            </Text>

            <View style={styles.form}>
              <TextInput
                placeholder={t('fullname') || 'Full name'}
                value={fullName}
                onChangeText={setFullName}
                style={styles.input}
                placeholderTextColor="#8391A1"
              />
              <TextInput
                placeholder={t('email') || 'Email'}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
                placeholderTextColor="#8391A1"
              />
              <TextInput
                placeholder={t('password') || 'Password'}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
                placeholderTextColor="#8391A1"
              />
              <TextInput
                placeholder={t('confirm_password') || 'Confirm password'}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                style={styles.input}
                placeholderTextColor="#8391A1"
              />
            </View>

            <Button
              title={t('register') || 'Register'}
              onPress={handleRegister}
            />

            <Text style={styles.orText}>
              {t('or_register_with') || 'Or Register with'}
            </Text>

            <View style={styles.socialRow}>
              <TouchableOpacity style={styles.socialBtn}>
                <Image
                  source={require('../../assets/Images/AuthImages/Facebook.png')}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn}>
                <Image
                  source={require('../../assets/Images/AuthImages/Google.png')}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn}>
                <Image
                  source={require('../../assets/Images/AuthImages/Apple.png')}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Bottom Fixed Text */}
          <View style={styles.bottomText}>
            <Text style={styles.haveAccount}>
              {t('already_have_account') || 'Already have an account? '}
            </Text>
            <TouchableOpacity onPress={() => navigation.replace('Login')}>
              <GradientText
                text={t('login_now') || 'Login Now'}
                style={styles.loginNow}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  innerWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.SemiBold,
    color: '#1E232C',
    marginBottom: 30,
  },
  form: {
    gap: 16,
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
  },
  orText: {
    textAlign: 'center',
    marginVertical: 24,
    color: '#6A707C',
    fontFamily: fonts.Regular,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 32,
  },
  socialBtn: {
    flex: 1,
    height: 55,
    borderWidth: 1,
    borderColor: '#E8ECF4',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  socialIcon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  haveAccount: {
    color: colors.black,
    fontFamily: fonts.Medium,
    fontSize: 14,
  },
  loginNow: {
    fontFamily: fonts.Medium,
    marginLeft: 4,
    fontSize: 14,
  },
});
