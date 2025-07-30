import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import TopNavigationHeader from './../../components/Header/TopNavigationHeader';
import colors from './../../config/colors';
import { fonts } from './../../config/fonts';
import { useTranslation } from 'react-i18next';

const notificationsData = {
  Today: [
    {
      id: '1',
      title: 'Science Homework Recieved',
      message: 'Your worksheet was successfully submitted. Great job!',
      time: '2 hours Ago',
      icon: 'atom',
    },
    {
      id: '2',
      title: 'Chemistry Assignment Pending',
      message: 'Reminder: Your essay is due tomorrow by 8:00 PM.',
      time: '2 hours Ago',
      icon: 'flask',
    },
  ],
  Monday: [
    {
      id: '3',
      title: 'Physics Quiz Reminder',
      message: 'Don’t forget the quiz at 3 PM!',
      time: '1 day Ago',
      icon: 'atom',
    },
  ],
};

const getIcon = type => {
  if (type === 'atom') return '🔬';
  if (type === 'flask') return '⚗️';
  return '🔔';
};

const Notifications = () => {
  const { t } = useTranslation();

  const renderNotificationItem = (item, isLast) => (
    <View key={item.id} style={[styles.card, !isLast && styles.withBorder]}>
      <View style={styles.leftSection}>
        <View style={styles.iconArea}>
          <Text style={styles.iconText}>{getIcon(item.icon)}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.message}>{item.message}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginBottom: 12 }}>
        <TopNavigationHeader title={t('Notifications')} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16 }}
      >
        {Object.entries(notificationsData).map(([day, items]) => (
          <View key={day} style={{ marginBottom: 24 }}>
            <View style={styles.cardWrapper}>
              <Text style={styles.sectionTitle}>{day}</Text>
              {items.map((item, index) =>
                renderNotificationItem(item, index === items.length - 1),
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: fonts.Medium,
    color: '#171725',
    marginBottom: 5,
  },
  cardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 6,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 12,
  },
  withBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  leftSection: {
    flexDirection: 'row',
    flex: 1,
  },
  iconArea: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  iconText: {
    fontSize: 18,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: '#171725',
  },
  message: {
    fontSize: 10,
    color: '#9A9BB1',
    marginTop: 2,
    fontFamily: fonts.Regular,
  },
  time: {
    fontSize: 10,
    color: '#66707A',
    fontFamily: fonts.Medium,
    alignSelf: 'flex-end',
  },
});
