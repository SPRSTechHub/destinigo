import React, {Component, useState} from 'react';
import {StyleSheet, View, StatusBar, Button, TextInput} from 'react-native';
import Screenstyle from './Screen_styles';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-share';

class ShareScreen extends Component {
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
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.rect3}>
          <View style={styles.rect4}>
            <Animatable.View animation="zoomInUp">
              <LottieView
                style={Screenstyle.mylottie}
                source={require('../assets/images/anim_share.json')}
                autoPlay
                loop
              />
            </Animatable.View>
          </View>
          <View style={[Screenstyle.spcard, styles.rect5]}>
            <View
              style={[
                Screenstyle.spcard,
                Screenstyle.shadowProp,
                {width: '85%', alignItems: 'stretch', marginBottom: 10},
              ]}>
              <View
                style={{
                  height: 60,
                  borderRadius: 30,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon name="md-phone-portrait-outline" size={30} color="#fff" />
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

              <View style={[Screenstyle.fixToText, {top: 35}]}>
                <Button title="Reset" />
                <Button
                  onPress={this.funApi}
                  title="Press Me"
                  color="#841584"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
  },
  rect3: {
    padding: 0,
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  rect4: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  rect5: {
    flex: 1,
    margin: 6,
    alignItems: 'center',
    alignSelf: 'center',
  },
  rect2: {
    flex: 0.8,
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
});

export default ShareScreen;
