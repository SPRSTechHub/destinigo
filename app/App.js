import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Onboarding} from './screens';

import Navigation from './config/Navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Navigation />;
};

export default App;
