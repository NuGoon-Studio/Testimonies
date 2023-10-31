/************* Imports **************/
import React from 'react';

// CONFIG: React Navigation setup wrapper
import { NavigationContainer } from '@react-navigation/native';
import AppTabs from './Screens/AppTabs';

/************* RETURN **************/
const App = () => {
  return (
    <NavigationContainer>
      <AppTabs/>
    </NavigationContainer>
  );
};

export default App;