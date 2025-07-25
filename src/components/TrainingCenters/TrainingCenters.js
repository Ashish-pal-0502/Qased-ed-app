import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import TrainingCenterCard from './../Cards/TrainingCenterCard';
import { useTranslation } from 'react-i18next';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';

const trainingCentersData = [
  {
    id: '1',
    name: 'MGM DEL KD CEP.',
    description: 'Description 12345',
    teachers: 12,
    students: 325,
    lectures: 8,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqS5mbq_KJtMlaUaJr8ZKrb-1Y0HL8eUieDQ&s',
  },
  {
    id: '2',
    name: 'Mezope D Kane',
    description: 'Description 83483',
    teachers: 9,
    students: 200,
    lectures: 5,
    image:
      'https://t3.ftcdn.net/jpg/00/37/59/54/360_F_37595432_eiYo7ms0vXleIMYlFLywjdwfPqWypQbK.jpg',
  },
];

const TrainingCenters = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('trainingcenter')}</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>{t('viewall')}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={trainingCentersData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TrainingCenterCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TrainingCenters;

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
