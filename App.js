import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator/AppNavigator';
// import AuthContext from './src/auth/context';

import { StyleSheet, View, LogBox, Alert } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

LogBox.ignoreAllLogs(true);

if (!__DEV__) {
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
  console.info = () => {};
  console.debug = () => {};
}

function App() {
  return (
    // <AuthContext.Provider value={{ user, setUser }}>
    <SafeAreaProvider>
      <NavigationContainer>
        <View style={styles.appView}>
          <>{<AppNavigator />}</>
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
    // </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  appView: {
    flex: 1,
  },
});

export default App;
