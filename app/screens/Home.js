import React from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import {AdMobBanner} from 'react-native-admob';

const Home_screen = ({navigation}) => {
  const showAlert = () => {
    Alert.alert('You need to...');
  };
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={{height: Dimensions.get('window').height}}>
      <View style={stylesheet._mi11i}>
        <View style={stylesheet.container}>
          <View style={stylesheet.rect}>
            <View style={stylesheet.rect3}>
              <TouchableOpacity onPress={showAlert}>
                <Image
                  resizeMode="contain"
                  source={require('../assets/images/title.png')}
                  style={stylesheet.image_title}></Image>
              </TouchableOpacity>
            </View>
            <View style={stylesheet.rect4}>
              <View style={stylesheet.rect5}>
                <View style={stylesheet.rect7}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('About')}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/images/call.png')}
                      style={stylesheet.image}></Image>
                  </TouchableOpacity>
                </View>
                <View style={stylesheet.rect8}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Adddata')}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/images/add.png')}
                      style={stylesheet.image}></Image>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={stylesheet.rect6}>
                <View style={stylesheet.rect9}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Email')}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/images/mail.png')}
                      style={stylesheet.image}></Image>
                  </TouchableOpacity>
                </View>
                <View style={stylesheet.rect10}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ShareScreen')}>
                    <Image
                      resizeMode="contain"
                      source={require('../assets/images/wp.png')}
                      style={stylesheet.image}></Image>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={stylesheet.rect2}>
            <AdMobBanner
              adSize="fullBanner"
              adUnitID="ca-app-pub-1070500299860646/6025848140"
              testDevices={[AdMobBanner.simulatorId]}
              onAdFailedToLoad={error => console.error(error)}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  button: {
    opacity: 0.2,
    alignItems: 'center',
  },
  rect: {
    flex: 0.5,
  },
  rect3: {
    flex: 0.28,
    top: 3,
    bottop: 10,
  },
  rect4: {
    flex: 0.72,
    top: 60,
  },
  rect5: {
    flex: 0.5,
    flexDirection: 'row',
  },
  rect7: {
    flex: 0.5,
    alignItems: 'center',
    left: 4,
    right: 'auto',
    top: 4,
    bottom: 'auto',
  },
  rect8: {
    flex: 0.5,
    alignItems: 'center',
    left: 4,
    right: 'auto',
    top: 4,
    bottom: 'auto',
  },
  rect6: {
    top: 10,
    flex: 0.5,
    flexDirection: 'row',
  },
  rect9: {
    flex: 0.5,
    alignItems: 'center',
    left: 4,
    right: 'auto',
    top: 4,
    bottom: 'auto',
  },
  rect10: {
    flex: 0.5,
    alignItems: 'center',
    left: 4,
    right: 'auto',
    top: 4,
    bottom: 'auto',
  },
  rect2: {
    flex: 0.5,
  },
  image: {
    alignContent: 'center',
  },
  image_title: {
    position: 'relative',
    width: Dimensions.get('window').width,
    height: 98,
    alignContent: 'center',
  },
  _mi11i: {
    position: 'relative',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    borderRadius: 0,
    overflow: 'hidden',
    transform: [{translateX: 0}, {translateY: 0}, {rotate: '0deg'}],
    backgroundColor: 'rgba(0, 48, 141, 1)',
  },
});

export default Home_screen;
