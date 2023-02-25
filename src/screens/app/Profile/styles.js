import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  topContainer: {
    padding: 21,
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: 10,
  },
  email: {
    fontSize: 14,
    fontWeight: '300',
    color: colors.grey,
    marginBottom: 15,
  },
  button: {
    width: '80%',
    alignSelf: 'center',
    marginBottom: 15,
  },
});
