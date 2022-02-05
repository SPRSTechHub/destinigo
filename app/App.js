import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './config/Navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Navigation />;
};

export default App;
