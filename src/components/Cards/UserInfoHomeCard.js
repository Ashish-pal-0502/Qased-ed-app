import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import RightIcon from '../../assets/Images/Icons/RightIcon.png';
import { useTranslation } from 'react-i18next';
import { fonts } from './../../config/fonts';
import colors from './../../config/colors';

const UserInfoHomeCard = () => {
  const progress = 0.35;
  const { t } = useTranslation();

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.userInfo}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3177/3177440.png',
            }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>Ashish Pal</Text>
            <Text style={styles.grade}>Grade A | Sec - A</Text>
          </View>
        </View>
        <Image source={RightIcon} style={styles.rightIcon} />
      </View>

      <View style={styles.progressSection}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressLabel}>
            {t('userinfohome.overallprogress')}
          </Text>
          <View style={styles.progressRight}>
            <Text style={styles.progressPercent}>35%</Text>
            <Image source={RightIcon} style={styles.smallRightIcon} />
          </View>
        </View>

        <ProgressBar
          progress={progress}
          color="#8979FF"
          style={styles.progressBar}
        />
      </View>
    </View>
  );
};

export default UserInfoHomeCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    color: colors.black,
  },
  grade: {
    fontSize: 10,
    color: colors.black,
    fontFamily: fonts.Regular,
  },
  rightIcon: {
    width: 7,
    height: 14,
    tintColor: '#000',
    resizeMode: 'contain',
  },
  progressSection: {
    marginTop: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressLabel: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: '#111827',
  },
  progressRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  progressPercent: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: '#111827',
  },
  smallRightIcon: {
    width: 5,
    height: 8,
    tintColor: '#111827',
    resizeMode: 'contain',
  },
  progressBar: {
    height: 5,
    borderRadius: 3,
    backgroundColor: '#DCDCDC',
    marginTop: 10,
  },
});
