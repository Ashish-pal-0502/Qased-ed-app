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

const sessions = [
  {
    id: '1',
    title: 'Lecture on Atoms–I',
    date: 'MONDAY, 27 JULY',
    time: '11:00 AM TO 12:00 PM',
    image:
      'https://img.icons8.com/external-flat-juicy-fish/2x/external-atom-education-flat-juicy-fish.png',
  },
  {
    id: '2',
    title: 'Lecture on Atoms–II',
    date: 'TUESDAY, 28 JULY',
    time: '11:00 AM TO 12:00 PM',
    image:
      'https://img.icons8.com/external-flat-juicy-fish/2x/external-atom-education-flat-juicy-fish.png',
  },
];

const LearningPackagesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Packages</Text>
        <View style={{ width: 22 }} /> {/* Placeholder for right icon */}
      </View>

      {/* Image Banner */}
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg',
        }}
        style={styles.bannerImage}
      />

      {/* Plan Info */}
      <View style={styles.content}>
        <Text style={styles.planName}>Plan Name</Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>QAR 100</Text>
          <Text style={styles.discount}>35% Off</Text>
        </View>
        <Text style={styles.perSession}>Per 10 sessions</Text>

        {/* Professor Card */}
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

        {/* Description */}
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing
          fringilla nulla diam lorem non mauris. Ultrices aliquet.
        </Text>

        {/* Sessions */}
        <Text style={styles.sectionTitle}>Sessions</Text>
        <FlatList
          data={sessions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.sessionCard}>
              <Image source={{ uri: item.image }} style={styles.sessionImage} />
              <View style={styles.sessionInfo}>
                <Text style={styles.sessionDate}>{item.date}</Text>
                <Text style={styles.sessionTitle}>{item.title}</Text>
                <Text style={styles.sessionTime}>{item.time}</Text>
              </View>
            </View>
          )}
          scrollEnabled={false}
        />
      </View>

      {/* Footer Button */}
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerButtonText}>Add to library</Text>
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
    height: 160,
    resizeMode: 'cover',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    flex: 1,
  },
  planName: {
    fontSize: 18,
    fontFamily: fonts.Medium,
    color: colors.black,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 6,
  },
  price: {
    fontSize: 16,
    fontFamily: fonts.Bold,
    color: colors.black,
  },
  discount: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    color: '#3DBA4A',
    marginLeft: 8,
  },
  perSession: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
    fontFamily: fonts.Regular,
  },
  professorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
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
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: '#777',
  },
  description: {
    fontSize: 13,
    color: '#444',
    marginVertical: 16,
    fontFamily: fonts.Regular,
    lineHeight: 20,
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
    marginBottom: 16,
    paddingVertical: 14,
    backgroundColor: '#1779F3',
    borderRadius: 30,
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: fonts.Medium,
  },
});
