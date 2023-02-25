import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: colors.lightGrey,
    padding: 16,
    borderRadius: 8,
    marginTop: 15,
  },
  image: {
    width: 35,
    height: 35,
  },
  title: {
    color: colors.black,
    marginBottom: 25,
  },
});
