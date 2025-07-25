import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import InstructorCard from './../Cards/InstructorCard';
import { useTranslation } from 'react-i18next';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';

const instructorsData = [
  {
    id: '1',
    name: 'Prof. John Doe',
    avatar: 'https://cdn-icons-png.flaticon.com/128/4140/4140048.png',
  },
  {
    id: '2',
    name: 'Prof. John Doe',
    avatar: 'https://cdn-icons-png.flaticon.com/128/4140/4140048.png',
  },
  {
    id: '3',
    name: 'Prof. John Doe',
    avatar: 'https://cdn-icons-png.flaticon.com/128/4140/4140048.png',
  },
  {
    id: '4',
    name: 'Prof. John Doe',
    avatar: 'https://cdn-icons-png.flaticon.com/128/4140/4140048.png',
  },
  {
    id: '5',
    name: 'Prof. John Doe',
    avatar: 'https://cdn-icons-png.flaticon.com/128/4140/4140048.png',
  },
  {
    id: '6',
    name: 'Prof. John Doe',
    avatar: 'https://cdn-icons-png.flaticon.com/128/4140/4140048.png',
  },
];

const Instructors = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('instructors')}</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>{t('viewall')}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={instructorsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <InstructorCard item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 3 }}
      />
    </View>
  );
};

export default Instructors;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginVertical: 8,
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
