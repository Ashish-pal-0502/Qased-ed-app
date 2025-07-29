import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import { fonts } from '../../config/fonts';
import { useTranslation } from 'react-i18next';
import { ProgressBar } from 'react-native-paper';
import RightIcon from '../../assets/Images/Icons/RightIcon.png';
import GradeAIcon from '../../assets/Images/Icons/UserIcon.png';
import MathIcon from '../../assets/Images/Icons/UserIcon.png';
import ChemistryIcon from '../../assets/Images/Icons/UserIcon.png';
import BiologyIcon from '../../assets/Images/Icons/UserIcon.png';
import ProgressReportCard from './../../components/Cards/ProgressReportCard';

const ProgressReportScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const progress = 0.7;
  const [selectedView, setSelectedView] = useState('Year');

  const subjectData = [
    {
      id: '1',
      name: 'Mathematics',
      score: 85,
      image: MathIcon,
      gradeIcon: GradeAIcon,
    },
    {
      id: '2',
      name: 'Chemistry',
      score: 90,
      image: ChemistryIcon,
      gradeIcon: GradeAIcon,
    },
    {
      id: '3',
      name: 'Biology',
      score: 98,
      image: BiologyIcon,
      gradeIcon: GradeAIcon,
    },
  ];

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconWrapper}
        >
          <Ionicons name="arrow-back" size={22} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{t('Progress Report')}</Text>
        <View style={styles.iconWrapper} />
      </View>

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedView === 'Term' && styles.toggleActive,
          ]}
          onPress={() => setSelectedView('Term')}
        >
          <Text
            style={[
              styles.toggleText,
              selectedView === 'Term' && styles.toggleTextActive,
            ]}
          >
            {t('Term')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedView === 'Year' && styles.toggleActive,
          ]}
          onPress={() => setSelectedView('Year')}
        >
          <Text
            style={[
              styles.toggleText,
              selectedView === 'Year' && styles.toggleTextActive,
            ]}
          >
            {t('Year')}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progressSection}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressLabel}>{t('Average Percentage')}</Text>
          <View style={styles.progressRight}>
            <Text style={styles.progressPercent}>70%</Text>
            <Image source={RightIcon} style={styles.smallRightIcon} />
          </View>
        </View>
        <ProgressBar
          progress={progress}
          color="#8979FF"
          style={styles.progressBar}
        />
      </View>

      <FlatList
        data={subjectData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProgressReportCard subject={item} />}
        contentContainerStyle={{ padding: 16 }}
        ListFooterComponent={
          <View>
            <View style={styles.totalMarksBox}>
              <Text style={styles.totalLabel}>Total Marks</Text>
              <Text style={styles.totalValue}>300/400</Text>
            </View>
            <TouchableOpacity style={styles.downloadButton}>
              <View style={styles.downloadButtonContent}>
                <Ionicons
                  name="download"
                  size={18}
                  color="#fff"
                  style={{ marginRight: 6 }}
                />
                <Text style={styles.downloadButtonText}>Download Report</Text>
              </View>
            </TouchableOpacity>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default ProgressReportScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  iconWrapper: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    fontFamily: fonts.Medium,
    fontSize: 18,
    textAlign: 'center',
    color: colors.black,
  },
  toggleContainer: {
    backgroundColor: '#E8EDF5',
    borderRadius: 50,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 12,
    width: '95%',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 5,
    borderRadius: 50,
    alignItems: 'center',
  },
  toggleText: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: '#4A709C',
  },
  toggleActive: {
    backgroundColor: '#FFFFFF',
  },
  toggleTextActive: {
    color: '#0D141C',
    fontFamily: fonts.Medium,
  },
  progressSection: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressLabel: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: '#111827',
  },
  progressRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  progressPercent: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: '#111827',
  },
  smallRightIcon: {
    width: 5,
    height: 8,
    tintColor: '#111827',
    resizeMode: 'contain',
  },
  progressBar: {
    height: 5,
    borderRadius: 3,
    backgroundColor: '#DCDCDC',
    marginTop: 10,
  },
  totalMarksBox: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#D4D2E3',
  },
  totalLabel: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: '#000000',
  },
  totalValue: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: '#919191',
  },
  downloadButton: {
    marginVertical: 16,
    backgroundColor: '#528BD9',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },

  downloadButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  downloadButtonText: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: colors.white,
  },
});
