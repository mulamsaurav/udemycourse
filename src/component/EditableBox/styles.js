import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: colors.white,
    marginVertical: 12,
    borderRadius: 4,
  },
  label: {
    color: colors.grey,
    fontSize: 12,
    // marginBottom: 4,
  },
  input: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 12,
  },
});
