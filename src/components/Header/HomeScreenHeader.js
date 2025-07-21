import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import NotificationIcon from '../../assets/Images/Icons/Notification.png';

const HomeScreenHeader = () => {
  return (
    <View style={styles.main}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/128/3845/3845897.png',
        }}
        style={styles.logo}
      />

      <Text style={styles.welcomeText}>Welcome, User!!</Text>

      <Image source={NotificationIcon} style={styles.notificationIcon} />
    </View>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
});
