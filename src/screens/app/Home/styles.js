import {StyleSheet, Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  list: {
    paddingVertical: 5,
    // height: 150,
    // marginBottom: 10,
  },
  productFlatList: {},
});
