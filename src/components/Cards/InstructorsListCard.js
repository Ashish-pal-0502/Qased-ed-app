import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../../config/colors';
import { fonts } from '../../config/fonts';

const InstructorsListCard = ({ instructor }) => {
  return (
    <View style={styles.card}>
      <Image source={instructor.image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{instructor.name}</Text>
        <Text style={styles.title}>{instructor.title}</Text>
        <Text style={styles.desc}>{instructor.description}</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InstructorsListCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: '#101828',
  },
  title: {
    fontSize: 10,
    fontFamily: fonts.Medium,
    color: '#667085',
    marginTop: 2,
  },
  desc: {
    fontSize: 10,
    fontFamily: fonts.Regular,
    color: '#667085',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#FE7122',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 10,
    color: '#fff',
    fontFamily: fonts.Medium,
  },
});
