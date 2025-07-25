import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ScheduleCard from './../Cards/ScheduleCard';
import { useTranslation } from 'react-i18next';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';

const dummyData = [
  {
    id: '1',
    subject: 'Java',
    title: 'Lecture on Molecules',
    professor: 'Prof. John Doe',
    status: 'LIVE',
    time: '',
    buttonLabel: 'Join Now',
  },
  {
    id: '2',
    subject: 'HTML',
    title: 'Lecture on Molecules',
    professor: 'Prof. John Doe',
    status: 'UPCOMING',
    time: '16 June  |  10:30 AM - 1:30 PM',
    buttonLabel: 'Register',
  },
  {
    id: '3',
    subject: 'React Native',
    title: 'Lecture on Molecules',
    professor: 'Prof. John Doe',
    status: 'UPCOMING',
    time: '16 June  |  10:30 AM - 1:30 PM',
    buttonLabel: 'Register',
  },
];

const HomeSchedule = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('schedule')}</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>{t('viewall')}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={dummyData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ScheduleCard item={item} />}
        contentContainerStyle={{ gap: 14 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeSchedule;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    color: colors.black,
    fontFamily: fonts.SemiBold,
  },
  viewAll: {
    fontSize: 12,
    color: colors.black,
    fontFamily: fonts.Medium,
  },
});
