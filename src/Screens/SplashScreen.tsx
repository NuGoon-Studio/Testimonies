/************* Imports **************/
import React from 'react';
import {View, Text} from 'react-native';

import FontAwesome6IconButton from 'react-native-vector-icons/FontAwesome6';

// CONFIG: React Navigation Hook example
//import { useNavigation } from '@react-navigation/native';
import type { RootStackNavigation } from '../App';

// CONFIG: React Navigation Prop passing
interface SplashScreenProps {
  navigation: RootStackNavigation;
}

/************* RETURN **************/
// CONFIG: React Navigation Prop passing
const SplashScreen : React.FC<SplashScreenProps> = ({ navigation }) => {

  // CONFIG: React Navigation Hook example
  //const { navigate } = useNavigation<StackNavigation>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Splash!</Text>
      <FontAwesome6IconButton 
        name = 'house' 
        solid
        onPress = {() => navigation.replace('Tabs')} 
      >
        GO HOME...
      </FontAwesome6IconButton>
    </View>
  );
};

export default SplashScreen;