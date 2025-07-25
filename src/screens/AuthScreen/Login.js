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
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import AuthBackButton from './../../components/Buttons/AuthBackButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from './../../components/Buttons/Button';

const { width } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {};

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
            <View style={{ marginTop: 10 }}>
              <AuthBackButton navigation={navigation} />
            </View>

            <Text style={styles.title}>
              {t('login_title') || 'Welcome back! Glad to see you, Again!'}
            </Text>

            <View style={styles.form}>
              <TextInput
                placeholder={t('email') || 'Enter your email'}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
                placeholderTextColor="#8391A1"
              />

              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder={t('password') || 'Enter your password'}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  style={styles.passwordInput}
                  placeholderTextColor="#8391A1"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIconWrapper}
                >
                  <Ionicons
                    name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                    size={22}
                    color="#6A707C"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Button title={t('login') || 'Login'} onPress={handleLogin} />

            <Text style={styles.orText}>
              {t('or_login_with') || 'Or Login with'}
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

          <View style={styles.bottomText}>
            <Text style={styles.haveAccount}>
              {t('dont_have_account') || 'Don’t have an account?'}
            </Text>
            <TouchableOpacity onPress={() => navigation.replace('Register')}>
              <GradientText
                text={` ${t('register_now')}`}
                style={styles.registerNow}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

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
    marginVertical: 30,
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8ECF4',
    borderRadius: 8,
    backgroundColor: '#F7F8F9',
    paddingHorizontal: 16,
    height: 50,
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: colors.text,
  },
  eyeIconWrapper: {
    paddingLeft: 10,
  },
  gradientButton: {
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 10,
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
  registerNow: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    marginLeft: 4,
  },
});
