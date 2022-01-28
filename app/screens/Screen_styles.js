import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const Screenstyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    opacity: 0.2,
    alignItems: 'center',
  },
  m_button: {
    backgroundColor: '#F44336',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  screenWidth: {
    width: Dimensions.get('window').width,
  },
  mylottie: {
    alignItems: 'center',
    width: 180,
    height: 180,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spcard: {
    position: 'relative',
    borderRadius: 8,
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#F11414',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default Screenstyle;
