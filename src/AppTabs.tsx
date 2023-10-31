/************* Imports **************/
import React from 'react';

// CONFIG: React Navigation botom tab setup
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './Tabs/HomeTab';
import SettingsTab from './Tabs/SettingsTab';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

/************* Setup **************/
//CONFIG: React Navigation Bottom Tabs setup
const Tab = createBottomTabNavigator();

/************* RETURN **************/
const AppTabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName : string = '';

        if (route.name === 'Home')
          iconName = focused ? 'house' : 'house';
        else if (route.name === 'Settings')
          iconName = focused ? 'gears' : 'gears';
        else
          iconName = focused ? 'circle-xmark' : 'circle-xmark';

        // You can return any component that you like here!
        return <FontAwesome6 name={iconName} size={size} color={color} solid/>;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Settings" component={SettingsTab} />
    </Tab.Navigator>
  )
};

export default AppTabs;