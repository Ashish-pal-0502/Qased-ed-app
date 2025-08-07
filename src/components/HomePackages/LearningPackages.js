import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { fonts } from './../../config/fonts';
import LearningPackageCard from './../Cards/LearningPackageCard';
import colors from './../../config/colors';
import apiClient from './../../api/client';
import { useEffect } from 'react';

const learningPackages = [
  {
    id: '1',
    plan: 'Basic Plan',
    professor: 'Prof. John Doe',
    price: 'QAR 85',
    sessions: 'For 10 sessions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...',
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww',
    bestValue: true,
  },
  {
    id: '2',
    plan: 'Advanced Plan',
    professor: 'Prof. Jane Smith',
    price: 'QAR 150',
    sessions: 'For 20 sessions',
    description: 'Dolor sit amet, consectetur adipiscing elit...',
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww',
  },
];

const LearningPackages = () => {
  const { t } = useTranslation();

  const getLearningPackages = async () => {
    const response = await apiClient.get('/slot/get-package-slot');
  };

  useEffect(() => {
    getLearningPackages();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('packages')}</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>{t('viewall')}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={learningPackages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <LearningPackageCard item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
};

export default LearningPackages;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    color: colors.black,
  },
  viewAll: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: colors.black,
  },
});
