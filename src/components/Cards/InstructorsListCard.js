import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../../config/colors';
import { fonts } from '../../config/fonts';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const InstructorsListCard = ({ instructor, type }) => {
  const navigation = useNavigation();

  const { t } = useTranslation();
  const handleNavigatetoListenerProfile = () => {
    navigation.navigate('InstructorDetails', {
      instructor: instructor,
      type: type,
    });
  };
  const handleNavigatetoBooking = () => {
    navigation.replace('MyLibrary');
  };
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: instructor?.profileImage }}
          style={styles.image}
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{instructor?.name}</Text>
        <Text style={styles.title} numberOfLines={1}>
          {instructor?.qualifications[0]}
        </Text>
        <Text numberOfLines={1} style={styles.desc}>
          {instructor?.bio}
        </Text>

        <TouchableOpacity style={styles.buttonWrapper}>
          <Text
            style={styles.ViewProfileButton}
            onPress={handleNavigatetoListenerProfile}
          >
            {t('view_profile')}
          </Text>
          <Text style={styles.ProceedButton} onPress={handleNavigatetoBooking}>
            {t('proceed_to_booking')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InstructorsListCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#D4D2E3',
    height: 117,
  },
  imageContainer: {
    width: 97,
    height: 97,
    backgroundColor: '#FE7122',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    color: colors.black,
  },
  title: {
    fontSize: 10,
    fontFamily: fonts.Medium,
    color: '#919191',
    textTransform: 'uppercase',
    marginTop: 2,
  },
  desc: {
    fontSize: 8,
    fontFamily: fonts.Regular,
    color: '#000000',
    marginTop: 6,
    marginBottom: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'flex-end',
  },
  ProceedButton: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 10,
    color: colors.white,
    fontFamily: fonts.Medium,
    backgroundColor: '#528BD9',
  },
  ViewProfileButton: {
    fontSize: 10,
    color: '#528BD9',
    fontFamily: fonts.Medium,
  },
});
