import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../utils/colors';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {flex: 1},
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
  image: {
    width: width * 1,
    height: height * 0.55,
    backgroundColor: colors.lightGrey,
  },
  descContainer: {
    backgroundColor: colors.white,
    height: height * 0.5,
    marginTop: '-7%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.black,
    marginTop: 15,
  },
  price: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.black,
    marginTop: 10,
  },
  desc: {
    fontSize: 16,
    fontWeight: '300',
    color: colors.grey,
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    // width: width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  bottomImg: {
    padding: 16,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: colors.lightGrey,
  },
  bottomBtn: {
    width: width * 0.7,
  },
});
