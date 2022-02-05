import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, About, Email, Adddata, ShareScreen, Onboarding} from '../screens';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NavStack = createNativeStackNavigator();

const Navigation = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch == true) {
    return (
      <PaperProvider>
        <NavigationContainer>
          <NavStack.Navigator initialRouteName="Onboarding">
            <NavStack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{headerShown: false}}
            />
            <NavStack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
          </NavStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  } else {
    return (
      <PaperProvider>
        <NavigationContainer>
          <NavStack.Navigator initialRouteName="Home">
            <NavStack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{headerShown: false}}
            />
            <NavStack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <NavStack.Screen
              name="Email"
              component={Email}
              options={{headerShown: true}}
            />
            <NavStack.Screen
              name="About"
              component={About}
              options={{headerShown: true}}
            />
            <NavStack.Screen
              name="Adddata"
              component={Adddata}
              options={{headerShown: true}}
            />
            <NavStack.Screen
              name="ShareScreen"
              component={ShareScreen}
              options={{headerShown: true}}
            />
          </NavStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  }
};

export default () => (
  <PaperProvider>
    <Navigation />
  </PaperProvider>
);
