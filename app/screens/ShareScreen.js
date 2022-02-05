import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {TextInput, Card, Button, Title, IconButton} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-share';
import {AdMobBanner, AdMobInterstitial} from 'react-native-admob';

class ShareScreen extends Component {
  showInterstitial() {
    AdMobInterstitial.setAdUnitID('ca-app-pub-1070500299860646/6759822227'); //ca-app-pub-3940256099942544/1033173712
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.showAd().catch(error => console.warn(error));
  }

  constructor(props) {
    super(props);
    this.state = {mobileno: ''};
  }

  funApi = () => {
    var mobileno = this.state.mobileno;
    if (mobileno.length < 10) {
      alert('Please enter Mobile Number!');
    } else {
      // Run post method here //
      var posturi = 'https://play.liveipl.online/play/gen_link/';

      var param = {mobile: mobileno};

      var datastring = [];
      datastring = Object.keys(param)
        .map(key => key + '=' + param[key])
        .join('&');
      datastring = datastring;

      var XHR = new XMLHttpRequest();
      XHR.open('POST', posturi, true);
      XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      XHR.addEventListener('load', function (event) {
        var response = JSON.parse(this.responseText);
        //alert(response.msg);

        if (response.errorcode == 100) {
          let shareImage = {
            title: 'caption', //string
            message: response.msg, //string
            url: 'https://play.liveipl.online/?uri=' + response.linky,
          };
          Share.open(shareImage).catch(err => console.log(err));
          showInterstitial();
        } else {
          alert(response.msg);
        }
      });
      XHR.addEventListener('error', function (event) {
        alert('Oops! Something went wrong.');
      });
      XHR.send(datastring);
    }
  };
  render() {
    return (
      <ScrollView style={{height: Dimensions.get('window').height}}>
        <SafeAreaView>
          <View style={[styles.container, {flexDirection: 'column'}]}>
            <View
              style={{
                flex: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Animatable.View animation="zoomInUp">
                <LottieView
                  style={styles.mylottie}
                  source={require('../assets/images/anim_share.json')}
                  autoPlay
                  loop
                />
              </Animatable.View>
            </View>
            <View style={{flex: 3}}>
              <Card style={{padding: 2, margin: 6}}>
                <Card.Content>
                  <Title>Enter Mobile Number Here</Title>
                  <View
                    style={{
                      height: 60,
                      borderRadius: 30,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="md-phone-portrait-outline"
                      size={30}
                      color="#fff"
                    />
                    <TextInput
                      placeholder="999999"
                      autocapitalize="none"
                      keyboardType="number-pad"
                      maxLength={10}
                      style={styles.textInput}
                      onChangeText={text =>
                        this.setState({mobileno: text})
                      }></TextInput>
                    <Icon name="bulb-outline" size={30} color="#fff" />
                  </View>
                </Card.Content>
                <Card.Actions
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Button>Cancel</Button>
                  <Button
                    onPress={this.funApi}
                    title="Press Me"
                    color="#841584">
                    Press Me
                  </Button>
                </Card.Actions>
              </Card>
            </View>
            <View style={{flex: 3}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  padding: 2,
                }}>
                <IconButton
                  style={{backgroundColor: 'red'}}
                  icon="book"
                  color={'#fff'}
                  size={48}
                  onPress={() => console.log('Pressed')}
                />
                <IconButton
                  style={{backgroundColor: 'red'}}
                  icon="account-child"
                  color={'#fff'}
                  size={48}
                  onPress={() => console.log('Pressed')}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  padding: 2,
                }}>
                <IconButton
                  style={{backgroundColor: 'red'}}
                  icon="briefcase-outline"
                  color={'#fff'}
                  size={48}
                  onPress={() => console.log('Pressed')}
                />
                <IconButton
                  style={{backgroundColor: 'red'}}
                  icon="cog-outline"
                  color={'#fff'}
                  size={48}
                  onPress={() => console.log('Pressed')}
                />
              </View>
            </View>
            <View style={{flex: 2}}>
              <AdMobBanner
                adSize="fullBanner"
                adUnitID="ca-app-pub-1070500299860646/6025848140" //ca-app-pub-1070500299860646/6025848140
                testDevices={[AdMobBanner.simulatorId]}
                onAdFailedToLoad={error => console.error(error)}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default ShareScreen;

const styles = StyleSheet.create({
  mylottie: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  textInput: {
    top: 1,
    bottom: 15,
    fontSize: 20,
    height: 42,
    margin: 2,
    padding: 10,
    width: '80%',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  materialHelperTextBox: {
    height: 120,
    position: 'relative',
    left: 0,
    top: 0,
    right: 0,
    padding: 4,
    borderRadius: 7,
  },
  container: {
    height: Dimensions.get('window').height,
    flex: 1,
    backgroundColor: 'black',
    padding: 0,
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
    backgroundColor: 'black',
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
});
