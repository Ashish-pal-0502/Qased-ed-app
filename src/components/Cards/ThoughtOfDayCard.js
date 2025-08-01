import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
import { fonts } from './../../config/fonts';
import colors from './../../config/colors';
import useAuth from './../../auth/useAuth';

const ThoughtOfDayCard = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>{t('thoughtofday.title')}</Text>
        <Text style={styles.quote}>{t('thoughtofday.desc')}</Text>
      </View>

      <LinearGradient
        colors={['#528BD9', '#FFC7D2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.ribbon}
      >
        <Text style={styles.day}>21</Text>
        <Text style={styles.month}>July</Text>
      </LinearGradient>
    </View>
  );
};

export default ThoughtOfDayCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingBottom: 10,
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 85,
  },
  contentContainer: {
    flex: 1,
    paddingRight: 10,
  },
  heading: {
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    color: colors.text,
    marginBottom: 3,
  },
  quote: {
    fontSize: 10,
    color: colors.text,
    lineHeight: 20,
    fontFamily: fonts.Regular,
  },
  ribbon: {
    width: 64,
    height: 70,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  day: {
    color: colors.white,
    fontSize: 24,
    fontFamily: fonts.SemiBold,
  },
  month: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.Medium,
  },
});
