import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import ScheduleCard from './../Cards/ScheduleCard';

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
  {
    id: '4',
    subject: 'React Native',
    title: 'Lecture on Molecules',
    professor: 'Prof. John Doe',
    status: 'UPCOMING',
    time: '16 June  |  10:30 AM - 1:30 PM',
    buttonLabel: 'Register',
  },
  {
    id: '5',
    subject: 'React Native',
    title: 'Lecture on Molecules',
    professor: 'Prof. John Doe',
    status: 'UPCOMING',
    time: '16 June  |  10:30 AM - 1:30 PM',
    buttonLabel: 'Register',
  },
];

const HomeSchedule = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Schedule</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
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
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  viewAll: {
    fontSize: 14,
    color: '#000',
    opacity: 0.6,
  },
});
