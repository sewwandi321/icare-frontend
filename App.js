import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import AppNavigator from './src/AppNavigator'
import { persister, store } from './src/store'
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import {DrawerContent} from './src/screens/DrawContent';
import AnalysisScreen from './src/screens/AnalysisScreen';
import ProfileScreen from './src/screens/ProfileScreen';


const App = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require("./src/assets/fonts/Poppins-Bold.ttf"),
    'Poppins-Regular': require("./src/assets/fonts/Poppins-Regular.ttf"),
  });
  const Drawer = createDrawerNavigator();
  return (
    <PersistGate loading={null} persistor={persister}>
      <Provider {...{ store }}>
        <StatusBar translucent={true} />
        {
          fontsLoaded &&
          <AppNavigator />
        }
      </Provider>
    </PersistGate>
  );
}

export default App;
