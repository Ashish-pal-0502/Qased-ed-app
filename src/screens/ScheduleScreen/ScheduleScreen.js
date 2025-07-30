import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import { useTranslation } from 'react-i18next';
import ScheduleScreenCard from './../../components/Cards/ScheduleScreenCard';
import Button from './../../components/Buttons/Button';

const days = [
  { date: '14', day: 'TUE' },
  { date: '15', day: 'WED' },
  { date: '16', day: 'THU' },
  { date: '17', day: 'FRI' },
];

const scheduleData = [
  {
    id: '1',
    className: 'Lecture on Atoms',
    roman: 'IX',
    time: '9:00 AM TO 12:00 PM',
  },
  {
    id: '2',
    className: 'Lecture on Chemical Reactions',
    roman: 'VIII',
    time: '1:00 PM TO 4:00 PM',
  },
];

const ScheduleScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState('15');
  const [selectedId, setSelectedId] = useState(null);

  const renderDateCard = item => {
    const isSelected = item.date === selectedDate;
    return (
      <TouchableOpacity
        key={item.date}
        style={[styles.dateCard, isSelected && styles.selectedDateCard]}
        onPress={() => setSelectedDate(item.date)}
      >
        <Text style={[styles.dateText, isSelected && styles.selectedDateText]}>
          {item.date}
        </Text>
        <Text style={[styles.dayText, isSelected && styles.selectedDateText]}>
          {item.day}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconWrapper}
        >
          <Ionicons name="arrow-back" size={20} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{t('My_Schedule')}</Text>

        <View style={styles.iconWrapper} />
      </View>

      <View style={styles.dateNavRow}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={18} color="#2E220E" />
        </TouchableOpacity>
        <View style={styles.datesRow}>{days.map(renderDateCard)}</View>
        <TouchableOpacity>
          <Ionicons name="chevron-forward" size={18} color="#2E220E" />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ marginTop: 20 }}>
            {scheduleData.map(item => (
              <View key={item.id} style={{ marginBottom: 12 }}>
                <ScheduleScreenCard
                  className={item.className}
                  roman={item.roman}
                  time={item.time}
                  selected={selectedId === item.id}
                  onPress={() => setSelectedId(item.id)}
                />
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.bottomButton}>
          <Button title={t('add_to_library')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScheduleScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 14,
    paddingHorizontal: 16,
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
  dateNavRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  datesRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  dateCard: {
    width: 66,
    height: 84,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDateCard: {
    backgroundColor: '#528BD9',
  },
  dateText: {
    fontSize: 24,
    fontFamily: fonts.Regular,
    color: '#6B779A',
  },
  dayText: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: '#6B779A',
  },
  selectedDateText: {
    color: '#FFFFFF',
    fontFamily: fonts.Regular,
  },

  mainContent: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 60,
  },

  scrollContent: {
    paddingBottom: 40,
  },

  bottomButton: {
    paddingTop: 12,
  },
});
