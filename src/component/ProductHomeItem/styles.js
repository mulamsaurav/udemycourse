import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../utils/colors';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginBottom: height * 0.023,
  },
  image: {
    width: width * 0.4,
    height: 250,
    borderRadius: 10,
    backgroundColor: colors.lightGrey,
  },
  title: {
    color: colors.textGray,
  },
  price: {
    color: colors.black,
  },
});
