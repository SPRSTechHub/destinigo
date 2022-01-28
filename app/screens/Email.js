import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Email = ({navigation}) => {
  return (
    <View>
      <Text>Email</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Email;

const styles = StyleSheet.create({});
