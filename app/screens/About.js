import React from 'react';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {SafeAreaView} from 'react-native';
import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components';

const About = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={navigation}>OPEN DETAILS</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default About;
