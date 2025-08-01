import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import useAuth from './../../auth/useAuth';
import LoginViewButton from './../../components/NotLoginButton/LoginViewButton';

const chatData = [
  {
    id: '1',
    name: 'David Wayne',
    message: 'Submit the assignment today',
    time: '10:25',
    unread: 5,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s',
  },
  {
    id: '2',
    name: 'David Wayne',
    message: 'Submit the assignment today',
    time: '9:25',
    unread: 0,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s',
  },
  {
    id: '3',
    name: 'David Wayne',
    message: 'Submit the assignment today',
    time: '8:25',
    unread: 0,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s',
  },
];

const ChatScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const { user } = useAuth();

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.chatItem,
        index < chatData.length - 1 && styles.itemBorder,
      ]}
      onPress={() => navigation.navigate('MessageScreen')}
    >
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <View style={styles.metaContainer}>
        <Text style={styles.time}>{item.time}</Text>
        {item.unread > 0 ? (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unread}</Text>
          </View>
        ) : (
          <Ionicons name="checkmark-done" size={18} color="#C7C7CC" />
        )}
      </View>
    </TouchableOpacity>
  );

  if (!user) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <LoginViewButton />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconWrapper}
        >
          <Ionicons name="arrow-back" size={20} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{t('Chats')}</Text>
        <View style={styles.iconWrapper} />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons
            name="search"
            size={14}
            color="#667085"
            style={{ marginRight: 6 }}
          />
          <TextInput
            placeholder={t('instructor.searchPlaceholder')}
            placeholderTextColor="#6B7280"
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
        </View>
        {/* <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>{t('instructor.filters')}</Text>
          <Ionicons
            name="filter"
            size={15}
            color="#344054"
            style={{ marginLeft: 4 }}
          />
        </TouchableOpacity> */}
      </View>

      <View style={styles.commonCardWrapper}>
        <FlatList
          data={chatData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: '#D0D5DD',
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 8,
    flex: 1,
  },
  searchInput: {
    flex: 1,
    fontFamily: fonts.Regular,
    fontSize: 14,
    paddingVertical: 0,
    color: colors.text,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: colors.white,
    borderColor: '#D0D5DD',
    borderWidth: 1,
  },
  filterText: {
    fontSize: 12,
    color: '#344054',
    fontFamily: fonts.Medium,
  },
  commonCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginHorizontal: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginVertical: 12,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  // itemBorder: {
  //   borderBottomWidth: 1,
  //   borderColor: '#A7A8BB',
  // },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.Medium,
    color: '#2C2D3A',
  },
  message: {
    fontSize: 10,
    fontFamily: fonts.Regular,
    color: '#9A9BB1',
    marginTop: 1,
  },
  metaContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 44,
  },
  time: {
    fontSize: 12,
    color: '#686A8A',
    fontFamily: fonts.Medium,
  },
  unreadBadge: {
    backgroundColor: '#40C4FF',
    borderRadius: 4,
    minWidth: 24,
    paddingHorizontal: 2,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  unreadText: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.Bold,
  },
});
