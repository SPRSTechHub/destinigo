import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#0062CE',

  black: '#000000',
  white: '#fff',
  background: '#F6FAFF',
};

export const SIZES = {
  base: 10,
  width,
  height,
};

const theme = {COLORS, SIZES};
export default theme;
