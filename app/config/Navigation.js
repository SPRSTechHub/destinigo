import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, About, Email, Adddata, ShareScreen} from '../screens';

const NavStack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavStack.Navigator>
        <NavStack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <NavStack.Screen
          name="Email"
          component={Email}
          options={{headerShown: false}}
        />
        <NavStack.Screen
          name="About"
          component={About}
          options={{headerShown: false}}
        />
        <NavStack.Screen
          name="Adddata"
          component={Adddata}
          options={{headerShown: false}}
        />
        <NavStack.Screen
          name="ShareScreen"
          component={ShareScreen}
          options={{headerShown: true}}
        />
      </NavStack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
