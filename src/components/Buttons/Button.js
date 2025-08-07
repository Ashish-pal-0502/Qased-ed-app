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
      activeOpacity={disabled ? 1 : 0.7}
    >
      <View style={[styles.gradient, disabled && styles.disabled]}>
        <Text style={[styles.text, disabled && styles.disabledText]}>
          {title}
        </Text>
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

  disabled: {
    backgroundColor: '#C4C4C4',
  },

  disabledText: {
    color: '#E0E0E0',
  },
});
