import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useTranslation } from 'react-i18next';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';

const AttendanceHomeScreenCard = () => {
  const { t } = useTranslation();

  return (
    <LinearGradient
      colors={['#528BD9', '#FFC7D2']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.card}
    >
      <Text style={styles.title}>{t('monthlyatt')}</Text>

      <AnimatedCircularProgress
        size={60}
        width={6}
        fill={60}
        tintColor={colors.white}
        backgroundColor="#B1C6FF"
        rotation={0}
        lineCap="round"
      >
        {fill => (
          <Text style={styles.percentText}>{`${Math.round(fill)}%`}</Text>
        )}
      </AnimatedCircularProgress>
    </LinearGradient>
  );
};

export default AttendanceHomeScreenCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.SemiBold,
    fontSize: 18,
  },
  percentText: {
    color: colors.white,
    fontFamily: fonts.Medium,
    fontSize: 12,
  },
});
