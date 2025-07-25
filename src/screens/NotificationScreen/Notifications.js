import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import TopNavigationHeader from './../../components/Header/TopNavigationHeader';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import { useTranslation } from 'react-i18next';

const notificationsData = [
  {
    id: '1',
    title: 'Maths Homework Received',
    message: 'Your worksheet was successfully submitted. Great job!',
    time: '23 min ago',
    icon: 'atom',
  },
  {
    id: '2',
    title: 'HMTL Assignment Pending',
    message: 'Reminder: Your essay is due tomorrow by 8:00 PM.',
    time: '23 hour ago',
    icon: 'flask',
  },
];

const Notifications = () => {
  const { t } = useTranslation();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.iconArea}>
        <Text style={styles.iconText}>
          {item.icon === 'atom' ? '🔬' : '⚗️'}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 12 }}>
        <TopNavigationHeader title={t('notifications')} />
      </View>

      <FlatList
        data={notificationsData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingVertical: 22,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },

  iconArea: {
    width: 32,
    height: 32,
    borderRadius: 16,
    // backgroundColor: '#EFF4FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 18,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.Medium,
    fontSize: 12,
    color: '#2C2D3A',
  },
  message: {
    fontSize: 10,
    color: '#9A9BB1',
    marginTop: 2,
    fontFamily: fonts.Regular,
  },
  time: {
    fontSize: 11,
    color: '#686A8A',
    marginLeft: 8,
    alignSelf: 'flex-start',
    fontFamily: fonts.Medium,
  },
});
