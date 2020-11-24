import * as React from 'react';
import {Text, View} from 'react-native';
import {HomeScreen} from './src/pages/home/home-page.js';
import {SettingsScreen} from './src/pages/settings/settings-page.js';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoadingScreen} from './src/pages/loading/loading.js';
import {BluetoothScreen} from './src/pages/bluetooth/bluetooth.js';
import GlobalState from './src/context/global-state';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GlobalState>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Map" component={SettingsScreen} />
          {/* <Tab.Screen name="Manevuer" component={LoadingScreen} /> */}
          {/* <Tab.Screen name="Bluetooth" component={BluetoothScreen} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </GlobalState>
  );
}
