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
import Feather from 'react-native-vector-icons/Feather';
const { width } = Dimensions.get('window');

const OnBoarding = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../../assets/Images/AuthImages/Onboarding.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textBlock}>
        <Text style={styles.heading}>Qased ed tech</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur {'\n'} adipiscing elit, sed do
          eiusmod tempor {'\n'} incididunt
        </Text>
      </View>

      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => navigation.navigate('Login')}
      >
        <View style={styles.gradient}>
          <View style={styles.textWithIcon}>
            <Text style={styles.text}>{t('getstarted')}</Text>
            <Feather
              name="arrow-right"
              size={18}
              color={'white'}
              style={{ marginLeft: 8 }}
            />
          </View>
        </View>
      </TouchableOpacity>
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
    paddingVertical: 53,
  },
  image: {
    width: 331,
    height: 331,
    marginBottom: 32,
  },
  textBlock: {
    marginBottom: 20,
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
    lineHeight: 20,
  },

  textWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonWrapper: {
    width: '50%',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    height: 56,
  },
  gradient: {
    paddingVertical: 14,
    borderRadius: 42,
    alignItems: 'center',
    backgroundColor: '#528BD9',
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.Medium,
  },
});
