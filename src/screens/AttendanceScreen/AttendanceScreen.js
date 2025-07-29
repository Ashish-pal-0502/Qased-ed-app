import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import { useTranslation } from 'react-i18next';
import { ProgressBar } from 'react-native-paper';
import RightIcon from '../../assets/Images/Icons/RightIcon.png';
import CustomCalendar from './../../components/Cards/CustomCalender';

const breakdownData = [
  {
    id: 1,
    subject: 'Mathematics',
    status: 'Present',
  },
  {
    id: 2,
    subject: 'Chemistry',
    status: 'Absent',
  },
  {
    id: 3,
    subject: 'Biology',
    status: 'Present',
  },
];

const AttendanceScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const progress = 0.8;
  const [selectedView, setSelectedView] = useState('Month');

  const renderBreakdownItem = ({ item }) => {
    const isPresent = item.status === 'Present';

    return (
      <View style={styles.breakdownRow}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/10687/10687591.png',
          }}
          style={styles.subjectIcon}
        />
        <Text style={styles.subjectText}>{item.subject}</Text>
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: isPresent ? '#DCEFEA' : '#F5E4E4' },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              { color: isPresent ? '#29C5A0' : '#FE6767' },
            ]}
          >
            {item.status}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconWrapper}
        >
          <Ionicons name="arrow-back" size={22} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{t('attendance')}</Text>

        <View style={styles.iconWrapper} />
      </View>

      <ScrollView>
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
              selectedView === 'Month' && styles.toggleActive,
            ]}
            onPress={() => setSelectedView('Month')}
          >
            <Text
              style={[
                styles.toggleText,
                selectedView === 'Month' && styles.toggleTextActive,
              ]}
            >
              {t('Month')}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>{t('Overall Attendance')}</Text>
            <View style={styles.progressRight}>
              <Text style={styles.progressPercent}>80%</Text>
              <Image source={RightIcon} style={styles.smallRightIcon} />
            </View>
          </View>

          <ProgressBar
            progress={progress}
            color="#8979FF"
            style={styles.progressBar}
          />
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <CustomCalendar />
        </View>

        <Text style={styles.breakdownTitle}>Daily Breakdown</Text>
        <View style={styles.breakdownContainer}>
          <FlatList
            data={breakdownData}
            keyExtractor={item => item.id.toString()}
            renderItem={renderBreakdownItem}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={styles.breakLine} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AttendanceScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.background,
    paddingBottom: 70,
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
    justifyContent: 'center',
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

  breakdownContainer: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 10,
    borderRadius: 10,
  },

  breakdownTitle: {
    fontSize: 16,
    fontFamily: fonts.Medium,
    color: '#000000',
    marginTop: 12,
    marginHorizontal: 16,
  },

  breakdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },

  subjectIcon: {
    width: 30,
    height: 32,
    resizeMode: 'contain',
    marginRight: 12,
  },

  subjectText: {
    flex: 1,
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: colors.black,
  },

  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },

  statusText: {
    fontSize: 10,
    fontFamily: fonts.Regular,
  },

  breakLine: {
    height: 1,
    backgroundColor: '#D1D1D1',
  },
});
