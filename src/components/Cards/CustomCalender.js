import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import { fonts } from './../../config/fonts';
import colors from './../../config/colors';

const { width } = Dimensions.get('window');
const DAY_SIZE = width / 9;

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const presentDates = [
  '2025-07-06',
  '2025-07-07',
  '2025-07-08',
  '2025-07-03',
  '2025-07-04',
];
const absentDates = ['2025-07-02', '2025-07-11', '2025-07-13'];

const CustomCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(null);

  const startOfMonth = currentMonth.clone().startOf('month').startOf('week');
  const endOfMonth = currentMonth.clone().endOf('month').endOf('week');

  const generateWeeks = () => {
    const weeks = [];
    let currentDay = startOfMonth.clone();

    while (currentDay.isBefore(endOfMonth)) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        week.push(currentDay.clone());
        currentDay.add(1, 'day');
      }
      weeks.push(week);
    }
    return weeks;
  };

  const renderDay = date => {
    const isCurrentMonth = date.month() === currentMonth.month();
    const dateString = date.format('YYYY-MM-DD');
    const isPresent = presentDates.includes(dateString);
    const isAbsent = absentDates.includes(dateString);
    const isSelected = selectedDate === dateString;

    let bgColor = null;
    if (isPresent) bgColor = '#DCEFEA';
    else if (isAbsent) bgColor = '#F5E4E4';

    return (
      <TouchableOpacity
        key={dateString}
        style={[
          styles.dayWrapper,
          bgColor && { backgroundColor: bgColor },
          isSelected && styles.selectedDate,
        ]}
        onPress={() => setSelectedDate(dateString)}
      >
        <Text
          style={[
            styles.dayText,
            !isCurrentMonth && styles.outsideMonthText,
            isPresent && styles.presentText,
            isAbsent && styles.absentText,
          ]}
        >
          {date.date()}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleMonthChange = direction => {
    setCurrentMonth(prev =>
      direction === 'next'
        ? prev.clone().add(1, 'month')
        : prev.clone().subtract(1, 'month'),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendarWrapper}>
        <View style={styles.monthHeader}>
          <TouchableOpacity onPress={() => handleMonthChange('prev')}>
            <Ionicons name="chevron-back-outline" size={20} color="#495057" />
          </TouchableOpacity>

          <Text style={styles.monthTitle}>
            {currentMonth.format('MMMM YYYY')}
          </Text>

          <TouchableOpacity onPress={() => handleMonthChange('next')}>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#495057"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.weekRow}>
          {weekDays.map(day => (
            <Text key={day} style={styles.weekDay}>
              {day}
            </Text>
          ))}
        </View>

        {generateWeeks().map((week, index) => (
          <View key={index} style={styles.weekRow}>
            {week.map(renderDay)}
          </View>
        ))}

        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: '#528BD9' }]} />
            <Text style={styles.legendText}>Total</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: '#00958C' }]} />
            <Text style={styles.legendText}>Present</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: '#FF5555' }]} />
            <Text style={styles.legendText}>Absent</Text>
          </View>
        </View>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <View
            style={[styles.statusIndicator, { backgroundColor: '#00958C' }]}
          />
          <Text style={[styles.summaryText, { color: '#00958C' }]}>
            Present
          </Text>
          <Text style={[styles.summaryCount, { color: '#00958C' }]}>
            15 Days
          </Text>
        </View>

        <View style={styles.summaryRow}>
          <View
            style={[styles.statusIndicator, { backgroundColor: '#FE6767' }]}
          />
          <Text style={[styles.summaryText, { color: '#FE6767' }]}>Absent</Text>
          <Text style={[styles.summaryCount, { color: '#FE6767' }]}>
            3 Days
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomCalendar;

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  calendarWrapper: {
    padding: 16,
  },
  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  monthTitle: {
    fontSize: 18,
    fontFamily: fonts.Medium,
    color: colors.black,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  weekDay: {
    width: DAY_SIZE,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: '#8F9BB3',
    marginBottom: 8,
  },
  dayWrapper: {
    width: DAY_SIZE,
    height: DAY_SIZE,
    borderRadius: DAY_SIZE / 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
    gap: 2,
  },
  dayText: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: '#538CD9',
  },
  outsideMonthText: {
    color: '#8F9BB3',
    opacity: 0.5,
    fontFamily: fonts.Regular,
  },
  presentText: {
    color: '#538CD9',
    fontFamily: fonts.Regular,
  },
  absentText: {
    color: '#EB5757',
    fontFamily: fonts.Regular,
  },
  selectedDate: {
    borderWidth: 1.5,
    borderColor: '#8A57DE',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    gap: 40,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  legendText: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: '#111827',
  },

  summaryContainer: {
    gap: 0,
  },

  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderRadius: 4,
  },

  statusIndicator: {
    width: 2,
    height: 40,
    marginRight: 8,
  },

  summaryText: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.Medium,
  },

  summaryCount: {
    fontSize: 14,
    fontFamily: fonts.Medium,
  },
});
