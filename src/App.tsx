/************* Imports **************/
import React from 'react';
import {View, Text} from 'react-native';

// CONFIG: React Navigation setup wrapper
import { NavigationContainer } from '@react-navigation/native';
import AppTabs from './Tabs/AppTabs';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


/************* Setup **************/
// NOTE: Icon example
const github = <FontAwesome6 name = {'git'} brand />;
const comments = <FontAwesome6 name = {'comments'} solid />;

/************* RETURN **************/
const App = () => {
  return (
    <NavigationContainer>
      <AppTabs/>
    </NavigationContainer>
  );
};

export default App;