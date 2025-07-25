import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ModuleCard from './../Cards/ModuleCard';
import { useTranslation } from 'react-i18next';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';

const modulesData = [
  {
    id: '1',
    name: 'Chemistry New Course',
    description: 'Description',
    duration: '35',
    image:
      'https://t4.ftcdn.net/jpg/00/53/64/49/360_F_53644926_0mvUCIxCCTvIa7BAIFuUa3xsaNA9lbeb.jpg',
  },
  {
    id: '2',
    name: 'Physics New',
    description: 'Description',
    duration: '10',
    image: 'https://thumbs.dreamstime.com/b/science-lab-chemicals-14262437.jpg',
  },
  {
    id: '3',
    name: 'Module 4 – Thermodynamics',
    description: 'Description',
    duration: '45',
    image: 'https://cdn-icons-png.flaticon.com/512/2892/2892935.png',
  },
];

const Modules = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('modules')}</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>{t('viewall')}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={modulesData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ModuleCard item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 4 }}
      />
    </View>
  );
};

export default Modules;

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
    color: colors.black,
    fontFamily: fonts.SemiBold,
  },
  viewAll: {
    fontSize: 12,
    color: colors.black,
    fontFamily: fonts.Medium,
  },
});
