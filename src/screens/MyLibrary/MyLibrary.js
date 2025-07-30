import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import { useTranslation } from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyLibraryCard from './../../components/Cards/MyLibraryCard';
import Button from './../../components/Buttons/Button';

const MyLibrary = ({ navigation }) => {
  const { t } = useTranslation();
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconWrapper}
        >
          <Ionicons name="arrow-back" size={20} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{t('My_Library')}</Text>
        <View style={styles.iconWrapper} />
      </View>

      <View style={styles.mainContent}>
        <FlatList
          data={dummyData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <MyLibraryCard item={item} />}
          contentContainerStyle={{
            gap: 12,
            paddingHorizontal: 10,
            paddingBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.bottomButton}>
          <Button title={t('proceed_to_book')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyLibrary;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 14,
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
  bottomButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 60,
  },

  bottomButton: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
});
