import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fonts } from './../../config/fonts';
import colors from './../../config/colors';
import Feather from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

const LoginViewButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.promptText}>Not logged in?</Text>

      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => navigation.navigate('Login')}
        activeOpacity={0.8}
      >
        <View style={styles.gradient}>
          <View style={styles.textWithIcon}>
            <Text style={styles.text}>Login Now</Text>
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

export default LoginViewButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  promptText: {
    fontSize: 18,
    color: colors.black,
    fontFamily: fonts.Medium,
    marginBottom: 20,
  },
  buttonWrapper: {
    width: width * 0.6,
    borderRadius: 8,
    overflow: 'hidden',
    height: 52,
  },
  gradient: {
    paddingVertical: 14,
    borderRadius: 42,
    alignItems: 'center',
    backgroundColor: '#528BD9',
  },
  textWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.Medium,
  },
});
