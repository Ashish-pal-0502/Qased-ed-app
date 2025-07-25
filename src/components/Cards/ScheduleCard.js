import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { fonts } from './../../config/fonts';
import colors from './../../config/colors';
import { useTranslation } from 'react-i18next';

const ScheduleCard = ({ item }) => {
  const isLive = item.status === 'LIVE';
  const { t } = useTranslation();

  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: 'https://media.istockphoto.com/id/658148844/photo/laboratory-research.jpg?s=612x612&w=0&k=20&c=F5DYrZu2oDYPA1ZFWiCQ0Fnk2aa2nMMUhKMcG9i3SXs=',
        }}
        imageStyle={styles.image}
        style={styles.imageContainer}
      >
        <View style={styles.subjectTag}>
          <Text style={styles.subjectText}>{item.subject}</Text>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.professor}>By {item.professor}</Text>

        {isLive ? (
          <Text style={styles.live}>
            <Text style={styles.dot}>● </Text>LIVE NOW
          </Text>
        ) : (
          <Text style={styles.time}>{item.time}</Text>
        )}

        <LinearGradient
          colors={['#528BD9', '#FFC7D2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <TouchableOpacity>
            <Text style={styles.buttonText}>{t('joinnow')}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default ScheduleCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    alignItems: 'flex-start',
    gap: 10,
    minHeight: 110,
    marginBottom: 8,
  },
  imageContainer: {
    width: 132,
    height: 76,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 10,
  },
  subjectTag: {
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignSelf: 'flex-start',
  },
  subjectText: {
    fontSize: 10,
    fontFamily: fonts.SemiBold,
    color: colors.darkbluegray,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    height: 76,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: colors.darkgray,
  },
  professor: {
    fontSize: 10,
    color: colors.darkbluegray,
    // marginTop: 5,
    fontFamily: fonts.Regular,
  },
  live: {
    fontSize: 12,
    color: '#F22E32',
    fontFamily: fonts.Regular,
    // marginTop: 5,
  },
  dot: {
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: colors.darkgray,
    marginTop: 5,
    fontFamily: fonts.Regular,
  },
  button: {
    alignSelf: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 4,
  },
  buttonText: {
    color: colors.grey,
    fontFamily: fonts.SemiBold,
    fontSize: 10,
  },
});
