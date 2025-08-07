import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { fonts } from './../../config/fonts';
import colors from './../../config/colors';
import { useTranslation } from 'react-i18next';

const Button = ({ title, onPress, disabled }) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity
      style={styles.buttonWrapper}
      onPress={onPress}
      disabled={disabled}
    >
      <View
        // colors={['#528BD9', '#FFC7D2']}
        // start={{ x: 0, y: 0 }}
        // end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
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
