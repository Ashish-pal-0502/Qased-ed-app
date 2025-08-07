import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { fonts } from './../../config/fonts';
import colors from './../../config/colors';
import Icon from 'react-native-vector-icons/Feather';

const MyLibraryCard = ({ isJoin, item, removeSingleItem }) => {
  const { t } = useTranslation();

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
          <Text style={styles.professor}>PROF. </Text>
          <TouchableOpacity onPress={() => removeSingleItem(item?._id)}>
            <Icon name="x" size={16} color="#7F56D9" />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>{item?.slot?.subject}</Text>
        <Text style={styles.time}>{item?.slot?.subject}</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={styles.footerRow}>
            <View style={styles.avatars}>
              <Image
                source={{
                  uri: 'https://randomuser.me/api/portraits/women/1.jpg',
                }}
                style={[styles.avatar, { zIndex: 2 }]}
              />
              <Image
                source={{
                  uri: 'https://randomuser.me/api/portraits/women/2.jpg',
                }}
                style={[styles.avatar, { marginLeft: -6, zIndex: 3 }]}
              />
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>+3 already registered</Text>
            </View>
          </View>
          {isJoin && (
            <View style={styles.join}>
              <Text style={styles.joinText}>Join Now</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default MyLibraryCard;
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    height: 102,
    borderWidth: 1,
    borderColor: '#D4D2E3',
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
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  joinText: {
    fontSize: 10,
    fontFamily: fonts.Medium,
    color: colors.white,
  },
});
