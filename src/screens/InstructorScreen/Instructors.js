import React, { useState, useEffect } from 'react';
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
import apiClient from './../../api/client';
import TopNavigationHeader from './../../components/Header/TopNavigationHeader';

const Instructors = ({ route }) => {
  const { type } = route.params;
  const [search, setSearch] = useState('');
  const { t } = useTranslation();
  const [teachers, setTeachers] = useState([]);

  const getAllInstructors = async () => {
    const response = await apiClient.get('/teacher/get-teachers');
    if (response.ok) {
      setTeachers(response.data.teachers);
    }
  };

  useEffect(() => {
    getAllInstructors();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigationHeader title={t('instructor.title')} />

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

        <View style={{ paddingVertical: 10 }}>
          <FlatList
            data={teachers}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <InstructorsListCard instructor={item} type={type} />
            )}
            contentContainerStyle={{ paddingBottom: 100, flexGrow: 1 }}
            ListEmptyComponent={
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 16, color: 'gray' }}>
                  No instructors found.
                </Text>
              </View>
            }
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
    paddingVertical: 20,
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
