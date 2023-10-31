/************* Imports **************/
import React from 'react';
import {View, Text} from 'react-native';

// CONFIG: React Navigation botom tab setup
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

/************* Setup **************/
//CONFIG: React Navigation Bottom Tabs setup
const Tab = createBottomTabNavigator();

const HomeButton = <FontAwesome6 name = {'house'} solid />;
const SettingsButton = <FontAwesome6 name = {'gears'} solid />;

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
};

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
};

/************* RETURN **************/
const AppTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default AppTabs;