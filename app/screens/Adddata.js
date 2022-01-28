import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Adddata = ({navigation}) => {
  return (
    <View>
      <Text>Add Data</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Adddata;

const styles = StyleSheet.create({});
