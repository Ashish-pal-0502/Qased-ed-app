import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { fonts } from './../../config/fonts';
import colors from './../../config/colors';
import { useTranslation } from 'react-i18next';

const AssignmentsCard = ({ item }) => {
  const isSubmitted = item.status === 'submitted';
  const { t } = useTranslation();

  return (
    <View style={styles.card}>
      <Image source={{ uri: item.icon }} style={styles.icon} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.dueText}>{item.due}</Text>
      </View>

      <View style={styles.statusWrapper}>
        {isSubmitted ? (
          <Text style={[styles.statusText]}>
            <Text style={styles.dot}>● </Text>
            {t('submitted')}
          </Text>
        ) : (
          <Text style={[styles.statusText, { color: '#F22E32' }]}>
            <Text style={styles.dot}>! </Text>
            {t('pending')}
          </Text>
        )}
      </View>
    </View>
  );
};

export default AssignmentsCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    height: 68,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.SemiBold,
    color: colors.button,
  },
  dueText: {
    fontSize: 10,
    fontFamily: fonts.Medium,
    color: '#919191',
  },
  statusWrapper: {
    alignItems: 'flex-end',
  },
  statusText: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: '#00DC1A',
  },
  dot: {
    fontSize: 12,
  },
});
