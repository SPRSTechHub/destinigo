import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

const About = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>I am About Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Home_screen')}
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
