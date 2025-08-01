import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import { fonts } from '../../config/fonts';

const MyChildrenCard = ({ child }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconCircle}>
        <Icon
          name={child.gender === 'Male' ? 'man-outline' : 'woman-outline'}
          size={20}
          color="#4B5563"
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.name}>{child.name}</Text>
        <Text style={styles.details}>
          Age: {child.age} | Gender: {child.gender}
        </Text>
      </View>
      <Icon name="chevron-forward" size={18} color="#333" />
    </View>
  );
};

export default MyChildrenCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 14,
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
  textWrapper: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontFamily: fonts.Bold,
    color: '#00204D',
  },
  details: {
    fontSize: 11,
    color: '#6B7280',
    fontFamily: fonts.Medium,
  },
});
