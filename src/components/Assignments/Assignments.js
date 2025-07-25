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
import AssignmentsCard from './../Cards/AssignmentsCard';

const assignmentsData = [
  {
    id: '1',
    title: 'Maths Worksheet',
    status: 'submitted',
    due: 'Due Today',
    icon: 'https://cdn-icons-png.flaticon.com/128/2436/2436632.png',
  },
  {
    id: '2',
    title: 'Chemistry Practical',
    status: 'pending',
    due: 'Due Tomorrow',
    icon: 'https://cdn-icons-png.flaticon.com/128/5886/5886122.png',
  },
];

const Assignments = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('assignments')}</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>{t('viewall')}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={assignmentsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <AssignmentsCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Assignments;

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
