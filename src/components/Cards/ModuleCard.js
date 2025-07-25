import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { fonts } from './../../config/fonts';
import colors from './../../config/colors';
import { useTranslation } from 'react-i18next';

const ModuleCard = ({ item }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.image }} style={styles.image} />

        <View style={styles.durationWrapper}>
          <Feather name="clock" size={12} color="#fff" />
          <Text style={styles.durationText}>
            {item.duration} {t('mins')}
          </Text>
        </View>

        <TouchableOpacity style={styles.bookmark}>
          <Feather name="bookmark" size={18} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.title}>
          {item.name}
        </Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.buttonRow}>
          <View style={{ flex: 1 }} />
          <LinearGradient
            colors={['#528BD9', '#FFC7D2']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonWrapper}
          >
            <TouchableOpacity>
              <Text style={styles.buttonText}>{t('register')}</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default ModuleCard;

const styles = StyleSheet.create({
  card: {
    width: 173,
    height: 190,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginRight: 16,
    overflow: 'hidden',
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 92,
  },
  durationWrapper: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: '#00000099',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    color: '#fff',
    fontSize: 10,
    marginLeft: 4,
  },
  bookmark: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    elevation: 2,
  },
  content: {
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 12,
    fontFamily: fonts.SemiBold,
    color: colors.black,
    marginBottom: 2,
  },
  description: {
    fontSize: 10,
    fontFamily: fonts.Regular,
    color: '#202225',
    marginBottom: 8,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 6,
  },
  buttonWrapper: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 10,
    fontFamily: fonts.SemiBold,
    color: colors.grey,
  },
});
