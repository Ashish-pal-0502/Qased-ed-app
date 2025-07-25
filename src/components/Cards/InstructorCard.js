import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { fonts } from './../../config/fonts';

const InstructorCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.avatar }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

export default InstructorCard;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 34,
    marginBottom: 11,
  },
  name: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: '#868889',
    textAlign: 'center',
  },
});
