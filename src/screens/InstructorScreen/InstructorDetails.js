import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';
import { fonts } from '../../config/fonts';
import InstructorReviewCard from './../../components/Cards/InstructorReviewCard';
import { useTranslation } from 'react-i18next';
import ProfileVerifiedTick from '../../assets/Images/Icons/IntructorVerifiedTick.png';
import ScheduleCard from './../../components/Cards/ScheduleCard';

import { useRoute } from '@react-navigation/native';
import TopNavigationHeader from './../../components/Header/TopNavigationHeader';

const instructor = {
  id: '1',
  name: 'Prof. jessica',
  title: 'CHEMISTRY PROFESSOR',
  students: '120+',
  experience: '7+ Yrs',
  description:
    'Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.',
  image: require('../../assets/Images/ProfileImages/InstructorImage.png'),
};

const reviews = [
  {
    id: 'r1',
    name: 'John Doe',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../../assets/Images/ProfileImages/InstructorImage.png'),
  },
  {
    id: 'r2',
    name: 'Jane Smith',
    comment: 'Great instructor! Helped me a lot with chemistry.',
    image: require('../../assets/Images/ProfileImages/InstructorImage.png'),
  },
  {
    id: 'r3',
    name: 'Emily Johnson',
    comment: 'Very clear and professional.',
    image: require('../../assets/Images/ProfileImages/InstructorImage.png'),
  },
];

const dummyData = [
  {
    id: '1',
    subject: 'Java',
    title: 'Lecture on Molecules',
    professor: 'Prof. John Doe',
    status: 'LIVE',
    time: '',
    buttonLabel: 'Join Now',
  },
  {
    id: '2',
    subject: 'HTML',
    title: 'Lecture on Molecules',
    professor: 'Prof. John Doe',
    status: 'UPCOMING',
    time: '16 June  |  10:30 AM - 1:30 PM',
    buttonLabel: 'Register',
  },
  {
    id: '3',
    subject: 'React Native',
    title: 'Lecture on Molecules',
    professor: 'Prof. John Doe',
    status: 'UPCOMING',
    time: '16 June  |  10:30 AM - 1:30 PM',
    buttonLabel: 'Register',
  },
];

const InstructorDetails = ({ navigation }) => {
  const route = useRoute();
  const { instructor, type } = route.params;

  const { t } = useTranslation();
  const [selectedView, setSelectedView] = useState('about');
  const tabs = ['about', 'sessions', 'review'];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigationHeader title={t('instructordetails.title')} />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: instructor.profileImage }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{instructor.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
            }}
          >
            <Text style={styles.title}>{instructor.qualifications[0]}</Text>
            <Image
              source={ProfileVerifiedTick}
              style={styles.profileImageVerify}
            />
          </View>

          {(type === 'online' ||
            type === 'homework' ||
            type === 'exam-feedback' ||
            type === 'quiz') && (
            <View style={styles.sessionRow2}>
              <View style={{ flex: 1, marginRight: 6 }}>
                <TouchableOpacity
                  style={styles.groupSession}
                  onPress={() =>
                    navigation.navigate('ScheduleScreen', {
                      teacherId: instructor?._id,
                      type: type,
                      mode: 'group',
                    })
                  }
                >
                  <Text style={styles.groupSessionText}>
                    {t('group_session')}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1, marginLeft: 6 }}>
                <TouchableOpacity
                  style={styles.privateSession}
                  onPress={() =>
                    navigation.navigate('ScheduleScreen', {
                      teacherId: instructor?._id,
                      type: type,
                      mode: 'single',
                    })
                  }
                >
                  <Text style={styles.privateSessionText}>
                    {t('one_to_one_session')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {(type === 'offline' || type === 'homeTuition') && (
            <View style={styles.sessionRow2}>
              <TouchableOpacity
                style={styles.privateSession}
                onPress={() =>
                  navigation.navigate('ScheduleScreen', {
                    type: type,
                    mode: 'offline',
                  })
                }
              >
                <Text style={styles.privateSessionText}>
                  {t('Select slot')}
                </Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.toggleContainer}>
            {tabs.map(tab => (
              <TouchableOpacity
                key={tab}
                onPress={() => setSelectedView(tab)}
                style={[
                  styles.toggleButton,
                  selectedView === tab && styles.toggleActive,
                ]}
              >
                <Text
                  style={[
                    styles.toggleText,
                    selectedView === tab && styles.toggleTextActive,
                  ]}
                >
                  {t(tab)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {selectedView === 'review' ? (
          <FlatList
            data={reviews}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <InstructorReviewCard review={item} />}
            scrollEnabled={false}
            contentContainerStyle={{ paddingBottom: 40 }}
          />
        ) : selectedView === 'sessions' ? (
          <FlatList
            data={dummyData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ScheduleCard item={item} />}
            contentContainerStyle={{}}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.descriptionContainer}>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>8+</Text>
                <Text style={styles.statLabel}>Years of Exp</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>
                  {instructor?.studentsMentored}+
                </Text>
                <Text style={styles.statLabel}>Students mentored</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>4.5</Text>
                <Text style={styles.statLabel}>Rated</Text>
              </View>
            </View>

            <Text style={styles.descriptionText}>{instructor?.bio}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default InstructorDetails;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.background,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
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
  profileContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 97,
    height: 97,
    borderRadius: 60,
    marginBottom: 14,
  },
  profileImageVerify: {
    width: 18,
    height: 18,
    borderRadius: 0,
  },
  name: {
    fontSize: 18,
    fontFamily: fonts.Medium,
    color: '#0B0B0B',
  },
  title: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: '#919191',
    marginTop: 4,
    textTransform: 'uppercase',
  },

  descriptionContainer: {
    paddingHorizontal: 16,
    marginTop: 12,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },

  statItem: {
    alignItems: 'center',
  },

  statValue: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    color: '#222B45',
  },

  statLabel: {
    fontSize: 12,
    color: '#6B779A',
    fontFamily: fonts.Regular,

    marginTop: 2,
  },

  descriptionText: {
    fontSize: 12,
    color: '#000',
    textAlign: 'start',
    fontFamily: fonts.Regular,
    marginBottom: 12,
    lineHeight: 18,
  },

  sectionTitle: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: '#101828',
    marginBottom: 12,
  },

  sessionRow2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
    width: '100%',
  },

  groupSession: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#538CD9',
    paddingHorizontal: 50,
    paddingVertical: 10,
  },

  groupSessionText: {
    fontFamily: fonts.Medium,
    fontSize: 12,
    color: '#528BD9',
  },

  groupSession: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#538CD9',
    paddingVertical: 10,
    alignItems: 'center',
  },

  privateSession: {
    borderRadius: 30,
    backgroundColor: '#538CD9',
    paddingVertical: 10,
    paddingHorizontal: 50,
    alignItems: 'center',
  },

  privateSessionText: {
    fontFamily: fonts.Medium,
    fontSize: 12,
    color: 'white',
  },

  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 14,
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
});
