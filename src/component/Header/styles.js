import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '600',
  },
  icons: {
    marginHorizontal: 20,
    marginVertical: 5,
    height: 24,
    width: 24,
  },
  Empty_Icon_Space: {
    height: 24,
    width: 24,
  },
});
