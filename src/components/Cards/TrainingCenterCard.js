import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { fonts } from './../../config/fonts';
import colors from './../../config/colors';
import { useTranslation } from 'react-i18next';

const TrainingCenterCard = ({ item }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.stats}>
          <View style={styles.statBlock}>
            <Text style={styles.statLabel}>{t('teachers')}</Text>
            <Text style={styles.statValue}>{item.teachers}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.statBlock}>
            <Text style={styles.statLabel}>{t('student')}</Text>
            <Text style={styles.statValue}>{item.students}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.statBlock}>
            <Text style={styles.statLabel}>{t('lectures')}</Text>
            <Text style={styles.statValue}>{item.lectures}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TrainingCenterCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: 160,
    height: '100%',
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  name: {
    fontSize: 14,
    fontFamily: fonts.SemiBold,
    color: colors.black,
    // marginBottom: 4,
    textAlign: 'center',
  },
  description: {
    fontSize: 10,
    fontFamily: fonts.Regular,
    color: '#202225',
    marginBottom: 5,
    textAlign: 'center',
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statBlock: {
    alignItems: 'center',
    flex: 1,
  },
  statLabel: {
    fontSize: 10,
    fontFamily: fonts.Medium,
    color: colors.black,
  },
  statValue: {
    fontSize: 8,
    fontFamily: fonts.Regular,
    color: '#202225',
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: '#ddd',
  },
});
