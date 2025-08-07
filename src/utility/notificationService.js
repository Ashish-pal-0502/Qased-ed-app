import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PushNotification from 'react-native-push-notification';
import apiClient from './../api/client';

export async function requestUserPermission(user) {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getFcmToken(user);
  }
}

const getFcmToken = async user => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');

  if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken();

      if (fcmToken) {
        // console.log(fcmToken, 'the new generated token');

        await AsyncStorage.setItem('fcmToken', fcmToken);
        if (user != null) {
          const result = await apiClient.post('/rnPushTokens/register-token', {
            userId: user._id,
            token: fcmToken,
          });
        }
      }
    } catch (error) {
      console.log(error, 'error raised!');
    }
  } else {
    const result = await apiClient.post('/rnPushTokens/register-token', {
      userId: user._id,
      token: fcmToken,
    });

    // console.log(fcmToken, 'the old token');
  }
};

export const notificationListener = async () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  messaging().onMessage(async remoteMessage => {
    // console.log('Foreground message received:', remoteMessage);

    PushNotification.cancelAllLocalNotifications();
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: remoteMessage.notification.title,
      message: remoteMessage.notification.body,
      playSound: true,
      soundName: 'default',
    });
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state',
          remoteMessage.notification,
        );
      }
    });
};
