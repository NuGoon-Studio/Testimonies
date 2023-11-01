/************* Imports **************/
import React from 'react';

// CONFIG: React Navigation setup wrapper
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import AppTabs from './screens/AppTabs';
import SplashScreen from './screens/SplashScreen';

/************* Setup **************/
// CONFIG: React Navigation Prop passing
type ScreenNames = [
  'Splash', 
  'Tabs'
]; // type these manually
type RootStackParamList = Record<ScreenNames[number], undefined>;
type RootStackNavigation = NativeStackNavigationProp<RootStackParamList>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

/************* RETURN **************/
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator 
        initialRouteName = 'Splash' 
        screenOptions={{
             headerShown: false
         }}
      >
        <RootStack.Screen name = 'Splash' component = {SplashScreen}/>
        <RootStack.Screen name = 'Tabs' component = {AppTabs}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
export type { ScreenNames, RootStackParamList, RootStackNavigation };