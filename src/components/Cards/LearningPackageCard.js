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

const screenWidth = Dimensions.get('window').width;

const LearningPackageCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.image }} style={styles.image} />
        {item.bestValue && (
          <View style={styles.bestValueTag}>
            <Image
              source={require('../../assets/Images/Icons/BestValue.png')}
              style={styles.bestValueImage}
            />
            <Text style={styles.bestValueText}>BEST VALUE</Text>
          </View>
        )}
      </View>

      <View style={styles.details}>
        <View style={styles.rowBetween}>
          <Text style={styles.plan}>{item.plan}</Text>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.sessions}>{item.sessions}</Text>
          </View>
        </View>

        <Text style={styles.professor}>{item.professor}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.rowBetween}>
          <TouchableOpacity>
            <Text
              style={styles.moreDetails}
              onPress={() => navigation.navigate('LearningPackagesScreen')}
            >
              View More Details &gt;
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bookNow}>
            <Text style={styles.bookNowText}>Book now</Text>
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
    borderRadius: 16,
    overflow: 'hidden',
    width: screenWidth * 0.88,
    marginRight: 16,
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: 160,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bestValueTag: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 6,
    paddingVertical: 2,
    elevation: 2,
  },
  bestValueImage: {
    width: 14,
    height: 14,
    marginRight: 4,
    tintColor: 'red',
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
    color: colors.black,
  },
  price: {
    fontSize: 16,
    fontFamily: fonts.Bold,
    color: colors.black,
  },
  sessions: {
    fontSize: 11,
    fontFamily: fonts.Medium,
    color: colors.gray,
  },
  professor: {
    fontSize: 13,
    fontFamily: fonts.Regular,
    color: colors.gray,
    marginTop: 6,
  },
  description: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: colors.gray,
    marginVertical: 10,
  },
  moreDetails: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: colors.primary,
  },
  bookNow: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  bookNowText: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: '#fff',
  },
});
