import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import Feather from 'react-native-vector-icons/Feather';
import useAuth from './../../auth/useAuth';
import { useNavigation } from '@react-navigation/native';

const HomeNavButtons = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigation = useNavigation();

  const cardData = [
    {
      id: 1,
      icon: require('../../assets/Images/Icons/Homebutton1.png'),
      title: t('Need a hand with homework ?'),
      subtitle: t('Ask a Teacher now'),
      bgColor: '#F9F5FF',
    },
    {
      id: 2,
      icon: require('../../assets/Images/Icons/Homebutton2.png'),
      title: t('Get latest exam feedback'),
      subtitle: t('View Details'),
      bgColor: '#EDFCF2',
    },
    {
      id: 3,
      icon: require('../../assets/Images/Icons/Homebutton3.png'),
      title: t('Want a Quiz recap ?'),
      subtitle: t('Get doubts solved'),
      bgColor: '#FEEEFC',
    },
    {
      id: 4,
      icon: require('../../assets/Images/Icons/Homebutton4.png'),
      title: t('Want to attend lectures'),
      subtitle: t('Join a session now'),
      bgColor: '#FEF3F2',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {cardData.map(item => (
          <TouchableOpacity
            key={item.id}
            style={[styles.card, { backgroundColor: item.bgColor }]}
            onPress={() => {
              if (!user) {
                navigation.navigate('Login');
              } else {
              }
            }}
          >
            <Image
              source={item.icon}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.subtitleRow}>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              {item.subtitle !== 'Get doubts solved' &&
                item.subtitle !== 'احصل على توضيح للشكوك' && (
                  <Feather name="chevron-right" size={12} color="#71717A" />
                )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomeNavButtons;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    height: 154,
  },
  icon: {
    width: 42,
    height: 42,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.Medium,
    color: colors.black,
    marginBottom: 6,
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    gap: 2,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: '#71717A',
  },
});
