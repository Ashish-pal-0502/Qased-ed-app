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
import MyLibraryCard from './../../components/Cards/MyLibraryCard';

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

const TimeTableScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const [selectedView, setSelectedView] = useState('Daily');
  const [currentDate, setCurrentDate] = useState(new Date());

  const dummyData = {
    Monday: [
      {
        id: '1',
        subject: 'Java',
        title: 'Lecture on Atoms',
        professor: 'PROF. MARY DOE',
        status: 'LIVE',
        time: '11:00 AM TO 12:00 PM',
      },
      {
        id: '2',
        subject: 'Java',
        title: 'Lecture on Atoms',
        professor: 'PROF. MARY DOE',
        status: 'REGISTERED',
        time: '11:00 AM TO 12:00 PM',
      },
    ],
    Tuesday: [
      {
        id: '3',
        subject: 'Java',
        title: 'Lecture on Atoms',
        professor: 'PROF. MARY DOE',
        status: 'LIVE',
        time: '11:00 AM TO 12:00 PM',
      },
      {
        id: '4',
        subject: 'Java',
        title: 'Lecture on Atoms',
        professor: 'PROF. MARY DOE',
        status: 'REGISTERED',
        time: '11:00 AM TO 12:00 PM',
      },
    ],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  };

  const getFormattedDate = date => {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  };

  const moveDate = direction => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + direction);
    setCurrentDate(newDate);
  };

  const renderDateNavigation = () => (
    <View style={styles.dateContainer}>
      <TouchableOpacity
        onPress={() => moveDate(-1)}
        style={styles.dateNavButton}
      >
        <Ionicons name="chevron-back" size={20} color="#2B1908" />
      </TouchableOpacity>

      <View style={styles.dateTextContainer}>
        <Text style={styles.dateText}>{getFormattedDate(currentDate)}</Text>
      </View>

      <TouchableOpacity
        onPress={() => moveDate(1)}
        style={styles.dateNavButton}
      >
        <Ionicons name="chevron-forward" size={20} color="#2B1908" />
      </TouchableOpacity>
    </View>
  );

  const renderWeeklySchedule = () => (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingVertical: 20,
      }}
    >
      {weekDays.map(day => (
        <View key={day} style={{ marginBottom: 24, gap: 10 }}>
          <Text style={styles.weekSectionTitle}>{day}</Text>
          {dummyData[day] && dummyData[day].length > 0 ? (
            dummyData[day].map(item => (
              <MyLibraryCard key={item.id} item={item} />
            ))
          ) : (
            <Text style={styles.emptyText}>No lectures</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconWrapper}
        >
          <Ionicons name="arrow-back" size={22} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{t('time_table')}</Text>

        <View style={styles.iconWrapper} />
      </View>

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedView === 'Daily' && styles.toggleActive,
          ]}
          onPress={() => setSelectedView('Daily')}
        >
          <Text
            style={[
              styles.toggleText,
              selectedView === 'Daily' && styles.toggleTextActive,
            ]}
          >
            {t('daily')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleButton,
            selectedView === 'Weekly' && styles.toggleActive,
          ]}
          onPress={() => setSelectedView('Weekly')}
        >
          <Text
            style={[
              styles.toggleText,
              selectedView === 'Weekly' && styles.toggleTextActive,
            ]}
          >
            {t('weekly')}
          </Text>
        </TouchableOpacity>
      </View>

      {selectedView === 'Daily' ? (
        <>
          {renderDateNavigation()}
          <FlatList
            data={dummyData[getFormattedDate(currentDate).split(',')[0]] || []}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <MyLibraryCard isJoin={true} item={item} />
            )}
            contentContainerStyle={{
              gap: 12,
              paddingHorizontal: 16,
              paddingBottom: 16,
            }}
            showsVerticalScrollIndicator={false}
          />
        </>
      ) : (
        renderWeeklySchedule()
      )}
    </SafeAreaView>
  );
};

export default TimeTableScreen;

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

  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 18,
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  dateNavButton: {
    padding: 8,
  },
  dateTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  dateText: {
    fontFamily: fonts.Medium,
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  iconWrapper: {
    width: 24,
  },

  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 30,
    marginTop: 8,
    padding: 4,
  },
  toggleButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 30,
  },
  toggleActive: {
    backgroundColor: '#1779F3',
  },
  toggleText: {
    fontFamily: fonts.Medium,
    color: '#6D6D6D',
    fontSize: 14,
  },
  toggleTextActive: {
    color: '#fff',
  },

  weekSectionTitle: {
    fontSize: 16,
    fontFamily: fonts.Medium,
    color: colors.black,
  },
  emptyText: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: '#999',
  },
});
