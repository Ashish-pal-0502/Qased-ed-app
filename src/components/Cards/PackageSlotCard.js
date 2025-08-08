import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { fonts } from './../../config/fonts';
import colors from './../../config/colors';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';

const PackageSlotCard = ({ item }) => {
  const { t } = useTranslation();
  const isLive = item.status === 'LIVE';

  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://media.istockphoto.com/id/658148844/photo/laboratory-research.jpg?s=612x612&w=0&k=20&c=F5DYrZu2oDYPA1ZFWiCQ0Fnk2aa2nMMUhKMcG9i3SXs=',
        }}
        style={styles.thumbnail}
      />

      <View style={styles.infoContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.professor}>Prof. {item?.teacher?.name}</Text>
        </View>

        <Text style={styles.title}>{item?.name}</Text>
        <Text style={styles.time}>
          {isLive ? (
            <Text style={styles.live}>
              <Text style={styles.dot}>● </Text>
              LIVE NOW
            </Text>
          ) : (
            <Text style={styles.time}>
              {new Date(item?.startTime).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
              {' To '}
              {new Date(item?.endTime).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          )}
        </Text>

        <View style={styles.footerRow}>
          <View style={styles.avatars}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/women/1.jpg',
              }}
              style={[styles.avatar, { zIndex: 2 }]}
            />
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/2.jpg' }}
              style={[styles.avatar, { marginLeft: -6, zIndex: 3 }]}
            />
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>+3 already registered</Text>
          </View>

          <View style={styles.join}>
            <Text style={styles.joinText}>{t('joinnow')}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PackageSlotCard;
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    height: 110,
    borderWidth: 1,
    borderColor: '#D4D2E3',
    marginBottom: 10,
  },
  thumbnail: {
    width: 120,
    height: 82,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  professor: {
    fontSize: 7,
    fontFamily: fonts.Regular,
    color: '#919191',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    color: '#000',
  },
  time: {
    fontSize: 10,
    fontFamily: fonts.Medium,
    color: '#919191',
  },
  live: {
    fontSize: 10,
    color: '#F22E32',
    fontFamily: fonts.Medium,
  },
  dot: {
    fontSize: 12,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  avatars: {
    flexDirection: 'row',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.white,
  },
  tag: {
    backgroundColor: '#F9F5FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: -6,
    zIndex: 3,
  },
  tagText: {
    fontSize: 8,
    fontFamily: fonts.Medium,
    color: '#7F56D9',
  },
  join: {
    backgroundColor: '#528BD9',
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 30,
    marginLeft: 'auto',
  },
  joinText: {
    fontSize: 10,
    fontFamily: fonts.Medium,
    color: colors.white,
  },
  time: {
    fontSize: 10,
    fontFamily: fonts.Medium,
    color: '#919191',
  },
});
