import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import { fonts } from '../../config/fonts';
import InstructorsListCard from './../../components/Cards/InstructorsListCard';

import { useTranslation } from 'react-i18next';

const filters = ['All', 'Chemistry', 'Maths', 'English'];

const instructorsData = [
  {
    id: '1',
    name: 'Prof. Mary Doe',
    title: 'CHEMISTRY PROFESSOR',
    description: 'Lorem ipsum dolor sit amet consectetur...',
    image: require('../../assets/Images/ProfileImages/InstructorImage.png'),
  },
  {
    id: '2',
    name: 'Prof. Mary Doe',
    title: 'CHEMISTRY PROFESSOR',
    description: 'Lorem ipsum dolor sit amet consectetur...',
    image: require('../../assets/Images/ProfileImages/InstructorImage.png'),
  },
  {
    id: '3',
    name: 'Prof. Mary Doe',
    title: 'CHEMISTRY PROFESSOR',
    description: 'Lorem ipsum dolor sit amet consectetur...',
    image: require('../../assets/Images/ProfileImages/InstructorImage.png'),
  },
  {
    id: '4',
    name: 'Prof. Mary Doe',
    title: 'CHEMISTRY PROFESSOR',
    description: 'Lorem ipsum dolor sit amet consectetur...',
    image: require('../../assets/Images/ProfileImages/InstructorImage.png'),
  },
];

const Instructors = () => {
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Ionicons name="arrow-back" size={20} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{t('instructor.title')}</Text>
        <View style={styles.iconWrapper} />
      </View>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <Ionicons
              name="search"
              size={14}
              color="#667085"
              style={{ marginRight: 6 }}
            />
            <TextInput
              placeholder={t('instructor.searchPlaceholder')}
              placeholderTextColor="#6B7280"
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>{t('instructor.filters')}</Text>
            <Ionicons
              name="filter"
              size={15}
              color="#344054"
              style={{ marginLeft: 4 }}
            />
          </TouchableOpacity>
        </View>

        {/* <View style={styles.filterChips}>
          {filters.map(filter => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.chip,
                selectedFilter === filter && styles.activeChip,
              ]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text
                style={[
                  styles.chipText,
                  selectedFilter === filter && styles.activeChipText,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View> */}

        <View style={{ paddingVertical: 12 }}>
          <FlatList
            data={instructorsData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <InstructorsListCard instructor={item} />}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Instructors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 14,
  },
  iconWrapper: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: fonts.Medium,
    fontSize: 18,
    color: colors.black,
    flex: 1,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: '#D0D5DD',
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 8,
    flex: 1,
  },
  searchInput: {
    flex: 1,
    fontFamily: fonts.Regular,
    fontSize: 14,
    paddingVertical: 0,
    color: colors.text,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: colors.white,
    borderColor: '#D0D5DD',
    borderWidth: 1,
  },
  filterText: {
    fontSize: 12,
    color: '#344054',
    fontFamily: fonts.Medium,
  },
  filterChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  chip: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  chipText: {
    fontSize: 12,
    color: '#667085',
    fontFamily: fonts.Medium,
  },
  activeChip: {
    backgroundColor: '#F4F4F5',
    borderColor: '#F4F4F5',
  },
  activeChipText: {
    color: '#000',
  },
});
