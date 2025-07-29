import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { fonts } from '../../config/fonts';
import colors from './../../config/colors';

const InstructorReviewCard = ({ review }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={review.image} style={styles.avatar} />
        <View style={styles.infoRow}>
          <Text style={styles.name}>{review.name}</Text>
          <Text style={styles.rating}>★★★★★</Text>
        </View>
      </View>
      <Text style={styles.text}>{review.comment}</Text>
    </View>
  );
};

export default InstructorReviewCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  avatar: {
    width: 21,
    height: 21,
    borderRadius: 26,
    marginRight: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: fonts.Medium,
    fontSize: 10,
    color: colors.black,
  },
  rating: {
    fontSize: 12,
    color: '#FBBF24',
    fontFamily: fonts.Medium,
  },
  text: {
    fontFamily: fonts.Regular,
    fontSize: 8,
    color: '#616161',
  },
});
