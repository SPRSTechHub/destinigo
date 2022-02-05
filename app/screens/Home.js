import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import {AdMobBanner, AdMobInterstitial} from 'react-native-admob';
import {
  TextInput,
  Card,
  Button,
  Title,
  IconButton,
  Headline,
} from 'react-native-paper';

LogBox.ignoreAllLogs(); //Ignore all log notifications

const Home_screen = ({navigation}) => {
  const showAlert = () => {
    Alert.alert('You need to...');
  };
  return (
    <ScrollView style={{height: Dimensions.get('window').height}}>
      <SafeAreaView>
        <View style={[styles.container, {flexDirection: 'column'}]}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'blue',

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.text} category="h1">
              <Headline>D.S.T.N.I.G.O</Headline>
            </Text>
          </View>
          <View style={{flex: 4}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.layoutBox}>
                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                  <Image
                    resizeMode="contain"
                    source={require('../assets/images/call.png')}
                    style={styles.image}></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.layoutBox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Adddata')}>
                  <Image
                    resizeMode="contain"
                    source={require('../assets/images/add.png')}
                    style={styles.image}></Image>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.layoutBox}>
                <TouchableOpacity onPress={() => navigation.navigate('Email')}>
                  <Image
                    resizeMode="contain"
                    source={require('../assets/images/mail.png')}
                    style={styles.image}></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.layoutBox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ShareScreen')}>
                  <Image
                    resizeMode="contain"
                    source={require('../assets/images/wp.png')}
                    style={styles.image}></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{flex: 2, padding: 6}}>
            <Card>
              <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            </Card>
          </View>
          <View style={{flex: 1}}>
            <AdMobBanner
              style={{width: 320}}
              adSize="fullBanner"
              adUnitID="ca-app-pub-1070500299860646/6025848140" //ca-app-pub-3940256099942544/6300978111
              testDevices={[AdMobBanner.simulatorId]}
              onAdFailedToLoad={error => console.error(error)}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    margin: 2,
  },
  image_card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  layoutBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {alignContent: 'center'},
  container: {
    height: Dimensions.get('window').height,
    flex: 1,
    padding: 0,
  },
  layout_top: {
    flexDirection: 'row',
    //backgroundColor: 'rgba(51, 102, 255, 0.08)',
  },
  layout_row: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    //    backgroundColor: 'rgba(51, 102, 255, 0.09)',
  },
  layout_bottom: {
    flex: 1,
    backgroundColor: 'white',
  },
  tab: {
    height: 192,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home_screen;
