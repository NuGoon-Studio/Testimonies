/************* Imports **************/
import React from 'react';
import { Provider } from 'react-redux';

import appStore from './state/AppStore';
import RootStackNavigator from './navigation/root/RootStackNavigator';

/************* RETURN **************/
const App = () => {
  return (
    <Provider store = {appStore}>
      <RootStackNavigator />
    </Provider>
  );
};

export default App;