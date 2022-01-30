import React from 'react';
import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, About, Email, Adddata, ShareScreen} from '../screens';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

const {Navigator, Screen} = createStackNavigator();
// headerShown="false"
const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} options={{headerShown: false}} />
        <Screen name="Email" component={Email} />
        <Screen name="About" component={About} />
        <Screen name="Adddata" component={Adddata} />
        <Screen name="ShareScreen" component={ShareScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <Navigation />
    </ApplicationProvider>
  </>
);
