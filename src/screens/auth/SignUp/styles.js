import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors.js';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeText: {
    color: colors.blue,
    marginHorizontal: 13,
  },
  agreeTextBold: {
    fontWeight: 'bold',
  },
  inputText: {
    color: colors.black,
  },
  button: {
    marginVertical: 20,
  },
  footerText: {
    color: colors.blue,
    marginVertical: 50,
    paddingBottom: 56,
    textAlign: 'center',
  },
  footerLink: {
    fontWeight: 'bold',
  },
});
