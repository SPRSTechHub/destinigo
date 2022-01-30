import React from 'react';
import {
  StyleSheet,
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Divider, Layout, Text, ViewPager, Card} from '@ui-kitten/components';
import {AdMobBanner, AdMobInterstitial} from 'react-native-admob';
const image = {
  uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d9018ee1-5bd6-4425-ad23-3c48c5f34db4/dez2pyy-b5407ddd-b19d-47a9-a8a7-7f1f45d1d790.png/v1/fill/w_900,h_602,q_80,strp/elsa__lingerie_version__by_yunakairi_cosplay_dez2pyy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAyIiwicGF0aCI6IlwvZlwvZDkwMThlZTEtNWJkNi00NDI1LWFkMjMtM2M0OGM1ZjM0ZGI0XC9kZXoycHl5LWI1NDA3ZGRkLWIxOWQtNDdhOS1hOGE3LTdmMWY0NWQxZDc5MC5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.-ifhVpABrguAT8dLmb5J5euVuovpyGr-SZ70Pe8d1Tw',
};

// Display an interstitial
AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());

const Home_screen = ({navigation}) => {
  const showAlert = () => {
    Alert.alert('You need to...');
  };
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <ScrollView style={{height: Dimensions.get('window').height}}>
      <SafeAreaView>
        <Layout style={[styles.container, {flexDirection: 'column'}]}>
          <Layout
            style={{
              flex: 1,
              backgroundColor: 'blue',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.text} category="h1">
              DESTINY GO
            </Text>
          </Layout>
          <Layout style={{flex: 4}}>
            <Layout style={{flex: 1, flexDirection: 'row'}}>
              <Layout style={styles.layoutBox}>
                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                  <Image
                    resizeMode="contain"
                    source={require('../assets/images/call.png')}
                    style={styles.image}></Image>
                </TouchableOpacity>
              </Layout>
              <Layout style={styles.layoutBox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Adddata')}>
                  <Image
                    resizeMode="contain"
                    source={require('../assets/images/add.png')}
                    style={styles.image}></Image>
                </TouchableOpacity>
              </Layout>
            </Layout>
            <Layout style={{flex: 1, flexDirection: 'row'}}>
              <Layout style={styles.layoutBox}>
                <TouchableOpacity onPress={() => navigation.navigate('Email')}>
                  <Image
                    resizeMode="contain"
                    source={require('../assets/images/mail.png')}
                    style={styles.image}></Image>
                </TouchableOpacity>
              </Layout>
              <Layout style={styles.layoutBox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ShareScreen')}>
                  <Image
                    resizeMode="contain"
                    source={require('../assets/images/wp.png')}
                    style={styles.image}></Image>
                </TouchableOpacity>
              </Layout>
            </Layout>
          </Layout>
          <Layout style={{flex: 2}}>
            <ViewPager
              selectedIndex={selectedIndex}
              onSelect={index => setSelectedIndex(index)}>
              <Layout style={styles.tab} level="2">
                <Card>
                  <ImageBackground
                    source={require('../assets/images/1.png')}
                    resizeMode="cover"
                    style={styles.image_card}>
                    <Text style={styles.text}>Inside</Text>
                  </ImageBackground>
                </Card>
              </Layout>
              <Layout style={styles.tab} level="2">
                <Card>
                  <ImageBackground
                    source={require('../assets/images/2.png')}
                    resizeMode="cover"
                    style={styles.image_card}>
                    <Text style={styles.text}>Inside</Text>
                  </ImageBackground>
                </Card>
              </Layout>
              <Layout style={styles.tab} level="2">
                <Card>
                  <ImageBackground
                    source={require('../assets/images/3.png')}
                    resizeMode="cover"
                    style={styles.image_card}>
                    <Text style={styles.text}>Inside</Text>
                  </ImageBackground>
                </Card>
              </Layout>
            </ViewPager>
          </Layout>
          <Layout style={{flex: 1}}>
            <AdMobBanner
              adSize="fullBanner"
              adUnitID="ca-app-pub-3940256099942544/6300978111" //ca-app-pub-1070500299860646/6025848140
              testDevices={[AdMobBanner.simulatorId]}
              onAdFailedToLoad={error => console.error(error)}
            />
          </Layout>
        </Layout>
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
    width: Dimensions.get('window').width,
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
  tab: {
    height: 192,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home_screen;
