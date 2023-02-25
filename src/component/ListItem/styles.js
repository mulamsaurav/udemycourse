import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
    backgroundColor: colors.white,
    marginVertical: 10,
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.blue,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.grey,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
