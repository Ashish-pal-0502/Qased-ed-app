import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';

const ClassCard = ({ className = 'Class 1', roman = 'I', onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.iconCircle}>
        <Text style={styles.romanText}>{roman}</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.className}>{className}</Text>
        <Text style={styles.description}>DESCRIPTION</Text>
      </View>
      <Icon name="angle-right" size={18} color="#333333" />
    </TouchableOpacity>
  );
};

export default ClassCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D4D2E3',
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#D4D2E3',
  },
  romanText: {
    fontFamily: fonts.Bold,
    fontSize: 20,
    color: '#4B5563',
  },
  textWrapper: {
    flex: 1,
  },
  className: {
    fontSize: 14,
    fontFamily: fonts.Bold,
    color: '#00204D',
  },

  description: {
    fontSize: 10,
    color: '#919191',
    fontFamily: fonts.Medium,
  },
});
