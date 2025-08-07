import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const ModeOfLearning = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const modes = [
    {
      id: 1,
      type: 'online',
      title: t('Online Sessions'),
      image: require('../../assets/Images/LearningModes/online.png'),
    },
    {
      id: 2,
      title: t('Offline at Training Centres'),
      type: 'offline',

      image: require('../../assets/Images/LearningModes/offline.png'),
    },
    {
      id: 3,
      title: t('Home Tuitions'),
      type: 'homeTuition',

      image: require('../../assets/Images/LearningModes/home.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('How Would You Like to Learn?')}</Text>
      <Text style={styles.subHeading}>
        {t(
          'Choose your preferred learning mode. We’ve got options that fit your schedule, style, and comfort!',
        )}
      </Text>

      <View style={styles.modesWrapper}>
        {modes.map(mode => (
          <TouchableOpacity
            key={mode.id}
            style={styles.modeCard}
            onPress={() =>
              navigation.navigate('HomeWithoutLoginDropdown', {
                type: mode.type,
              })
            }
          >
            <Image source={mode.image} style={styles.image} />
            <Text style={styles.modeText}>{mode.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ModeOfLearning;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: colors.background,
  },
  heading: {
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 10,
    fontFamily: fonts.Regular,
    color: '#202225',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 12,
  },
  modesWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  modeCard: {
    alignItems: 'center',
    width: '30%',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 34,
    marginBottom: 12,
  },
  modeText: {
    fontSize: 10,
    fontFamily: fonts.Medium,
    color: '#868889',
    textAlign: 'center',
  },
});
