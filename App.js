import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator/AppNavigator';
import { StyleSheet, View, LogBox, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './src/localization/i18n';
import AuthContext from './src/auth/context';
import colors from './src/config/colors';
import cache from './src/utility/cache';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/components/Modals/CustomToast';

LogBox.ignoreAllLogs(true);

if (!__DEV__) {
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
  console.info = () => {};
  console.debug = () => {};
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const restoreUser = async () => {
      const user1 = await cache.get('userDetails');
      if (user1) {
        setUser(user1);
      }
    };

    restoreUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <View style={styles.appView}>
            <>{<AppNavigator />}</>
          </View>
          <Toast config={toastConfig} />
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  appView: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default App;
