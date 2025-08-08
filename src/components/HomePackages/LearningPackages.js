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
import { useEffect, useState } from 'react';

const LearningPackages = () => {
  const { t } = useTranslation();
  const [packages, setPackages] = useState([]);

  const getLearningPackages = async () => {
    const response = await apiClient.get('/slot/get-package-slot');

    if (response.ok) {
      setPackages(response.data.packages);
    }
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
        data={packages}
        keyExtractor={item => item._id}
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
