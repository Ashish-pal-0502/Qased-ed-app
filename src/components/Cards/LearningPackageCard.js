import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const screenWidth = Dimensions.get('window').width;

const LearningPackageCard = ({ item }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww',
          }}
          style={styles.image}
        />
        {item.bestValue && (
          <View style={styles.bestValueTag}>
            <Image
              source={require('../../assets/Images/Icons/BestValue.png')}
              style={styles.bestValueImage}
            />
          </View>
        )}
      </View>

      <View style={styles.details}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.plan}>{item?.name}</Text>
            <Text style={styles.professor}>{item?.teacher?.name}</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.price}>QAR {item?.price}</Text>
            <Text style={styles.sessions}>
              For {item?.slots?.length} Sessions
            </Text>
          </View>
        </View>

        <Text style={styles.description}>
          {item?.description || 'Description'}
        </Text>

        <View style={styles.rowBetween}>
          <TouchableOpacity>
            <Text
              style={styles.moreDetails}
              onPress={() =>
                navigation.navigate('LearningPackagesScreen', {
                  packageDetails: item,
                })
              }
            >
              {t('view_more_details')} &gt;
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bookNow}>
            <Text style={styles.bookNowText}>{t('book_now')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LearningPackageCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    width: screenWidth * 0.88,
    marginRight: 16,
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bestValueTag: {
    position: 'absolute',
    bottom: -10,
    right: -5,
  },
  bestValueImage: {
    width: 79,
    height: 31,
    marginRight: 4,
    resizeMode: 'cover',
  },
  bestValueText: {
    color: 'red',
    fontSize: 10,
    fontFamily: fonts.Bold,
  },
  details: {
    padding: 14,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plan: {
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    color: '#2A2A2A',
  },
  price: {
    fontSize: 20,
    fontFamily: fonts.SemiBold,
    color: colors.black,
  },
  sessions: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: '#696969',
  },
  professor: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: '#696969',
  },
  description: {
    fontSize: 10,
    fontFamily: fonts.Light,
    color: '#191D23',
    marginVertical: 10,
  },
  moreDetails: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: '#2A2A2A',
  },
  bookNow: {
    backgroundColor: '#538CD9',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  bookNowText: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: '#fff',
  },
});
