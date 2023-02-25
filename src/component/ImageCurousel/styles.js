import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../utils/colors';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  image: {
    width: width,
    height: height * 0.45,
  },
  backIconContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2%',
    position: 'absolute',
    top: height * 0.03,
    left: width * 0.03,
    borderRadius: 8,
  },
  backIcon: {
    padding: 15,
    width: 20,
    height: 20,
  },
  list: {},
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  paginationLine: {
    height: 4,
    width: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    margin: 5,
  },
  activeLine: {
    backgroundColor: colors.black,
    width: 30,
  },
});
