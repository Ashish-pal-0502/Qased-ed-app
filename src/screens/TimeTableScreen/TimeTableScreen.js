import React, { useState, useEffect } from 'react';
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
import useAuth from './../../auth/useAuth';
import LoginViewButton from './../../components/NotLoginButton/LoginViewButton';
import apiClient from './../../api/client';
import TimeTableCard from './../../components/Cards/TimeTableCard';

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

const TimeTableScreen = ({ navigation }) => {
  const getUTCMidnight = date => {
    const d = new Date(date);
    d.setUTCHours(0, 0, 0, 0);
    return d;
  };
  const { t } = useTranslation();
  const { user } = useAuth();

  const [sessions, setSessions] = useState([]);
  const [selectedView, setSelectedView] = useState('Daily');
  const [currentDate, setCurrentDate] = useState(getUTCMidnight(new Date()));

  const getFormattedDate = date => {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  };

  const moveDate = direction => {
    const newDate = new Date(currentDate);
    newDate.setUTCDate(newDate.getUTCDate() + direction);
    setCurrentDate(getUTCMidnight(newDate));
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

  const groupSessionsByDay = sessionsList => {
    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    const grouped = days.reduce((acc, day) => {
      acc[day] = [];
      return acc;
    }, {});

    sessionsList.forEach(session => {
      const dayName = new Date(session.date).toLocaleDateString('en-US', {
        weekday: 'long',
      });
      if (grouped[dayName]) {
        grouped[dayName].push(session);
      }
    });

    return grouped;
  };

  const weeklyData = groupSessionsByDay(sessions);

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
          {weeklyData[day] && weeklyData[day].length > 0 ? (
            weeklyData[day].map(item => (
              <TimeTableCard key={item._id} item={item} />
            ))
          ) : (
            <Text style={styles.emptyText}>No lectures</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );

  const getMyBookings = async () => {
    const response = await apiClient.get('/booking/get-upcoming-sessions', {
      userId: user?.id,
      date: currentDate.toISOString(),
    });

    if (response.ok) {
      setSessions(response.data.sessions);
    }
  };

  useEffect(() => {
    getMyBookings();
  }, [currentDate]);

  const selectedDaySessions = sessions.filter(
    session => session.date === currentDate.toISOString(),
  );

  if (!user) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <LoginViewButton />
      </SafeAreaView>
    );
  }

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

          {selectedDaySessions?.length > 0 ? (
            <FlatList
              data={selectedDaySessions}
              keyExtractor={item => item._id}
              renderItem={({ item }) => (
                <TimeTableCard isJoin={true} item={item} />
              )}
              contentContainerStyle={{
                gap: 12,
                paddingHorizontal: 16,
                paddingBottom: 16,
              }}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <Text
              style={{
                textAlign: 'center',
                marginTop: 20,
                fontSize: 16,
                color: 'gray',
              }}
            >
              No sessions available
            </Text>
          )}
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
