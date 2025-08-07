import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fonts } from './../../config/fonts';
import colors from './../../config/colors';
import TopNavigationHeader from './../../components/Header/TopNavigationHeader';
import { useTranslation } from 'react-i18next';
import ScheduleCard from './../../components/Cards/ScheduleCard';
import Button from './../../components/Buttons/Button';

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

const LearningPackagesScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationHeader title={t('Packages')} />
      <View style={{ paddingHorizontal: 16, marginTop: 15 }}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg',
          }}
          style={styles.bannerImage}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.planName}>Plan Name</Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>QAR 100</Text>
          <Text style={styles.discount}>35% Off</Text>
        </View>
        <Text style={styles.perSession}>Per 10 sessions</Text>

        <TouchableOpacity style={styles.professorCard}>
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/women/44.jpg',
            }}
            style={styles.professorImage}
          />
          <View style={styles.professorInfo}>
            <Text style={styles.professorName}>Prof. Mary Doe</Text>
            <Text style={styles.professorSubject}>Chemistry Professor</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.black} />
        </TouchableOpacity>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing
          fringilla nulla diam lorem non mauris. Ultrices aliquet.
        </Text>

        <Text style={styles.sectionTitle}>{t('sessions')}</Text>

        <FlatList
          data={dummyData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ScheduleCard item={item} />}
          contentContainerStyle={{}}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <TouchableOpacity style={styles.footerButton}>
        <Button title={t('add_to_library')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LearningPackagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#F8F8F8',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.Medium,
    color: colors.black,
  },
  bannerImage: {
    width: '100%',
    height: 146,
    resizeMode: 'cover',
    borderRadius: 5,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    flex: 1,
  },
  planName: {
    fontSize: 18,
    fontFamily: fonts.Medium,
    color: '#0B0B0B',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: 20,
    fontFamily: fonts.Regular,
    color: '#3D3D3D',
  },
  discount: {
    fontSize: 10,
    fontFamily: fonts.Regular,
    color: '#0D9F1C',
    marginLeft: 5,
  },
  perSession: {
    fontSize: 10,
    color: '#3D3D3D',

    fontFamily: fonts.Regular,
  },
  professorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 16,
    elevation: 1,
    shadowColor: '#00000011',
  },
  professorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  professorInfo: {
    flex: 1,
    marginHorizontal: 12,
  },
  professorName: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: colors.black,
  },
  professorSubject: {
    fontSize: 10,
    fontFamily: fonts.Regular,
    color: '#919191',
  },
  description: {
    fontSize: 12,
    color: '#919191',
    marginVertical: 16,
    fontFamily: fonts.Regular,
    lineHeight: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: fonts.Medium,
    color: colors.black,
    marginBottom: 12,
  },
  sessionCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 1,
  },
  sessionImage: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  sessionInfo: {
    flex: 1,
  },
  sessionDate: {
    fontSize: 11,
    fontFamily: fonts.Medium,
    color: colors.primary,
    textTransform: 'uppercase',
  },
  sessionTitle: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: colors.black,
  },
  sessionTime: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: '#777',
  },
  footerButton: {
    marginHorizontal: 16,
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: fonts.Medium,
  },
});
