import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import { useTranslation } from 'react-i18next';
import ScheduleScreenCard from './../../components/Cards/ScheduleScreenCard';
import Button from './../../components/Buttons/Button';
import apiClient from './../../api/client';
import useAuth from './../../auth/useAuth';
import { useNavigation } from '@react-navigation/native';
import TopNavigationHeader from './../../components/Header/TopNavigationHeader';

const ScheduleScreen = ({ route }) => {
  const { teacherId } = route.params;
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  const [days, setDays] = useState([]);
  const [visibleDays, setVisibleDays] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const { user } = useAuth();

  console.log(selectedDate);

  const generateDays = (count = 30) => {
    const options = { weekday: 'short' };
    const today = new Date();
    const result = [];

    for (let i = 0; i < count; i++) {
      const current = new Date();
      current.setDate(today.getDate() + i - 1);
      result.push({
        date: current.getDate().toString(),
        day: current.toLocaleDateString('en-US', options).toUpperCase(),
        fullDate: current.toISOString(),
      });
    }

    setDays(result);
    setStartIndex(1);
    setVisibleDays(result.slice(1, 5));
    setSelectedDate(result[1].fullDate);
  };

  useEffect(() => {
    const generateNextDays = (count = 4) => {
      const options = { weekday: 'short' };
      const today = new Date();
      const result = [];

      for (let i = 0; i < count; i++) {
        const current = new Date();
        current.setDate(today.getDate() + i);

        result.push({
          date: current.getDate().toString(),
          day: current.toLocaleDateString('en-US', options).toUpperCase(),
        });
      }

      setDays(result);

      setSelectedDate(today.getDate().toString());
    };

    generateNextDays();
  }, []);

  const getAvailableSlots = async () => {
    const response = await apiClient.get('/slot/get-available-slots', {
      teacherId: teacherId,
      // date: selectedDate,
      type: 'group', // send type me group or single
      mode: 'offline', // mode me offline online
      sessionPurpose: 'exam-feedback',
    });

    if (response.ok) {
      setAvailableSlots(response.data.slots);
    }
  };
  const handleAddSlot = async () => {
    const response = await apiClient.post('/slotcart/add-slot', {
      slotIds: selectedIds,
      studentId: user.id,
      parentId: user.parentId,
    });

    if (response.ok) {
      navigation.replace('MyLibrary');
    }

    if (response.ok) {
      console.log(response.data);
    } else {
      Alert.alert('Failed to Add slot. Please try again.');
      console.log(response.problem);
    }
  };

  useEffect(() => {
    generateDays();
    getAvailableSlots();
  }, []);

  const handlePrev = () => {
    if (startIndex > 0) {
      const newIndex = startIndex - 1;
      setStartIndex(newIndex);
      setVisibleDays(days.slice(newIndex, newIndex + 4));
    }
  };

  const handleNext = () => {
    if (startIndex + 4 < days.length) {
      const newIndex = startIndex + 1;
      setStartIndex(newIndex);
      setVisibleDays(days.slice(newIndex, newIndex + 4));
    }
  };

  const renderDateCard = item => {
    const isSelected = item.fullDate === selectedDate;

    return (
      <TouchableOpacity
        key={item.date}
        style={[styles.dateCard, isSelected && styles.selectedDateCard]}
        onPress={() => setSelectedDate(item.fullDate)}
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
      <TopNavigationHeader title={t('My_Schedule')} />

      <View style={styles.dateNavRow}>
        <TouchableOpacity onPress={handlePrev}>
          <Ionicons name="chevron-back" size={18} color="#2E220E" />
        </TouchableOpacity>

        <View style={styles.datesRow}>{visibleDays.map(renderDateCard)}</View>

        <TouchableOpacity onPress={handleNext}>
          <Ionicons name="chevron-forward" size={18} color="#2E220E" />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ marginTop: 20 }}>
            {availableSlots && availableSlots.length > 0 ? (
              availableSlots.map(item => (
                <View key={item._id} style={{ marginBottom: 12 }}>
                  <ScheduleScreenCard
                    item={item}
                    selected={selectedIds.includes(item._id)}
                    onPress={() => {
                      if (selectedIds.includes(item._id)) {
                        setSelectedIds(prev =>
                          prev.filter(id => id !== item._id),
                        ); // deselect
                      } else {
                        setSelectedIds(prev => [...prev, item._id]);
                      }
                    }}
                  />
                </View>
              ))
            ) : (
              <Text
                style={{ textAlign: 'center', marginTop: 60, color: 'gray' }}
              >
                No slots are available
              </Text>
            )}
          </View>
        </ScrollView>

        {availableSlots?.length > 0 && user?.type === 'Student' && (
          <View style={styles.bottomButton}>
            <Button title={t('add_to_library')} onPress={handleAddSlot} />
          </View>
        )}
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
    marginTop: 16,
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
  },

  scrollContent: {
    paddingBottom: 40,
  },

  bottomButton: {},
});
