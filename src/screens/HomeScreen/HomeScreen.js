import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreenHeader from './../../components/Header/HomeScreenHeader';
import ThoughtOfDayCard from './../../components/Cards/ThoughtOfDayCard';
import AttendanceHomeScreenCard from './../../components/Cards/AttendanceHomeScreenCard';
import UserInfoHomeCard from './../../components/Cards/UserInfoHomeCard';
import HomeSchedule from './../../components/HomeSchedule/HomeSchedule';
import Assignments from './../../components/Assignments/Assignments';
import Instructors from './../../components/Instructors/Instructors';
import Modules from './../../components/Modules/Modules';
import TrainingCenters from './../../components/TrainingCenters/TrainingCenters';
import HomeBanner from './../../components/Banners/HomeBanner';
import HomeNavButtons from './../../components/HomeNavButtons/HomeNavButtons';
import { useTranslation } from 'react-i18next';
import { fonts } from './../../config/fonts';
import colors from './../../config/colors';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import useAuth from './../../auth/useAuth';

const HomeScreen = () => {
  const dummyData = [{ id: '1' }];
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreenHeader />
      <FlatList
        data={dummyData}
        keyExtractor={item => item.id}
        ListFooterComponent={
          <View>
            <ThoughtOfDayCard />
            {user.type === 'Parent' && (
              <>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={() => navigation.navigate('RegisterStudent')}
                >
                  <Text style={styles.loginText}>{t('add_your_children')}</Text>
                  <Feather name="chevron-right" size={18} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={() => navigation.navigate('MyChildrenScreen')}
                >
                  <Text style={styles.loginText}>
                    {t('my_enrolled_childs')}
                  </Text>
                  <Feather name="chevron-right" size={18} color="#000" />
                </TouchableOpacity>
              </>
            )}
            <HomeBanner />
            <UserInfoHomeCard />
            <AttendanceHomeScreenCard />
            <HomeNavButtons />
            <HomeSchedule />
            <Assignments />
            <Instructors />
            <Modules />
            <TrainingCenters />
          </View>
        }
        renderItem={null}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loginButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 12,
    height: 62,
  },
  loginText: {
    fontSize: 16,
    fontFamily: fonts.Medium,
    color: colors.black,
  },
});
