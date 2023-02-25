import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 7,
  },
  lable: {
    marginBottom: 8,
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 14,
    height: 50,
    borderColor: colors.grey,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 15,
    // borderWidth:1,
  },
  eyeIcon: {
    marginHorizontal: 17,
    width: 24,
    height: 24,
  },
  placeholder: {
    paddingHorizontal: 16,
    // paddingVertical: 20,
    flex: 1,
    color: colors.lightGrey,
  },
  arrow: {
    marginHorizontal: 17,
    width: 24,
    height: 24,
    transform: [{rotate: '90deg'}],
  },
  modalWrapper: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    width: '80%',
  },
  headerTitle: {
    marginBottom: 16,
    color: colors.black,
    fontSize: 16,
  },
  optionText: {
    color: colors.black,
    paddingVertical: 4,
    fontSize: 16,
  },
  selectedOption: {
    color: colors.blue,
    fontWeight: 'bold',
  },
});
